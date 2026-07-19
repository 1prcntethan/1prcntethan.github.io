import React, { useEffect, useRef } from "react";
import * as THREE from "three";
import { OrbitControls } from "three/addons/controls/OrbitControls.js";
import { RoundedBoxGeometry } from "three/addons/geometries/RoundedBoxGeometry.js";
import WorldNav from "./components/world-nav.jsx";
import "./learner.css";

export default function Learner({ onExit }) {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;

    const scene = new THREE.Scene();
    scene.background = new THREE.Color("#f2f0ec");
    scene.fog = new THREE.Fog("#f2f0ec", 15, 28);

    const camera = new THREE.PerspectiveCamera(
      48,
      window.innerWidth / window.innerHeight,
      0.1,
      100
    );
    camera.position.set(0, 2.6, 8.2);
    scene.add(camera);

    // ---- lights ----
    const ambient = new THREE.AmbientLight("#ffffff", 0.55);
    scene.add(ambient);

    const windowLight = new THREE.DirectionalLight("#eaf1ff", 1.0);
    windowLight.position.set(1.0, 5.5, 6.5);
    windowLight.target.position.set(0, 1, 2);
    windowLight.castShadow = true;
    windowLight.shadow.mapSize.set(2048, 2048);
    windowLight.shadow.camera.left = -9;
    windowLight.shadow.camera.right = 9;
    windowLight.shadow.camera.top = 9;
    windowLight.shadow.camera.bottom = -9;
    windowLight.shadow.camera.near = 1;
    windowLight.shadow.camera.far = 30;
    windowLight.shadow.bias = -0.0015;
    scene.add(windowLight);
    scene.add(windowLight.target);

    const fill = new THREE.DirectionalLight("#fff5e8", 0.28);
    fill.position.set(-6, 4, -4);
    scene.add(fill);

    // warm accent near the nightstand lamp, contrasts the cool RGB glow elsewhere
    const lampGlow = new THREE.PointLight("#ffcf94", 0.9, 4, 2);
    lampGlow.position.set(4.05, 1.1, -1.85);
    scene.add(lampGlow);

    const renderer = new THREE.WebGLRenderer({ canvas, antialias: true });
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.shadowMap.enabled = true;
    renderer.shadowMap.type = THREE.PCFSoftShadowMap;
    renderer.outputColorSpace = THREE.SRGBColorSpace;

    // ---- tracked-creation helpers: every geometry/material/texture made
    // through these gets auto-registered for disposal on unmount ----
    const trackedGeometries = [];
    const trackedMaterials = [];
    const trackedTextures = [];
    const rgbMaterials = []; // { mat, phase, target: 'color' | 'emissive' }

    function mat(props) {
      const m = new THREE.MeshStandardMaterial(props);
      trackedMaterials.push(m);
      return m;
    }
    function matBasic(props) {
      const m = new THREE.MeshBasicMaterial(props);
      trackedMaterials.push(m);
      return m;
    }
    function rgb(m, phase, target = "emissive") {
      rgbMaterials.push({ mat: m, phase, target });
      return m;
    }
    function block(w, h, d, material) {
      const geo = new THREE.BoxGeometry(w, h, d);
      trackedGeometries.push(geo);
      const mesh = new THREE.Mesh(geo, material);
      mesh.castShadow = true;
      mesh.receiveShadow = true;
      return mesh;
    }
    function roundedBlock(w, h, d, material, radius = 0.02, segments = 2) {
      const geo = new RoundedBoxGeometry(w, h, d, segments, radius);
      trackedGeometries.push(geo);
      const mesh = new THREE.Mesh(geo, material);
      mesh.castShadow = true;
      mesh.receiveShadow = true;
      return mesh;
    }
    function cyl(rTop, rBottom, h, material, radialSegments = 16) {
      const geo = new THREE.CylinderGeometry(rTop, rBottom, h, radialSegments);
      trackedGeometries.push(geo);
      const mesh = new THREE.Mesh(geo, material);
      mesh.castShadow = true;
      mesh.receiveShadow = true;
      return mesh;
    }
    function torus(r, tube, arc, material, radialSeg = 12, tubularSeg = 24) {
      const geo = new THREE.TorusGeometry(r, tube, radialSeg, tubularSeg, arc);
      trackedGeometries.push(geo);
      const mesh = new THREE.Mesh(geo, material);
      mesh.castShadow = true;
      return mesh;
    }
    function circleMesh(r, material, segments = 24) {
      const geo = new THREE.CircleGeometry(r, segments);
      trackedGeometries.push(geo);
      return new THREE.Mesh(geo, material);
    }
    function planeMesh(w, h, material) {
      const geo = new THREE.PlaneGeometry(w, h);
      trackedGeometries.push(geo);
      return new THREE.Mesh(geo, material);
    }
    function sphereMesh(r, material, ws = 16, hs = 16) {
      const geo = new THREE.SphereGeometry(r, ws, hs);
      trackedGeometries.push(geo);
      const mesh = new THREE.Mesh(geo, material);
      mesh.castShadow = true;
      mesh.receiveShadow = true;
      return mesh;
    }
    function place(mesh, x, y, z, ry = 0) {
      mesh.position.set(x, y, z);
      if (ry) mesh.rotation.y = ry;
      scene.add(mesh);
      return mesh;
    }

    // ---- dark wood floor texture (same technique as the artist studio, cooler/darker palette) ----
    function makeFloorTexture() {
      const size = 512;
      const cnv = document.createElement("canvas");
      cnv.width = size;
      cnv.height = size;
      const ctx = cnv.getContext("2d");

      ctx.fillStyle = "#4a3a2e";
      ctx.fillRect(0, 0, size, size);

      const plankH = size / 8;
      for (let i = 0; i < 8; i++) {
        ctx.fillStyle = `rgba(0,0,0,${0.05 + (i % 3) * 0.02})`;
        ctx.fillRect(0, i * plankH, size, plankH);
        ctx.strokeStyle = "rgba(15,10,6,0.5)";
        ctx.lineWidth = 2;
        ctx.beginPath();
        ctx.moveTo(0, i * plankH);
        ctx.lineTo(size, i * plankH);
        ctx.stroke();

        for (let g = 0; g < 5; g++) {
          ctx.strokeStyle = `rgba(20,14,8,${0.06 + Math.random() * 0.07})`;
          ctx.lineWidth = 1;
          const y = i * plankH + Math.random() * plankH;
          ctx.beginPath();
          ctx.moveTo(0, y);
          ctx.bezierCurveTo(size * 0.3, y + 5, size * 0.7, y - 5, size, y);
          ctx.stroke();
        }
      }

      const tex = new THREE.CanvasTexture(cnv);
      tex.colorSpace = THREE.SRGBColorSpace;
      trackedTextures.push(tex);
      return tex;
    }

    // ---- materials ----
    const floorTex = makeFloorTexture();
    floorTex.wrapS = floorTex.wrapT = THREE.RepeatWrapping;
    floorTex.repeat.set(5, 4);
    const floorMat = mat({ map: floorTex, roughness: 0.75 });

    const wallMat = mat({ color: "#f6f4ef", roughness: 0.92 });
    const trimMat = mat({ color: "#e3ddd0", roughness: 0.8 });
    const mullionMat = mat({ color: "#3a3a3a", roughness: 0.5 });
    const windowGlowMat = matBasic({ color: "#eaf3ff", fog: false });

    const deskMat = mat({ color: "#fbfbfa", roughness: 0.35 });
    const drawerBodyMat = mat({ color: "#f4f3f0", roughness: 0.4 });
    const handleMat = mat({ color: "#2b2b2b", roughness: 0.4, metalness: 0.5 });

    const pcCaseMat = mat({ color: "#fafafa", roughness: 0.25, metalness: 0.1 });
    const pcGlassMat = mat({
      color: "#1a1a1a", roughness: 0.05, metalness: 0.2,
      transparent: true, opacity: 0.4,
    });
    const fanHubMat = mat({ color: "#151515", roughness: 0.6 });

    const monitorBezelMat = mat({ color: "#161616", roughness: 0.5 });
    const monitorScreenMat = mat({
      color: "#0a0a0f", emissive: "#1c3a52", emissiveIntensity: 0.5, roughness: 0.2,
    });
    const monitorStandMat = mat({ color: "#d8d8d8", roughness: 0.4, metalness: 0.3 });

    const speakerBodyMat = mat({ color: "#232323", roughness: 0.5 });
    const speakerConeMat = mat({ color: "#111111", roughness: 0.7 });

    const keycapMat = mat({ color: "#f0f0ee", roughness: 0.5 });
    const keyboardBaseMat = mat({ color: "#e6e6e2", roughness: 0.45 });

    const mouseMat = mat({ color: "#f2f2f0", roughness: 0.4 });
    const mousepadTopMat = mat({ color: "#2a2a2a", roughness: 0.85 });

    const headphoneMat = mat({ color: "#f5f5f3", roughness: 0.4 });
    const standMat = mat({ color: "#c9c9c9", roughness: 0.35, metalness: 0.5 });

    const chairSeatMat = mat({ color: "#f7f7f5", roughness: 0.5 });
    const chairFrameMat = mat({ color: "#1c1c1c", roughness: 0.4, metalness: 0.6 });

    const bedFrameMat = mat({ color: "#e8dcc8", roughness: 0.7 });
    const mattressMat = mat({ color: "#faf9f6", roughness: 0.85 });
    const pillowMat = mat({ color: "#ffffff", roughness: 0.9 });
    const blanketMat = mat({ color: "#c7c7c7", roughness: 0.85 });

    const dipBarMat = mat({ color: "#161616", roughness: 0.45, metalness: 0.4 });
    const rugMat = mat({ color: "#ded6c4", roughness: 0.95 });

    const beanbagMat = mat({ color: "#9c9c9c", roughness: 0.85 });

    const wardrobeMat = mat({ color: "#f7f6f2", roughness: 0.4 });
    const wardrobeSeamMat = mat({ color: "#c9c5ba", roughness: 0.6 });

    const shelfMat = mat({ color: "#fbfbfa", roughness: 0.35 });
    const potMat = mat({ color: "#f0ece2", roughness: 0.6 });
    const leafMat = mat({ color: "#4a7a4f", roughness: 0.6 });

    const journalCoverMat = mat({ color: "#141414", roughness: 0.35 });
    const journalPageMat = mat({ color: "#e8e0cc", roughness: 0.8 });

    const nightstandMat = mat({ color: "#fbfbfa", roughness: 0.35 });
    const lampStandMat = mat({ color: "#2b2b2b", roughness: 0.4, metalness: 0.5 });
    const lampBulbMat = mat({ color: "#fff2d6", emissive: "#ffb84d", emissiveIntensity: 1.4 });

    // ---- room shell ----
    const ROOM_W = 9;
    const ROOM_D = 7;
    const ROOM_H = 3.0;

    const floor = planeMesh(ROOM_W, ROOM_D, floorMat);
    floor.rotation.x = -Math.PI / 2;
    floor.receiveShadow = true;
    scene.add(floor);

    function buildWall(w, h, px, pz, ry) {
      const wall = planeMesh(w, h, wallMat);
      wall.position.set(px, h / 2, pz);
      wall.rotation.y = ry;
      wall.receiveShadow = true;
      scene.add(wall);
    }
    buildWall(ROOM_W, ROOM_H, 0, -ROOM_D / 2, 0); // back
    buildWall(ROOM_W, ROOM_H, 0, ROOM_D / 2, Math.PI); // front
    buildWall(ROOM_D, ROOM_H, -ROOM_W / 2, 0, Math.PI / 2); // left
    buildWall(ROOM_D, ROOM_H, ROOM_W / 2, 0, -Math.PI / 2); // right

    function addBaseboard(w, px, pz, ry) {
      place(block(w, 0.1, 0.03, trimMat), px, 0.05, pz, ry);
    }
    addBaseboard(ROOM_W, 0, -ROOM_D / 2 + 0.02, 0);
    addBaseboard(ROOM_W, 0, ROOM_D / 2 - 0.02, 0);
    addBaseboard(ROOM_D, -ROOM_W / 2 + 0.02, 0, Math.PI / 2);
    addBaseboard(ROOM_D, ROOM_W / 2 - 0.02, 0, Math.PI / 2);

    // window — front wall, soft daylight glow
    place(planeMesh(2.6, 2.2, windowGlowMat), 1.0, 1.8, ROOM_D / 2 - 0.03, Math.PI);
    place(planeMesh(2.8, 2.4, mullionMat), 1.0, 1.8, ROOM_D / 2 - 0.015, Math.PI);
    function mullion(w, h, x, y) {
      place(block(w, h, 0.04, mullionMat), x, y, ROOM_D / 2 - 0.05, Math.PI);
    }
    mullion(0.04, 2.2, 1.0, 1.8);
    mullion(2.6, 0.04, 1.0, 1.8);

    // =====================================================================
    // DESK SETUP — L-shaped, axis-aligned (side desk uses swapped w/d instead
    // of a rotation), against the back-left wall corner
    // =====================================================================
    const DESK_TOP_Y = 0.75;
    const DESK_TOP_THICK = 0.04;
    const LEG_H = DESK_TOP_Y - DESK_TOP_THICK;

    function deskLegs(cx, cz, w, d) {
      const inset = 0.06;
      [
        [cx - w / 2 + inset, cz - d / 2 + inset],
        [cx + w / 2 - inset, cz - d / 2 + inset],
        [cx - w / 2 + inset, cz + d / 2 - inset],
        [cx + w / 2 - inset, cz + d / 2 - inset],
      ].forEach(([x, z]) => {
        place(block(0.045, LEG_H, 0.045, deskMat), x, LEG_H / 2, z);
      });
    }

    const MAIN_DESK_X = -2.3;
    const MAIN_DESK_Z = -3.155;
    const MAIN_DESK_W = 2.0;
    const MAIN_DESK_D = 0.65;

    place(
      roundedBlock(MAIN_DESK_W, DESK_TOP_THICK, MAIN_DESK_D, deskMat, 0.015),
      MAIN_DESK_X, DESK_TOP_Y - DESK_TOP_THICK / 2, MAIN_DESK_Z
    );
    deskLegs(MAIN_DESK_X, MAIN_DESK_Z, MAIN_DESK_W, MAIN_DESK_D);

    const SIDE_DESK_X = -0.975;
    const SIDE_DESK_Z = -2.98;
    const SIDE_DESK_W = 0.65; // shallow, matches main desk depth for visual consistency
    const SIDE_DESK_D = 1.0; // extends into the room

    place(
      roundedBlock(SIDE_DESK_W, DESK_TOP_THICK, SIDE_DESK_D, deskMat, 0.015),
      SIDE_DESK_X, DESK_TOP_Y - DESK_TOP_THICK / 2, SIDE_DESK_Z
    );
    deskLegs(SIDE_DESK_X, SIDE_DESK_Z, SIDE_DESK_W, SIDE_DESK_D);

    // drawer chest, left of main desk against the back wall
    const CHEST_X = -3.6;
    const CHEST_Z = -3.23;
    place(roundedBlock(0.5, 0.9, 0.5, drawerBodyMat, 0.015), CHEST_X, 0.45, CHEST_Z);
    for (let i = 0; i < 4; i++) {
      const y = 0.12 + i * 0.2;
      place(block(0.44, 0.02, 0.02, handleMat), CHEST_X, y + 0.06, CHEST_Z + 0.26);
      // faint seam lines between drawer fronts
      place(block(0.46, 0.004, 0.002, wardrobeSeamMat), CHEST_X, y, CHEST_Z + 0.251);
    }

    // PC tower — tucked under the right end of the main desk, glass panel
    // facing +x (into the room) so it's visible from most orbit angles
    const pcGroup = new THREE.Group();
    pcGroup.position.set(-1.55, 0.23, -3.1);
    scene.add(pcGroup);
    pcGroup.add(place(block(0.2, 0.46, 0.42, pcCaseMat), 0, 0, 0));
    const glassPanel = place(block(0.01, 0.4, 0.36, pcGlassMat), 0.105, 0, 0);
    pcGroup.remove(glassPanel);
    pcGroup.add(glassPanel);
    [0.1, -0.1].forEach((zOff) => {
      const hub = circleMesh(0.075, fanHubMat);
      hub.rotation.y = -Math.PI / 2;
      hub.position.set(0.111, 0, zOff);
      pcGroup.add(hub);
      const ring = torus(0.08, 0.008, Math.PI * 2, rgb(matBasic({ color: "#ff4d4d" }), zOff * 3 + 1.5, "color"));
      ring.rotation.y = -Math.PI / 2;
      ring.position.set(0.112, 0, zOff);
      pcGroup.add(ring);
    });

    // dual monitors, angled slightly inward, mounted on thin risers
    function buildMonitor(x, z, yaw) {
      const g = new THREE.Group();
      g.position.set(x, 0, z);
      g.rotation.y = yaw;
      scene.add(g);
      g.add(place(cyl(0.02, 0.03, 0.28, monitorStandMat), 0, DESK_TOP_Y + 0.14, 0));
      const bezel = block(0.6, 0.35, 0.025, monitorBezelMat);
      bezel.position.set(0, DESK_TOP_Y + 0.28 + 0.175, 0);
      g.add(bezel);
      const screen = planeMesh(0.56, 0.31, monitorScreenMat);
      screen.position.set(0, DESK_TOP_Y + 0.28 + 0.175, 0.014);
      g.add(screen);
    }
    buildMonitor(-2.72, -3.4, 0.1);
    buildMonitor(-1.88, -3.4, -0.1);

    // soft additive glow plane on the wall behind the monitors — bias lighting look
    const monitorGlow = planeMesh(
      2.0, 1.0,
      matBasic({ color: "#5ec6ff", transparent: true, opacity: 0.35, blending: THREE.AdditiveBlending, fog: false })
    );
    monitorGlow.position.set(-2.3, 1.4, -3.49);
    scene.add(monitorGlow);

    // speakers flanking the monitors
    [-3.25, -1.35].forEach((x) => {
      const g = new THREE.Group();
      g.position.set(x, 0.8, -3.35);
      scene.add(g);
      g.add(place(roundedBlock(0.12, 0.22, 0.14, speakerBodyMat, 0.01), 0, 0, 0));
      const cone = circleMesh(0.045, speakerConeMat);
      cone.position.set(0, 0.02, 0.071);
      g.add(cone);
    });

    // keyboard — simplified key grid (no per-key labels; this isn't the scene's
    // focal interactive object the way the laptop keyboard is)
    const kbGroup = new THREE.Group();
    kbGroup.position.set(-2.3, DESK_TOP_Y, -2.9);
    scene.add(kbGroup);
    kbGroup.add(place(roundedBlock(0.42, 0.012, 0.15, keyboardBaseMat, 0.008), 0, 0.006, 0));
    const KB_COLS = 15, KB_ROWS = 4, KEY_P = 0.026;
    for (let r = 0; r < KB_ROWS; r++) {
      for (let c = 0; c < KB_COLS; c++) {
        const kx = -((KB_COLS - 1) * KEY_P) / 2 + c * KEY_P;
        const kz = -((KB_ROWS - 1) * KEY_P) / 2 + r * KEY_P;
        const cap = roundedBlock(0.021, 0.01, 0.021, keycapMat, 0.003);
        cap.position.set(kx, 0.017, kz);
        kbGroup.add(cap);
      }
    }
    const kbGlow = planeMesh(0.44, 0.02, rgb(matBasic({ color: "#7c4dff" }), 0, "color"));
    kbGlow.rotation.x = -Math.PI / 2;
    kbGlow.position.set(0, 0.001, 0.09);
    kbGroup.add(kbGlow);

    // mousepad + mouse — glowing border achieved with a larger emissive layer
    // peeking out beneath a smaller matte fabric top
    const padGlow = roundedBlock(0.37, 0.006, 0.3, rgb(mat({ color: "#111111", emissive: "#00e0c0" }), 2.4), 0.04);
    place(padGlow, -1.55, DESK_TOP_Y + 0.003, -2.9);
    place(roundedBlock(0.33, 0.004, 0.26, mousepadTopMat, 0.03), -1.55, DESK_TOP_Y + 0.008, -2.9);
    place(roundedBlock(0.06, 0.03, 0.1, mouseMat, 0.02), -1.45, DESK_TOP_Y + 0.026, -2.85);

    // headphone stand on the side desk
    const hpStandX = -0.975, hpStandZ = -2.7;
    place(cyl(0.012, 0.012, 0.22, standMat), hpStandX, DESK_TOP_Y + 0.11, hpStandZ);
    place(cyl(0.05, 0.06, 0.015, standMat), hpStandX, DESK_TOP_Y + 0.007, hpStandZ);
    const headband = torus(0.09, 0.012, Math.PI, headphoneMat, 10, 20);
    headband.rotation.z = Math.PI;
    headband.position.set(hpStandX, DESK_TOP_Y + 0.24, hpStandZ);
    scene.add(headband);
    [-0.09, 0.09].forEach((xOff, i) => {
      const cup = cyl(0.045, 0.045, 0.03, headphoneMat, 20);
      cup.rotation.z = Math.PI / 2;
      cup.position.set(hpStandX + xOff, DESK_TOP_Y + 0.22, hpStandZ);
      scene.add(cup);
      const ring = torus(0.046, 0.004, Math.PI * 2, rgb(matBasic({ color: "#ff4dd8" }), i * 2 + 0.5, "color"), 8, 20);
      ring.rotation.z = Math.PI / 2;
      ring.position.set(hpStandX + xOff + (i === 0 ? -0.001 : 0.001), DESK_TOP_Y + 0.22, hpStandZ);
      scene.add(ring);
    });

    // journal — closed, resting on the main desk's left edge
    place(block(0.18, 0.02, 0.24, journalCoverMat), -3.4, DESK_TOP_Y + 0.01, -3.0);
    place(block(0.176, 0.014, 0.236, journalPageMat), -3.4, DESK_TOP_Y + 0.017, -3.0);

    // under-desk front-edge LED strip
    const underGlow = planeMesh(MAIN_DESK_W - 0.1, 0.02, rgb(matBasic({ color: "#4ecdc4" }), 4, "color"));
    underGlow.rotation.x = Math.PI / 2;
    underGlow.position.set(MAIN_DESK_X, DESK_TOP_Y - DESK_TOP_THICK - 0.01, MAIN_DESK_Z + MAIN_DESK_D / 2 - 0.01);
    scene.add(underGlow);

    // chair
    const chairGroup = new THREE.Group();
    chairGroup.position.set(-2.3, 0, -2.15);
    scene.add(chairGroup);
    for (let i = 0; i < 5; i++) {
      const a = (i / 5) * Math.PI * 2;
      const spoke = block(0.28, 0.03, 0.05, chairFrameMat);
      spoke.position.set(Math.cos(a) * 0.14, 0.04, Math.sin(a) * 0.14);
      spoke.rotation.y = a;
      chairGroup.add(spoke);
    }
    chairGroup.add(place(cyl(0.02, 0.025, 0.42, chairFrameMat), 0, 0.26, 0));
    chairGroup.add(place(roundedBlock(0.42, 0.08, 0.4, chairSeatMat, 0.03), 0, 0.5, 0));
    const backrest = roundedBlock(0.4, 0.5, 0.08, chairSeatMat, 0.05);
    backrest.position.set(0, 0.82, -0.17);
    backrest.rotation.x = -0.15;
    chairGroup.add(backrest);

    // =====================================================================
    // BED — headboard against the right wall, length runs along x
    // =====================================================================
    const BED_X = 3.48, BED_Z = -1.0;
    place(block(2.0, 0.3, 1.4, bedFrameMat), BED_X, 0.15, BED_Z);
    place(block(0.06, 0.9, 1.4, bedFrameMat), ROOM_W / 2 - 0.05, 0.55, BED_Z);
    place(roundedBlock(1.9, 0.25, 1.3, mattressMat, 0.04), 3.5, 0.425, BED_Z);
    place(roundedBlock(0.34, 0.12, 0.5, pillowMat, 0.06), 4.15, 0.6, BED_Z - 0.32);
    place(roundedBlock(0.34, 0.12, 0.5, pillowMat, 0.06), 4.15, 0.6, BED_Z + 0.32);
    place(roundedBlock(0.9, 0.08, 1.3, blanketMat, 0.05), 2.9, 0.58, BED_Z);

    // nightstand + warm lamp
    place(roundedBlock(0.35, 0.45, 0.4, nightstandMat, 0.02), 4.28, 0.225, -1.85);
    place(cyl(0.015, 0.015, 0.28, lampStandMat), 4.28, 0.6, -1.85);
    place(sphereMesh(0.06, lampBulbMat, 12, 12), 4.28, 0.77, -1.85);

    // =====================================================================
    // GYM CORNER — dip station (2 posts-pairs, 2 parallel bars) + 2 parallettes
    // =====================================================================
    place(planeMesh(2.2, 2.4, rugMat), -3.3, 0.001, 1.7).rotation.x = -Math.PI / 2;

    function dipPost(x, z, h) {
      place(cyl(0.028, 0.032, h, dipBarMat), x, h / 2, z);
    }
    const DIP_H = 1.15;
    [-3.9, -3.4].forEach((x) => {
      [1.2, 2.0].forEach((z) => dipPost(x, z, DIP_H));
      const bar = cyl(0.02, 0.02, 0.8, dipBarMat);
      bar.rotation.x = Math.PI / 2;
      place(bar, x, DIP_H, 1.6);
    });

    function parallette(x, z) {
      const g = new THREE.Group();
      g.position.set(x, 0, z);
      scene.add(g);
      [-0.18, 0.18].forEach((zOff) => {
        g.add(place(cyl(0.014, 0.016, 0.22, dipBarMat), 0, 0.11, zOff));
      });
      const bar = cyl(0.014, 0.014, 0.36, dipBarMat);
      bar.rotation.x = Math.PI / 2;
      bar.position.set(0, 0.22, 0);
      g.add(bar);
    }
    parallette(-2.7, 1.4);
    parallette(-2.3, 1.4);

    // =====================================================================
    // BEANBAG — near the window
    // =====================================================================
    const beanbag = sphereMesh(0.5, beanbagMat, 20, 16);
    beanbag.scale.set(1, 0.7, 1);
    place(beanbag, 1.6, 0.35, 2.9);

    // =====================================================================
    // WARDROBE — back wall, right end (balances the desk on the left end)
    // =====================================================================
    const WARD_X = 2.8, WARD_Z = -3.4;
    place(roundedBlock(1.2, 1.8, 0.55, wardrobeMat, 0.015), WARD_X, 0.9, WARD_Z);
    place(block(0.02, 1.7, 0.02, wardrobeSeamMat), WARD_X, 0.9, WARD_Z + 0.28);
    [-0.25, 0.25].forEach((xOff) => {
      place(block(0.02, 0.14, 0.02, handleMat), WARD_X + xOff, 0.9, WARD_Z + 0.28);
    });

    // =====================================================================
    // SHELF + PLANT — left wall, between desk and gym corner
    // =====================================================================
    const SHELF_X = -4.46, SHELF_Y = 1.7, SHELF_Z = 0.5;
    const shelf = block(0.03, 0.28, 0.5, shelfMat);
    shelf.rotation.y = Math.PI / 2;
    place(shelf, SHELF_X, SHELF_Y, SHELF_Z);
    place(cyl(0.05, 0.06, 0.08, potMat), SHELF_X + 0.15, SHELF_Y + 0.18, SHELF_Z);
    for (let i = 0; i < 5; i++) {
      const leaf = sphereMesh(0.03, leafMat, 8, 8);
      leaf.scale.set(1, 1.8, 0.4);
      const a = (i / 5) * Math.PI * 2;
      leaf.position.set(
        SHELF_X + 0.15 + Math.cos(a) * 0.03,
        SHELF_Y + 0.25 + i * 0.015,
        SHELF_Z + Math.sin(a) * 0.03
      );
      leaf.rotation.y = a;
      scene.add(leaf);
    }

    // ---- camera controls ----
    const controls = new OrbitControls(camera, canvas);
    controls.enableDamping = true;
    controls.autoRotate = true;
    controls.autoRotateSpeed = 0.3;
    controls.enablePan = false;
    controls.enableZoom = false;
    controls.minPolarAngle = 0.5;
    controls.maxPolarAngle = 1.4;
    controls.target.set(0, 1.2, 0);
    controls.update();

    function handleResize() {
      const { width, height } = canvas.parentElement.getBoundingClientRect();
      camera.aspect = width / height;
      camera.updateProjectionMatrix();
      renderer.setSize(width, height, false);
      renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    }
    handleResize();
    window.addEventListener("resize", handleResize);

    function updateRGB(elapsed) {
      rgbMaterials.forEach(({ mat: m, phase, target }) => {
        const hue = ((elapsed * 0.06) + phase) % 1;
        if (target === "emissive") m.emissive.setHSL(hue, 0.85, 0.5);
        else m.color.setHSL(hue, 0.85, 0.55);
      });
    }

    const clock = new THREE.Clock();
    let animationId;
    const renderLoop = () => {
      controls.update();
      updateRGB(clock.getElapsedTime());
      renderer.render(scene, camera);
      animationId = requestAnimationFrame(renderLoop);
    };
    renderLoop();

    return () => {
      cancelAnimationFrame(animationId);
      window.removeEventListener("resize", handleResize);
      controls.dispose();
      renderer.dispose();

      trackedGeometries.forEach((g) => g.dispose());
      trackedMaterials.forEach((m) => m.dispose());
      trackedTextures.forEach((t) => t.dispose());
    };
  }, []);

  return (
    <div className="learner-scene">
      <canvas ref={canvasRef} className="learner-canvas" />
      <WorldNav onExit={onExit} visible={true} />
    </div>
  );
}