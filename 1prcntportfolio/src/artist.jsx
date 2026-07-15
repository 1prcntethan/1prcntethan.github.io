import React, { useEffect, useRef } from "react";
import * as THREE from "three";
import { OrbitControls } from "three/addons/controls/OrbitControls.js";
import { RoundedBoxGeometry } from "three/addons/geometries/RoundedBoxGeometry.js";
import WorldNav from "./components/world-nav.jsx";
import "./artist.css";

export default function Artist({ onExit }) {
  const canvasRef = useRef(null);

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
    camera.position.set(0, 2.4, 6.6);
    scene.add(camera);

    // ---- lights: warm window light as key, cool fill as counterweight ----
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

    // ---- texture helpers (canvas-drawn, same trick as keyboard key labels) ----
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

      // deterministic pseudo-random so re-renders don't reshuffle the art
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

      ctx.fillStyle = "#e8dcc4"; // raw primed canvas tone
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

    // tracking arrays for disposal + future interactivity
    const paintingTextures = [];
    const paintingMaterials = [];
    const canvasGeometries = [];
    const finishedCanvases = [];

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
    buildWall(ROOM_W, ROOM_H, 0, -ROOM_D / 2, 0);           // back
    buildWall(ROOM_W, ROOM_H, 0, ROOM_D / 2, Math.PI);       // front
    buildWall(ROOM_D, ROOM_H, -ROOM_W / 2, 0, Math.PI / 2);  // left
    buildWall(ROOM_D, ROOM_H, ROOM_W / 2, 0, -Math.PI / 2);  // right

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

    // window — glow plane + frame + mullions, mounted flush on the back wall
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

    // ---- main working easel + in-progress canvas ----
    function buildEasel(x, z, rotY = 0) {
      const group = new THREE.Group();
      group.position.set(x, 0, z);
      group.rotation.y = rotY;

      const legGeo = new THREE.CylinderGeometry(0.035, 0.045, 2.6, 8);
      const legL = new THREE.Mesh(legGeo, woodMat);
      legL.position.set(-0.5, 1.3, 0.35);
      legL.rotation.set(-0.12, 0, 0.18);
      legL.castShadow = true;
      group.add(legL);

      const legR = new THREE.Mesh(legGeo, woodMat);
      legR.position.set(0.5, 1.3, 0.35);
      legR.rotation.set(-0.12, 0, -0.18);
      legR.castShadow = true;
      group.add(legR);

      const legBack = new THREE.Mesh(new THREE.CylinderGeometry(0.035, 0.045, 2.9, 8), woodMat);
      legBack.position.set(0, 1.4, -0.45);
      legBack.rotation.x = 0.28;
      legBack.castShadow = true;
      group.add(legBack);

      const crossbar = new THREE.Mesh(new THREE.BoxGeometry(1.15, 0.05, 0.05), woodMat);
      crossbar.position.set(0, 0.95, 0.42);
      crossbar.castShadow = true;
      group.add(crossbar);

      const ledge = new THREE.Mesh(new THREE.BoxGeometry(1.05, 0.04, 0.1), woodMat);
      ledge.position.set(0, 0.78, 0.5);
      ledge.castShadow = true;
      group.add(ledge);

      scene.add(group);
      return group;
    }

    const mainEasel = buildEasel(2.4, -1.2, -0.35);
    const inProgressCanvas = buildStretcherCanvas(1.15, 1.5, (() => {
      const t = makeInProgressTexture();
      paintingTextures.push(t);
      return t;
    })());
    inProgressCanvas.position.set(0, 1.55, 0.46);
    inProgressCanvas.rotation.x = -0.22;
    mainEasel.add(inProgressCanvas);

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
      mesh.userData.id = c.id;
      scene.add(mesh);
      finishedCanvases.push(mesh);
    });

    function buildSmallStand(x, z, rotY = 0) {
      const group = new THREE.Group();
      group.position.set(x, 0, z);
      group.rotation.y = rotY;

      const legGeo = new THREE.CylinderGeometry(0.025, 0.03, 1.05, 8);
      const legL = new THREE.Mesh(legGeo, woodMat);
      legL.position.set(-0.32, 0.52, 0.16);
      legL.rotation.set(-0.08, 0, 0.12);
      legL.castShadow = true;
      group.add(legL);

      const legR = new THREE.Mesh(legGeo, woodMat);
      legR.position.set(0.32, 0.52, 0.16);
      legR.rotation.set(-0.08, 0, -0.12);
      legR.castShadow = true;
      group.add(legR);

      const legBack = new THREE.Mesh(new THREE.CylinderGeometry(0.025, 0.03, 1.15, 8), woodMat);
      legBack.position.set(0, 0.56, -0.2);
      legBack.rotation.x = 0.22;
      legBack.castShadow = true;
      group.add(legBack);

      const ledge = new THREE.Mesh(new THREE.BoxGeometry(0.55, 0.03, 0.06), woodMat);
      ledge.position.set(0, 0.42, 0.2);
      ledge.castShadow = true;
      group.add(ledge);

      scene.add(group);
      return group;
    }

    // seventh piece — its own small stand, not leaned against anything
    const smallStand = buildSmallStand(-1.6, 3.7, 0.28);
    const c7Mesh = buildStretcherCanvas(1.05, 1.35, paintingTexture(6));
    c7Mesh.position.set(0, 0.78, 0.24);
    c7Mesh.rotation.x = -0.18;
    c7Mesh.userData.id = "c7";
    smallStand.add(c7Mesh);
    finishedCanvases.push(c7Mesh);

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

    const paletteShape = new THREE.Mesh(new THREE.CircleGeometry(0.22, 24), new THREE.MeshStandardMaterial({ color: "#c9a876", roughness: 0.6 }));
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

    const jar = new THREE.Mesh(new THREE.CylinderGeometry(0.09, 0.08, 0.18, 16), jarMat);
    jar.position.set(3.85, 0.735, -0.75);
    scene.add(jar);

    for (let i = 0; i < 5; i++) {
      const brush = new THREE.Mesh(new THREE.CylinderGeometry(0.008, 0.008, 0.42, 6), brushMat);
      const a = (i / 5) * Math.PI * 2;
      brush.position.set(3.85 + Math.cos(a) * 0.04, 0.9, -0.75 + Math.sin(a) * 0.04);
      brush.rotation.set(Math.sin(a) * 0.3, 0, Math.cos(a) * 0.3);
      scene.add(brush);
    }

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
    controls.target.set(0, 1.4, 0);
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

    let animationId;
    const renderLoop = () => {
      controls.update();
      renderer.render(scene, camera);
      animationId = requestAnimationFrame(renderLoop);
    };
    renderLoop();

    return () => {
      cancelAnimationFrame(animationId);
      window.removeEventListener("resize", handleResize);
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

      paintingTextures.forEach((t) => t.dispose());
      paintingMaterials.forEach((m) => m.dispose());
      canvasGeometries.forEach((g) => g.dispose());
    };
  }, []);

  return (
    <div className="artist-scene">
      <canvas ref={canvasRef} className="artist-canvas" />
      <WorldNav onExit={onExit} visible={true} />
    </div>
  );
}