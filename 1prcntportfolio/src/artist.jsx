import React, { useEffect, useRef, useState } from "react";
import * as THREE from "three";
import { OrbitControls } from "three/addons/controls/OrbitControls.js";
import { RoundedBoxGeometry } from "three/addons/geometries/RoundedBoxGeometry.js";
import WorldNav from "./components/world-nav.jsx";
import "./artist.css";

export default function Artist({ onExit }) {
  const canvasRef = useRef(null);
  const [zoomedIn, setZoomedIn] = useState(false);

  useEffect(() => {
    const canvas = canvasRef.current;

    const scene = new THREE.Scene();
    scene.background = new THREE.Color("#ece3d6");
    scene.fog = new THREE.Fog("#ece3d6", 14, 26);

    const camera = new THREE.PerspectiveCamera(
      48,
      window.innerWidth / window.innerHeight,
      0.1,
      100
    );
    const DEFAULT_CAM_POS = new THREE.Vector3(0, 2.4, 6.6);
    const DEFAULT_TARGET = new THREE.Vector3(0, 1.4, 0);
    camera.position.copy(DEFAULT_CAM_POS);
    scene.add(camera);

    // ---- lights ----
    const ambient = new THREE.AmbientLight("#fff3e2", 0.55);
    scene.add(ambient);

    const windowLight = new THREE.DirectionalLight("#fff0d8", 1.15);
    windowLight.position.set(-5, 5.5, -3);
    windowLight.target.position.set(0, 1, 0);
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

    const fill = new THREE.DirectionalLight("#d9e6ec", 0.3);
    fill.position.set(6, 3, 5);
    scene.add(fill);

    const renderer = new THREE.WebGLRenderer({ canvas, antialias: true });
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.shadowMap.enabled = true;
    renderer.shadowMap.type = THREE.PCFSoftShadowMap;
    renderer.outputColorSpace = THREE.SRGBColorSpace;

    // ---- texture helpers ----
    function makeFloorTexture() {
      const size = 512;
      const cnv = document.createElement("canvas");
      cnv.width = size;
      cnv.height = size;
      const ctx = cnv.getContext("2d");

      ctx.fillStyle = "#8a6a48";
      ctx.fillRect(0, 0, size, size);

      const plankH = size / 8;
      for (let i = 0; i < 8; i++) {
        ctx.fillStyle = `rgba(0,0,0,${0.04 + (i % 3) * 0.015})`;
        ctx.fillRect(0, i * plankH, size, plankH);
        ctx.strokeStyle = "rgba(40,25,12,0.4)";
        ctx.lineWidth = 2;
        ctx.beginPath();
        ctx.moveTo(0, i * plankH);
        ctx.lineTo(size, i * plankH);
        ctx.stroke();

        for (let g = 0; g < 6; g++) {
          ctx.strokeStyle = `rgba(50,32,16,${0.05 + Math.random() * 0.08})`;
          ctx.lineWidth = 1;
          const y = i * plankH + Math.random() * plankH;
          ctx.beginPath();
          ctx.moveTo(0, y);
          ctx.bezierCurveTo(size * 0.3, y + 6, size * 0.7, y - 6, size, y);
          ctx.stroke();
        }
      }

      const tex = new THREE.CanvasTexture(cnv);
      tex.colorSpace = THREE.SRGBColorSpace;
      return tex;
    }

    const PALETTES = [
      ["#8a3b2b", "#d98c4a", "#f2c14e", "#3c2a21"],
      ["#2b4a5e", "#5c8a99", "#a9c9c9", "#1c2b2f"],
      ["#3f5d3a", "#7c9a5e", "#c9b88a", "#28331f"],
      ["#5c3b5e", "#8a5c8a", "#c9a0c0", "#2b1c2b"],
      ["#7c2b2b", "#b85c3b", "#e8c07a", "#2b1c1c"],
      ["#2b3b5e", "#4a6a8a", "#c9d4c9", "#1c232b"],
      ["#6a4a2b", "#a9793c", "#e8d4a0", "#2b2318"],
    ];

    function makePaintingTexture(paletteIdx) {
      const size = 512;
      const cnv = document.createElement("canvas");
      cnv.width = size;
      cnv.height = size;
      const ctx = cnv.getContext("2d");
      const palette = PALETTES[paletteIdx % PALETTES.length];

      ctx.fillStyle = palette[3];
      ctx.fillRect(0, 0, size, size);

      const grad = ctx.createLinearGradient(0, 0, size, size);
      grad.addColorStop(0, palette[0]);
      grad.addColorStop(1, palette[1]);
      ctx.globalAlpha = 0.85;
      ctx.fillStyle = grad;
      ctx.fillRect(0, 0, size, size);
      ctx.globalAlpha = 1;

      let seed = paletteIdx * 97 + 13;
      const rand = () => {
        seed = (seed * 1103515245 + 12345) & 0x7fffffff;
        return (seed % 1000) / 1000;
      };

      for (let i = 0; i < 14; i++) {
        const r = 40 + rand() * 130;
        const x = rand() * size;
        const y = rand() * size;
        ctx.globalAlpha = 0.18 + rand() * 0.25;
        ctx.fillStyle = palette[Math.floor(rand() * palette.length)];
        ctx.beginPath();
        ctx.ellipse(x, y, r, r * (0.6 + rand() * 0.6), rand() * Math.PI, 0, Math.PI * 2);
        ctx.fill();
      }
      ctx.globalAlpha = 1;

      for (let i = 0; i < 5; i++) {
        ctx.strokeStyle = palette[Math.floor(rand() * palette.length)];
        ctx.lineWidth = 6 + rand() * 14;
        ctx.lineCap = "round";
        ctx.globalAlpha = 0.5 + rand() * 0.3;
        ctx.beginPath();
        ctx.moveTo(rand() * size, rand() * size);
        ctx.bezierCurveTo(
          rand() * size, rand() * size,
          rand() * size, rand() * size,
          rand() * size, rand() * size
        );
        ctx.stroke();
      }
      ctx.globalAlpha = 1;

      const tex = new THREE.CanvasTexture(cnv);
      tex.colorSpace = THREE.SRGBColorSpace;
      return tex;
    }

    function makeInProgressTexture() {
      const size = 512;
      const cnv = document.createElement("canvas");
      cnv.width = size;
      cnv.height = size;
      const ctx = cnv.getContext("2d");

      ctx.fillStyle = "#e8dcc4";
      ctx.fillRect(0, 0, size, size);

      ctx.strokeStyle = "rgba(90,70,50,0.35)";
      ctx.lineWidth = 2;
      ctx.beginPath();
      ctx.moveTo(size * 0.2, size * 0.75);
      ctx.bezierCurveTo(size * 0.35, size * 0.3, size * 0.65, size * 0.25, size * 0.82, size * 0.6);
      ctx.stroke();

      [
        { x: 0.25, y: 0.55, r: 70, c: "#6a4a3b" },
        { x: 0.55, y: 0.35, r: 55, c: "#8a9a6a" },
        { x: 0.68, y: 0.55, r: 60, c: "#c98a4a" },
      ].forEach((p) => {
        ctx.globalAlpha = 0.65;
        ctx.fillStyle = p.c;
        ctx.beginPath();
        ctx.ellipse(p.x * size, p.y * size, p.r, p.r * 0.8, 0, 0, Math.PI * 2);
        ctx.fill();
      });
      ctx.globalAlpha = 1;

      const tex = new THREE.CanvasTexture(cnv);
      tex.colorSpace = THREE.SRGBColorSpace;
      return tex;
    }

    // ---- shared materials ----
    const floorTex = makeFloorTexture();
    floorTex.wrapS = floorTex.wrapT = THREE.RepeatWrapping;
    floorTex.repeat.set(6, 6);
    const floorMat = new THREE.MeshStandardMaterial({ map: floorTex, roughness: 0.85 });

    const wallMat = new THREE.MeshStandardMaterial({ color: "#e8e0d0", roughness: 0.95 });
    const trimMat = new THREE.MeshStandardMaterial({ color: "#c9bfa8", roughness: 0.8 });
    const mullionMat = new THREE.MeshStandardMaterial({ color: "#4a4438", roughness: 0.6 });
    const windowGlowMat = new THREE.MeshBasicMaterial({ color: "#fff6e6", fog: false });
    const woodMat = new THREE.MeshStandardMaterial({ color: "#8a6a45", roughness: 0.7, metalness: 0.05 });
    const frameMat = new THREE.MeshStandardMaterial({ color: "#c9b78c", roughness: 0.85 });
    const canvasBackMat = new THREE.MeshStandardMaterial({ color: "#cbb490", roughness: 0.95 });
    const jarMat = new THREE.MeshStandardMaterial({
      color: "#8a8578", roughness: 0.4, metalness: 0.1, transparent: true, opacity: 0.85,
    });
    const brushMat = new THREE.MeshStandardMaterial({ color: "#6a4a30", roughness: 0.7 });
    const bristleMat = new THREE.MeshStandardMaterial({ color: "#332318", roughness: 0.95 });

    // ---- disposal tracking ----
    const paintingTextures = [];
    const paintingMaterials = [];
    const canvasGeometries = [];
    const standGeometries = [];
    const brushGeometries = [];

    // ---- unified draggable-canvas registry ----
    const canvasStates = [];
    function registerCanvas(mesh, id, w, h, startMounted = false) {
      canvasStates.push({
        mesh,
        id,
        w,
        h,
        mode: startMounted ? "mounted" : "settled", // held | flying | settling | settled | mounted
        physicalPos: mesh.position.clone(),
        physicalQuat: mesh.quaternion.clone(),
        targetPos: mesh.position.clone(),
        targetQuat: mesh.quaternion.clone(),
        velocity: new THREE.Vector3(),
        angularVelocity: new THREE.Vector3(),
        grabOffset: new THREE.Vector3(),
        dragVelocity: new THREE.Vector3(),
        lastDragPos: new THREE.Vector3(),
        lastDragTime: 0,
        rollBias: (Math.random() - 0.5) * 0.5, // per-painting personality, so held pieces don't all look identical
        bounceCount: 0,
      });
    }

    function paintingTexture(idx) {
      const t = makePaintingTexture(idx);
      paintingTextures.push(t);
      return t;
    }

    function buildStretcherCanvas(width, height, texture) {
      const frontMat = new THREE.MeshStandardMaterial({ map: texture, roughness: 0.82 });
      paintingMaterials.push(frontMat);
      const geo = new THREE.BoxGeometry(width, height, 0.035);
      canvasGeometries.push(geo);
      // material order for BoxGeometry is [+X,-X,+Y,-Y,+Z,-Z] — front face is +Z
      const mesh = new THREE.Mesh(geo, [
        frameMat, frameMat, frameMat, frameMat, frontMat, canvasBackMat,
      ]);
      mesh.castShadow = true;
      mesh.receiveShadow = true;
      return mesh;
    }

    // ---- room shell ----
    const ROOM_W = 16;
    const ROOM_D = 16;
    const ROOM_H = 6.5;

    const floor = new THREE.Mesh(new THREE.PlaneGeometry(ROOM_W, ROOM_D), floorMat);
    floor.rotation.x = -Math.PI / 2;
    floor.receiveShadow = true;
    scene.add(floor);

    function buildWall(w, h, px, pz, ry) {
      const wall = new THREE.Mesh(new THREE.PlaneGeometry(w, h), wallMat);
      wall.position.set(px, h / 2, pz);
      wall.rotation.y = ry;
      wall.receiveShadow = true;
      scene.add(wall);
    }
    buildWall(ROOM_W, ROOM_H, 0, -ROOM_D / 2, 0);
    buildWall(ROOM_W, ROOM_H, 0, ROOM_D / 2, Math.PI);
    buildWall(ROOM_D, ROOM_H, -ROOM_W / 2, 0, Math.PI / 2);
    buildWall(ROOM_D, ROOM_H, ROOM_W / 2, 0, -Math.PI / 2);

    function addBaseboard(w, px, pz, ry) {
      const b = new THREE.Mesh(new THREE.BoxGeometry(w, 0.12, 0.03), trimMat);
      b.position.set(px, 0.06, pz);
      b.rotation.y = ry;
      scene.add(b);
    }
    addBaseboard(ROOM_W, 0, -ROOM_D / 2 + 0.02, 0);
    addBaseboard(ROOM_W, 0, ROOM_D / 2 - 0.02, 0);
    addBaseboard(ROOM_D, -ROOM_W / 2 + 0.02, 0, Math.PI / 2);
    addBaseboard(ROOM_D, ROOM_W / 2 - 0.02, 0, Math.PI / 2);

    const windowPane = new THREE.Mesh(new THREE.PlaneGeometry(3.2, 3.6), windowGlowMat);
    windowPane.position.set(-4.2, 3.4, -ROOM_D / 2 + 0.03);
    scene.add(windowPane);

    const windowFrame = new THREE.Mesh(new THREE.PlaneGeometry(3.4, 3.8), mullionMat);
    windowFrame.position.set(-4.2, 3.4, -ROOM_D / 2 + 0.015);
    scene.add(windowFrame);

    function addMullion(w, h, x, y) {
      const m = new THREE.Mesh(new THREE.BoxGeometry(w, h, 0.04), mullionMat);
      m.position.set(x, y, -ROOM_D / 2 + 0.05);
      scene.add(m);
    }
    addMullion(0.05, 3.6, -4.2, 3.4);
    addMullion(3.2, 0.05, -4.2, 3.4);
    addMullion(0.05, 3.6, -5.0, 3.4);
    addMullion(0.05, 3.6, -3.4, 3.4);

    // ---- beam helper: connects two explicit 3D points with a wood cylinder ----
    // building legs this way (real endpoints) instead of rotating flat cylinders
    // sidesteps Euler-order surprises entirely — what you place is what you get
    function beamBetween(a, b, thickness) {
      const dir = new THREE.Vector3().subVectors(b, a);
      const len = dir.length();
      const mid = new THREE.Vector3().addVectors(a, b).multiplyScalar(0.5);
      const geo = new THREE.CylinderGeometry(thickness, thickness, len, 8);
      standGeometries.push(geo);
      const mesh = new THREE.Mesh(geo, woodMat);
      mesh.position.copy(mid);
      mesh.quaternion.setFromUnitVectors(new THREE.Vector3(0, 1, 0), dir.clone().normalize());
      mesh.castShadow = true;
      return mesh;
    }

    // ---- main working easel ----
    function buildEasel(x, z, rotY = 0) {
      const group = new THREE.Group();
      group.position.set(x, 0, z);
      group.rotation.y = rotY;

      const legLBottom = new THREE.Vector3(-0.48, 0, 0.4);
      const legLTop = new THREE.Vector3(-0.14, 2.35, 0.08);
      const legRBottom = new THREE.Vector3(0.48, 0, 0.4);
      const legRTop = new THREE.Vector3(0.14, 2.35, 0.08);
      const legBackBottom = new THREE.Vector3(0, 0, -0.62);
      // back leg's top is DEFINED as the front beam's midpoint — they meet at
      // one real point instead of two lines merely overlapping on screen
      const legBackTop = new THREE.Vector3().lerpVectors(legLTop, legRTop, 0.5);

      group.add(beamBetween(legLBottom, legLTop, 0.045));
      group.add(beamBetween(legRBottom, legRTop, 0.045));
      group.add(beamBetween(legBackBottom, legBackTop, 0.04));
      group.add(beamBetween(legLTop, legRTop, 0.05)); // the top beam — all 3 sticks join here

      const crossPtL = new THREE.Vector3().lerpVectors(legLBottom, legLTop, 0.58);
      const crossPtR = new THREE.Vector3().lerpVectors(legRBottom, legRTop, 0.58);
      group.add(beamBetween(crossPtL, crossPtR, 0.032));

      const ledgeCenter = new THREE.Vector3().lerpVectors(crossPtL, crossPtR, 0.5);
      ledgeCenter.z += 0.28;
      const ledge = new THREE.Mesh(new THREE.BoxGeometry(1.05, 0.04, 0.16), woodMat);
      ledge.position.copy(ledgeCenter);
      ledge.castShadow = true;
      group.add(ledge);

      scene.add(group);
      return { group, ledgeCenter };
    }

    const { group: mainEasel, ledgeCenter: mainLedge } = buildEasel(2.4, -1.2, -0.35);

    const inProgressCanvas = buildStretcherCanvas(1.15, 1.5, (() => {
      const t = makeInProgressTexture();
      paintingTextures.push(t);
      return t;
    })());
    const CANVAS_TILT = 0.22;
    // canvas position is DERIVED from the ledge, not guessed independently —
    // this is what guarantees the two can't drift out of alignment
    inProgressCanvas.position.set(
      mainLedge.x,
      mainLedge.y + (1.5 / 2) * Math.cos(CANVAS_TILT) + 0.02,
      mainLedge.z - (1.5 / 2) * Math.sin(CANVAS_TILT) - 0.05
    );
    inProgressCanvas.rotation.x = -CANVAS_TILT;
    mainEasel.add(inProgressCanvas);

    // capture the easel's real mount transform, then free the canvas to live in world space
    const easelSlot = {
      position: new THREE.Vector3(),
      quaternion: new THREE.Quaternion(),
    };
    inProgressCanvas.updateWorldMatrix(true, false);
    inProgressCanvas.getWorldPosition(easelSlot.position);
    inProgressCanvas.getWorldQuaternion(easelSlot.quaternion);
    scene.attach(inProgressCanvas);

    registerCanvas(inProgressCanvas, "sketch", 1.15, 1.5, true);

    // ---- finished canvases: leaned around the room ----
    const FINISHED_CANVASES = [
      { id: "c1", w: 1.5, h: 1.9, pos: [-5.2, 0.93, -7.55], rot: [0.08, 0.1, 0.05], paletteIdx: 0 },
      { id: "c2", w: 1.25, h: 1.55, pos: [-3.5, 0.75, -7.6], rot: [0.06, 0.06, -0.04], paletteIdx: 2 },
      { id: "c3", w: 0.95, h: 0.95, pos: [-4.35, 0.46, -7.15], rot: [0.05, 0.2, 0.09], paletteIdx: 5 },
      { id: "c4", w: 1.3, h: 1.65, pos: [-7.55, 0.8, -2.5], rot: [0.04, Math.PI / 2 - 0.1, -0.05], paletteIdx: 1 },
      { id: "c5", w: 1.15, h: 1.45, pos: [7.55, 0.7, 3.0], rot: [0.04, -Math.PI / 2 + 0.1, 0.04], paletteIdx: 4 },
      { id: "c6", w: 1.55, h: 1.2, pos: [1.2, 0.55, 3.3], rot: [-0.85, -0.2, -0.08], paletteIdx: 3 },
    ];

    FINISHED_CANVASES.forEach((c) => {
      const mesh = buildStretcherCanvas(c.w, c.h, paintingTexture(c.paletteIdx));
      mesh.position.set(...c.pos);
      mesh.rotation.set(...c.rot);
      scene.add(mesh);
      registerCanvas(mesh, c.id, c.w, c.h);
    });

    // ---- small stand, seventh piece — same point-based construction ----
    function buildSmallStand(x, z, rotY = 0) {
      const group = new THREE.Group();
      group.position.set(x, 0, z);
      group.rotation.y = rotY;

      const legLBottom = new THREE.Vector3(-0.3, 0, 0.24);
      const legLTop = new THREE.Vector3(-0.08, 1.05, 0.05);
      const legRBottom = new THREE.Vector3(0.3, 0, 0.24);
      const legRTop = new THREE.Vector3(0.08, 1.05, 0.05);
      const legBackBottom = new THREE.Vector3(0, 0, -0.32);
      const legBackTop = new THREE.Vector3().lerpVectors(legLTop, legRTop, 0.5);

      group.add(beamBetween(legLBottom, legLTop, 0.028));
      group.add(beamBetween(legRBottom, legRTop, 0.028));
      group.add(beamBetween(legBackBottom, legBackTop, 0.024));
      group.add(beamBetween(legLTop, legRTop, 0.03));

      const crossPtL = new THREE.Vector3().lerpVectors(legLBottom, legLTop, 0.58);
      const crossPtR = new THREE.Vector3().lerpVectors(legRBottom, legRTop, 0.58);
      group.add(beamBetween(crossPtL, crossPtR, 0.02));

      const ledgeCenter = new THREE.Vector3().lerpVectors(crossPtL, crossPtR, 0.5);
      ledgeCenter.z += 0.17;
      const ledge = new THREE.Mesh(new THREE.BoxGeometry(0.58, 0.028, 0.1), woodMat);
      ledge.position.copy(ledgeCenter);
      ledge.castShadow = true;
      group.add(ledge);

      scene.add(group);
      return { group, ledgeCenter };
    }

    const { group: smallStand, ledgeCenter: smallLedge } = buildSmallStand(-1.6, 3.7, 0.28);
    const c7Mesh = buildStretcherCanvas(1.05, 1.35, paintingTexture(6));
    const C7_TILT = 0.18;
    c7Mesh.position.set(
      smallLedge.x,
      smallLedge.y + (1.35 / 2) * Math.cos(C7_TILT) + 0.015,
      smallLedge.z - (1.35 / 2) * Math.sin(C7_TILT) - 0.04
    );
    c7Mesh.rotation.x = -C7_TILT;
    smallStand.add(c7Mesh);
    c7Mesh.updateWorldMatrix(true, false);
    scene.attach(c7Mesh);
    registerCanvas(c7Mesh, "c7", 1.05, 1.35);

    // ---- side table with palette + brush jar ----
    const tableTop = new THREE.Mesh(new RoundedBoxGeometry(0.9, 0.05, 0.55, 2, 0.02), woodMat);
    tableTop.position.set(3.7, 0.62, -0.6);
    tableTop.castShadow = true;
    tableTop.receiveShadow = true;
    scene.add(tableTop);

    const tableLegGeo = new THREE.CylinderGeometry(0.03, 0.03, 0.6, 8);
    [[-0.38, -0.22], [0.38, -0.22], [-0.38, 0.22], [0.38, 0.22]].forEach(([dx, dz]) => {
      const leg = new THREE.Mesh(tableLegGeo, woodMat);
      leg.position.set(3.7 + dx, 0.3, -0.6 + dz);
      leg.castShadow = true;
      scene.add(leg);
    });

    const paletteShape = new THREE.Mesh(
      new THREE.CircleGeometry(0.22, 24),
      new THREE.MeshStandardMaterial({ color: "#c9a876", roughness: 0.6 })
    );
    paletteShape.rotation.x = -Math.PI / 2;
    paletteShape.position.set(3.55, 0.655, -0.55);
    scene.add(paletteShape);

    ["#c94b2b", "#e8b23a", "#3a6b8a", "#4a7a3f", "#e8e0d0", "#1c1815"].forEach((c, i, arr) => {
      const angle = (i / arr.length) * Math.PI * 2;
      const daub = new THREE.Mesh(
        new THREE.SphereGeometry(0.028, 10, 10),
        new THREE.MeshStandardMaterial({ color: c, roughness: 0.5 })
      );
      daub.scale.set(1, 0.4, 1);
      daub.position.set(3.55 + Math.cos(angle) * 0.14, 0.663, -0.55 + Math.sin(angle) * 0.14);
      scene.add(daub);
    });

    const jarCenter = new THREE.Vector3(3.85, 0.735, -0.75);
    const jar = new THREE.Mesh(new THREE.CylinderGeometry(0.09, 0.08, 0.18, 16), jarMat);
    jar.position.copy(jarCenter);
    scene.add(jar);

    const BRUSH_DEFS = [
      { len: 0.36, r: 0.007 },
      { len: 0.42, r: 0.009 },
      { len: 0.3, r: 0.006 },
      { len: 0.4, r: 0.011 },
      { len: 0.33, r: 0.007 },
      { len: 0.44, r: 0.008 },
    ];
    const jarBottomY = jarCenter.y - 0.09 + 0.03;
    const jarSafeRadius = 0.045;

    BRUSH_DEFS.forEach((def, i) => {
      const a = (i / BRUSH_DEFS.length) * Math.PI * 2 + i * 0.4;
      const baseR = jarSafeRadius * (0.4 + Math.random() * 0.5);

      const pivot = new THREE.Group();
      pivot.position.set(
        jarCenter.x + Math.cos(a) * baseR,
        jarBottomY,
        jarCenter.z + Math.sin(a) * baseR
      );
      const lean = 0.06 + Math.random() * 0.08;
      pivot.rotation.set(Math.sin(a) * lean, 0, Math.cos(a) * lean);
      scene.add(pivot);

      const handleGeo = new THREE.CylinderGeometry(def.r, def.r * 1.15, def.len, 6);
      brushGeometries.push(handleGeo);
      const handle = new THREE.Mesh(handleGeo, brushMat);
      handle.position.y = def.len / 2;
      handle.castShadow = true;
      pivot.add(handle);

      const bristleGeo = new THREE.ConeGeometry(def.r * 1.3, 0.05, 6);
      brushGeometries.push(bristleGeo);
      const bristle = new THREE.Mesh(bristleGeo, bristleMat);
      bristle.position.y = def.len + 0.02;
      pivot.add(bristle);
    });

    // ---- stool ----
    const stoolSeat = new THREE.Mesh(new THREE.CylinderGeometry(0.28, 0.28, 0.06, 20), woodMat);
    stoolSeat.position.set(2.0, 0.52, 0.15);
    stoolSeat.castShadow = true;
    scene.add(stoolSeat);
    [[-0.2, -0.2], [0.2, -0.2], [-0.2, 0.2], [0.2, 0.2]].forEach(([dx, dz]) => {
      const leg = new THREE.Mesh(new THREE.CylinderGeometry(0.02, 0.02, 0.5, 8), woodMat);
      leg.position.set(2.0 + dx, 0.25, 0.15 + dz);
      leg.castShadow = true;
      scene.add(leg);
    });

    // ---- camera controls ----
    const controls = new OrbitControls(camera, canvas);
    controls.enableDamping = true;
    controls.autoRotate = true;
    controls.autoRotateSpeed = 0.35;
    controls.enablePan = false;
    controls.enableZoom = false;
    controls.minPolarAngle = 0.6;
    controls.maxPolarAngle = 1.35;
    controls.target.copy(DEFAULT_TARGET);
    controls.update();

    // ---- physics constants ----
    const SPRING_STIFFNESS = 140; // used only for the magnetic "mounted on easel" snap
    const SPRING_DAMPING = 16;
    const GRAVITY = 7.5;
    const FLOOR_Y = 0.02;
    const BOUNCE_RESTITUTION = 0.34;
    const BOUNCE_FRICTION = 0.55;
    const ANGULAR_DAMPING_ON_BOUNCE = 0.5;
    const MIN_BOUNCE_VELOCITY = 0.45;
    const MAX_BOUNCES = 6;
    const EASEL_SNAP_RADIUS = 1.1;
    const DRAG_THRESHOLD_PX = 6;

    function updateCanvasPhysics(dt) {
      canvasStates.forEach((state) => {
        switch (state.mode) {
          case "held": {
            state.mesh.position.lerp(state.targetPos, Math.min(1, dt * 18));
            state.mesh.quaternion.slerp(state.targetQuat, Math.min(1, dt * 10));
            state.physicalPos.copy(state.mesh.position);
            state.physicalQuat.copy(state.mesh.quaternion);
            break;
          }
          case "flying": {
            state.velocity.y -= GRAVITY * dt;
            state.mesh.position.addScaledVector(state.velocity, dt);

            const half = ROOM_W / 2 - 0.7;
            ["x", "z"].forEach((axis) => {
              if (state.mesh.position[axis] > half) {
                state.mesh.position[axis] = half;
                state.velocity[axis] *= -0.4;
              } else if (state.mesh.position[axis] < -half) {
                state.mesh.position[axis] = -half;
                state.velocity[axis] *= -0.4;
              }
            });

            state.mesh.rotateX(state.angularVelocity.x * dt);
            state.mesh.rotateY(state.angularVelocity.y * dt);
            state.mesh.rotateZ(state.angularVelocity.z * dt);

            if (state.mesh.position.y <= FLOOR_Y) {
              state.mesh.position.y = FLOOR_Y;
              state.velocity.y = -state.velocity.y * BOUNCE_RESTITUTION;
              state.velocity.x *= BOUNCE_FRICTION;
              state.velocity.z *= BOUNCE_FRICTION;
              state.angularVelocity.multiplyScalar(ANGULAR_DAMPING_ON_BOUNCE);
              state.bounceCount += 1;

              if (
                Math.abs(state.velocity.y) < MIN_BOUNCE_VELOCITY ||
                state.bounceCount > MAX_BOUNCES
              ) {
                state.mode = "settling";
                state.targetPos.set(state.mesh.position.x, FLOOR_Y, state.mesh.position.z);
                const currentZSpin = new THREE.Euler()
                  .setFromQuaternion(state.mesh.quaternion, "XYZ").z;
                state.targetQuat.setFromEuler(new THREE.Euler(-Math.PI / 2, 0, currentZSpin));
              }
            }

            state.physicalPos.copy(state.mesh.position);
            state.physicalQuat.copy(state.mesh.quaternion);
            break;
          }
          case "settling": {
            state.mesh.position.lerp(state.targetPos, Math.min(1, dt * 6));
            state.mesh.quaternion.slerp(state.targetQuat, Math.min(1, dt * 6));
            state.physicalPos.copy(state.mesh.position);
            state.physicalQuat.copy(state.mesh.quaternion);
            if (state.mesh.position.distanceTo(state.targetPos) < 0.01) {
              state.mode = "settled";
            }
            break;
          }
          case "settled":
            break;
          case "mounted": {
            const accel = new THREE.Vector3()
              .subVectors(state.targetPos, state.physicalPos)
              .multiplyScalar(SPRING_STIFFNESS);
            state.velocity.addScaledVector(accel, dt);
            state.velocity.multiplyScalar(Math.max(0, 1 - SPRING_DAMPING * dt));
            state.physicalPos.addScaledVector(state.velocity, dt);
            state.physicalQuat.slerp(state.targetQuat, Math.min(1, dt * 8));
            state.mesh.position.copy(state.physicalPos);
            state.mesh.quaternion.copy(state.physicalQuat);
            break;
          }
        }
      });
    }

    // ---- pointer interaction: drag physics + click-to-zoom ----
    const dragRaycaster = new THREE.Raycaster();
    const pointerNDC = new THREE.Vector2();
    const dragPlane = new THREE.Plane();
    const planeIntersect = new THREE.Vector3();

    let activeDrag = null;
    let pointerDownState = null;
    let isZoomedIn = false;
    let zoomAnimating = false;

    function ndcFromEvent(event) {
      const rect = canvas.getBoundingClientRect();
      pointerNDC.x = ((event.clientX - rect.left) / rect.width) * 2 - 1;
      pointerNDC.y = -((event.clientY - rect.top) / rect.height) * 2 + 1;
    }

    function hitCanvasAt(event) {
      ndcFromEvent(event);
      dragRaycaster.setFromCamera(pointerNDC, camera);
      const meshes = canvasStates.map((s) => s.mesh);
      const hits = dragRaycaster.intersectObjects(meshes);
      if (!hits.length) return null;
      const state = canvasStates.find((s) => s.mesh === hits[0].object);
      return { state, point: hits[0].point };
    }

    function beginDrag(state, hitPoint) {
      activeDrag = state;
      state.mode = "held";

      const camDir = new THREE.Vector3();
      camera.getWorldDirection(camDir);
      dragPlane.setFromNormalAndCoplanarPoint(camDir, hitPoint);
      state.grabOffset.subVectors(state.mesh.position, hitPoint);
      state.lastDragPos.copy(state.mesh.position);
      state.lastDragTime = performance.now();
    }

    function mountOnEasel(state) {
      canvasStates.forEach((s) => {
        if (s.mode === "mounted" && s !== state) {
          // bumped off the easel — toss it, don't teleport it
          s.mode = "flying";
          s.velocity.set((Math.random() - 0.5) * 1.2, 1.6, 0.8 + Math.random() * 0.6);
          s.angularVelocity.set(
            (Math.random() - 0.5) * 3,
            (Math.random() - 0.5) * 2,
            (Math.random() - 0.5) * 3
          );
          s.bounceCount = 0;
        }
      });
      state.mode = "mounted";
      state.targetPos.copy(easelSlot.position);
      state.targetQuat.copy(easelSlot.quaternion);
      state.physicalPos.copy(state.mesh.position);
      state.physicalQuat.copy(state.mesh.quaternion);
    }

    function ease(t) {
      return t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2;
    }
    function tween(duration, onUpdate, onComplete) {
      const start = performance.now();
      function step(now) {
        const t = Math.min((now - start) / duration, 1);
        onUpdate(ease(t));
        if (t < 1) requestAnimationFrame(step);
        else onComplete && onComplete();
      }
      requestAnimationFrame(step);
    }
    function animateCameraTo(targetPos, targetLookAt, duration, onComplete) {
      const startPos = camera.position.clone();
      const startTarget = controls.target.clone();
      tween(
        duration,
        (t) => {
          camera.position.lerpVectors(startPos, targetPos, t);
          controls.target.lerpVectors(startTarget, targetLookAt, t);
          controls.update();
        },
        onComplete
      );
    }

    function zoomIntoPainting(state) {
      if (zoomAnimating || isZoomedIn) return;
      zoomAnimating = true;
      controls.enabled = false;
      controls.autoRotate = false;

      const worldPos = state.mesh.position.clone();
      const worldQuat = state.mesh.quaternion.clone();
      const normal = new THREE.Vector3(0, 0, 1).applyQuaternion(worldQuat).normalize();

      const vFov = THREE.MathUtils.degToRad(camera.fov);
      const fillFactor = 0.78;
      const distance = state.h / (fillFactor * 2 * Math.tan(vFov / 2));
      const targetCamPos = worldPos.clone().add(normal.multiplyScalar(distance));

      animateCameraTo(targetCamPos, worldPos, 1200, () => {
        zoomAnimating = false;
        isZoomedIn = true;
        setZoomedIn(true);
      });
    }

    function zoomOutFromPainting() {
      if (zoomAnimating || !isZoomedIn) return;
      zoomAnimating = true;
      isZoomedIn = false;
      setZoomedIn(false);

      animateCameraTo(DEFAULT_CAM_POS, DEFAULT_TARGET, 1200, () => {
        zoomAnimating = false;
        controls.enabled = true;
        controls.autoRotate = true;
      });
    }

    function handlePointerDown(event) {
      if (zoomAnimating) return;
      if (isZoomedIn) {
        zoomOutFromPainting();
        return;
      }

      const hit = hitCanvasAt(event);
      if (!hit) return;
      if (hit.state.mode !== "settled" && hit.state.mode !== "mounted") return; // no mid-air grabs

      controls.enabled = false;
      controls.autoRotate = false;

      pointerDownState = {
        state: hit.state,
        screenX: event.clientX,
        screenY: event.clientY,
        downTime: performance.now(),
        hitPoint: hit.point.clone(),
      };
    }

    function handlePointerMove(event) {
      if (isZoomedIn || zoomAnimating) return;

      if (!activeDrag) {
        if (!pointerDownState) {
          const hit = hitCanvasAt(event);
          canvas.style.cursor = hit ? "grab" : "default";
          return;
        }
        const dx = event.clientX - pointerDownState.screenX;
        const dy = event.clientY - pointerDownState.screenY;
        if (Math.hypot(dx, dy) > DRAG_THRESHOLD_PX) {
          beginDrag(pointerDownState.state, pointerDownState.hitPoint);
        } else {
          return;
        }
      }

      ndcFromEvent(event);
      dragRaycaster.setFromCamera(pointerNDC, camera);
      if (dragRaycaster.ray.intersectPlane(dragPlane, planeIntersect)) {
        activeDrag.targetPos.copy(planeIntersect).add(activeDrag.grabOffset);
        activeDrag.targetPos.y = Math.max(activeDrag.targetPos.y, 0.4);

        // face the camera, but keep a bit of this painting's own roll —
        // otherwise every held canvas looks identical, which was the complaint
        const dummy = new THREE.Object3D();
        dummy.position.copy(activeDrag.targetPos);
        dummy.lookAt(camera.position);
        dummy.rotateY(Math.PI); // painted face is local +Z; lookAt aims -Z, so flip
        dummy.rotateZ(activeDrag.rollBias);
        activeDrag.targetQuat.copy(dummy.quaternion);

        // sample velocity each frame so releasing mid-swing throws with real momentum
        const now = performance.now();
        const dt = Math.max((now - activeDrag.lastDragTime) / 1000, 0.001);
        activeDrag.dragVelocity
          .copy(activeDrag.targetPos)
          .sub(activeDrag.lastDragPos)
          .divideScalar(dt);
        activeDrag.lastDragPos.copy(activeDrag.targetPos);
        activeDrag.lastDragTime = now;
      }
      canvas.style.cursor = "grabbing";
    }

    function handlePointerUp(event) {
      if (zoomAnimating || isZoomedIn) return;

      let enteringZoom = false;

      if (activeDrag) {
        const state = activeDrag;
        activeDrag = null;

        const dropXZ = new THREE.Vector2(state.targetPos.x, state.targetPos.z);
        const easelXZ = new THREE.Vector2(easelSlot.position.x, easelSlot.position.z);

        if (dropXZ.distanceTo(easelXZ) < EASEL_SNAP_RADIUS) {
          mountOnEasel(state);
        } else {
          state.mode = "flying";
          state.velocity.copy(state.dragVelocity).clampLength(0, 6);
          state.velocity.y = Math.max(state.velocity.y, 0.3); // small pop, not dead weight
          state.angularVelocity.set(
            (Math.random() - 0.5) * 4,
            (Math.random() - 0.5) * 2,
            state.dragVelocity.x * 0.8 + (Math.random() - 0.5) * 2
          );
          state.bounceCount = 0;
        }
        canvas.style.cursor = "default";
      } else if (pointerDownState) {
        const held = performance.now() - pointerDownState.downTime;
        const dx = event.clientX - pointerDownState.screenX;
        const dy = event.clientY - pointerDownState.screenY;
        const wasClick = Math.hypot(dx, dy) <= DRAG_THRESHOLD_PX && held < 500;

        if (wasClick && pointerDownState.state.mode === "mounted") {
          enteringZoom = true;
          zoomIntoPainting(pointerDownState.state);
        }
      }

      pointerDownState = null;
      if (!enteringZoom) {
        controls.enabled = true;
        controls.autoRotate = true;
      }
    }

    function handleKeydown(e) {
      if (e.key === "Escape" && isZoomedIn) zoomOutFromPainting();
    }

    canvas.addEventListener("pointerdown", handlePointerDown);
    window.addEventListener("pointermove", handlePointerMove);
    window.addEventListener("pointerup", handlePointerUp);
    window.addEventListener("keydown", handleKeydown);

    function handleResize() {
      const { width, height } = canvas.parentElement.getBoundingClientRect();
      camera.aspect = width / height;
      camera.updateProjectionMatrix();
      renderer.setSize(width, height, false);
      renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    }
    handleResize();
    window.addEventListener("resize", handleResize);

    const clock = new THREE.Clock();
    let animationId;
    const renderLoop = () => {
      const dt = Math.min(clock.getDelta(), 0.05);
      controls.update();
      updateCanvasPhysics(dt);
      renderer.render(scene, camera);
      animationId = requestAnimationFrame(renderLoop);
    };
    renderLoop();

    return () => {
      cancelAnimationFrame(animationId);
      window.removeEventListener("resize", handleResize);
      window.removeEventListener("keydown", handleKeydown);
      window.removeEventListener("pointermove", handlePointerMove);
      window.removeEventListener("pointerup", handlePointerUp);
      canvas.removeEventListener("pointerdown", handlePointerDown);
      controls.dispose();
      renderer.dispose();

      floorTex.dispose();
      floorMat.dispose();
      wallMat.dispose();
      trimMat.dispose();
      mullionMat.dispose();
      windowGlowMat.dispose();
      woodMat.dispose();
      frameMat.dispose();
      canvasBackMat.dispose();
      jarMat.dispose();
      brushMat.dispose();
      bristleMat.dispose();

      paintingTextures.forEach((t) => t.dispose());
      paintingMaterials.forEach((m) => m.dispose());
      canvasGeometries.forEach((g) => g.dispose());
      standGeometries.forEach((g) => g.dispose());
      brushGeometries.forEach((g) => g.dispose());
    };
  }, []);

  return (
    <div className="artist-scene">
      <canvas ref={canvasRef} className="artist-canvas" />
      <WorldNav onExit={onExit} visible={!zoomedIn} />
    </div>
  );
}