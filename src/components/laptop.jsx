import React, { useEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";
import * as THREE from "three";
import { OrbitControls } from "three/addons/controls/OrbitControls.js";
import { RoundedBoxGeometry } from "three/addons/geometries/RoundedBoxGeometry.js";
import {
  CSS3DRenderer,
  CSS3DObject,
} from "three/addons/renderers/CSS3DRenderer.js";
import Desktop from "./desktop.jsx";
import "./laptop.css";
import WorldNav from "./world-nav.jsx";

export default function Laptop({ onExit }) {
  const canvasRef = useRef(null);
  const cssContainerRef = useRef(null);
  const zoomOutRef = useRef(() => {});
  const [screenEl, setScreenEl] = useState(null);
  const [screenOn, setScreenOn] = useState(false);

  // keep the portaled DOM node's fade/interactivity in sync with React state
  useEffect(() => {
    if (!screenEl) return;
    screenEl.classList.toggle("is-on", screenOn);
  }, [screenEl, screenOn]);

  useEffect(() => {
    const canvas = canvasRef.current;

    const scene = new THREE.Scene();
    scene.background = new THREE.Color(0xffffff);

    const camera = new THREE.PerspectiveCamera(
      45,
      window.innerWidth / window.innerHeight,
      0.1,
      100,
    );
    const DEFAULT_CAM_POS = new THREE.Vector3(5, 3.2, 6);
    const DEFAULT_TARGET = new THREE.Vector3(0, 0.6, 0);
    camera.position.copy(DEFAULT_CAM_POS);
    scene.add(camera);

    const ambient = new THREE.AmbientLight(0xffffff, 0.7);
    scene.add(ambient);

    const keyLight = new THREE.DirectionalLight(0xffffff, 1.1);
    keyLight.position.set(6, 8, 4);
    keyLight.castShadow = true;
    keyLight.shadow.mapSize.set(2048, 2048);
    keyLight.shadow.camera.left = -8;
    keyLight.shadow.camera.right = 8;
    keyLight.shadow.camera.top = 8;
    keyLight.shadow.camera.bottom = -8;
    keyLight.shadow.camera.near = 1;
    keyLight.shadow.camera.far = 30;
    keyLight.shadow.bias = -0.0015;
    scene.add(keyLight);

    const fillLight = new THREE.DirectionalLight(0xffffff, 0.35);
    fillLight.position.set(-6, 4, -4);
    scene.add(fillLight);

    const renderer = new THREE.WebGLRenderer({ canvas, antialias: true });
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.shadowMap.enabled = true;
    renderer.shadowMap.type = THREE.PCFSoftShadowMap;
    renderer.outputColorSpace = THREE.SRGBColorSpace;

    // second renderer — draws real DOM content using the same camera math as WebGL
    const cssRenderer = new CSS3DRenderer();
    cssRenderer.domElement.style.position = "absolute";
    cssRenderer.domElement.style.top = "0";
    cssRenderer.domElement.style.left = "0";
    cssRenderer.domElement.style.pointerEvents = "none"; // belt-and-suspenders, see note below
    cssContainerRef.current.appendChild(cssRenderer.domElement);

    // ground
    const groundGeo = new THREE.PlaneGeometry(60, 60);
    const groundMat = new THREE.MeshStandardMaterial({
      color: "#f4f4f4",
      roughness: 1,
      metalness: 0,
    });
    const ground = new THREE.Mesh(groundGeo, groundMat);
    ground.rotation.x = -Math.PI / 2;
    ground.receiveShadow = true;
    scene.add(ground);

    // ---- laptop ----
    const laptop = new THREE.Group();
    scene.add(laptop);

    const bodyMat = new THREE.MeshStandardMaterial({
      color: "#9a9a9a",
      roughness: 0.45,
      metalness: 0.25,
    });
    const deckMat = new THREE.MeshStandardMaterial({
      color: "#7c7c7c",
      roughness: 0.6,
      metalness: 0.1,
    });
    const darkMat = new THREE.MeshStandardMaterial({
      color: "#2b2b2b",
      roughness: 0.5,
      metalness: 0.3,
    });
    const keyCapMat = new THREE.MeshStandardMaterial({
      color: "#454545",
      roughness: 0.55,
      metalness: 0.08,
    });
    const keySideMat = new THREE.MeshStandardMaterial({
      color: "#2c2c2c",
      roughness: 0.6,
      metalness: 0.1,
    });
    const keyWellMat = new THREE.MeshStandardMaterial({
      color: "#1c1c1c",
      roughness: 0.85,
      metalness: 0.0,
    });
    const portBezelMat = new THREE.MeshStandardMaterial({
      color: "#c8c8c8",
      roughness: 0.3,
      metalness: 0.75,
    });
    const portHoleMat = new THREE.MeshStandardMaterial({
      color: "#050505",
      roughness: 0.9,
      metalness: 0,
    });
    const feetMat = new THREE.MeshStandardMaterial({
      color: "#1a1a1a",
      roughness: 0.9,
    });
    const screenMat = new THREE.MeshStandardMaterial({
      color: "#161616",
      emissive: new THREE.Color("#cfe9e3"),
      emissiveIntensity: 0,
      roughness: 0.25,
      metalness: 0.1,
    });

    const W = 3.4;
    const D = 2.3;
    const baseH = 0.16;
    const screenH = 2.1;
    const screenT = 0.1;

    const base = new THREE.Mesh(
      new RoundedBoxGeometry(W, baseH, D, 3, 0.05),
      bodyMat,
    );
    base.position.y = baseH / 2;
    base.castShadow = true;
    base.receiveShadow = true;
    laptop.add(base);

    // rubber feet
    const footGeo = new THREE.CylinderGeometry(0.05, 0.05, 0.02, 12);
    [
      [-W / 2 + 0.18, -D / 2 + 0.18],
      [W / 2 - 0.18, -D / 2 + 0.18],
      [-W / 2 + 0.18, D / 2 - 0.18],
      [W / 2 - 0.18, D / 2 - 0.18],
    ].forEach(([x, z]) => {
      const foot = new THREE.Mesh(footGeo, feetMat);
      foot.position.set(x, 0.005, z);
      laptop.add(foot);
    });

    // deck surrounding the keyboard
    const deck = new THREE.Mesh(
      new THREE.BoxGeometry(W - 0.25, 0.015, D - 0.3),
      deckMat,
    );
    deck.position.set(0, baseH + 0.008, -0.05);
    laptop.add(deck);

    const KEY_PITCH = 0.145;
    const KEY_GAP = 0.016;
    const KEY_H = 0.05;
    const KEY_ROW_PITCH = 0.155;

    // [label, widthInUnits] per row — back (function row) to front (space row)
    const KEYBOARD_ROWS = [
      [
        ["esc", 1],
        ["f1", 1],
        ["f2", 1],
        ["f3", 1],
        ["f4", 1],
        ["f5", 1],
        ["f6", 1],
        ["f7", 1],
        ["f8", 1],
        ["f9", 1],
        ["f10", 1],
        ["f11", 1],
        ["f12", 1],
        ["del", 1],
      ],
      [
        ["`", 1],
        ["1", 1],
        ["2", 1],
        ["3", 1],
        ["4", 1],
        ["5", 1],
        ["6", 1],
        ["7", 1],
        ["8", 1],
        ["9", 1],
        ["0", 1],
        ["-", 1],
        ["=", 1],
        ["⌫", 1.9],
      ],
      [
        ["tab", 1.4],
        ["q", 1],
        ["w", 1],
        ["e", 1],
        ["r", 1],
        ["t", 1],
        ["y", 1],
        ["u", 1],
        ["i", 1],
        ["o", 1],
        ["p", 1],
        ["[", 1],
        ["]", 1],
        ["\\", 1.3],
      ],
      [
        ["caps", 1.7],
        ["a", 1],
        ["s", 1],
        ["d", 1],
        ["f", 1],
        ["g", 1],
        ["h", 1],
        ["j", 1],
        ["k", 1],
        ["l", 1],
        [";", 1],
        ["'", 1],
        ["enter", 2.1],
      ],
      [
        ["shift", 2.15],
        ["z", 1],
        ["x", 1],
        ["c", 1],
        ["v", 1],
        ["b", 1],
        ["n", 1],
        ["m", 1],
        [",", 1],
        [".", 1],
        ["/", 1],
        ["shift", 2.55],
      ],
      [
        ["ctrl", 1.2],
        ["fn", 1.1],
        ["win", 1.1],
        ["alt", 1.1],
        ["space", 6],
        ["alt", 1.1],
        ["ctrl", 1.5],
        ["\u25c2", 0.8],
        ["\u25b8", 0.8],
      ],
    ];

    // one canvas texture + material per unique label, reused across duplicate keys (shift, ctrl, alt)
    const labelTextureCache = new Map();
    const labelMaterialCache = new Map();
    function getLabelMaterial(label) {
      if (labelMaterialCache.has(label)) return labelMaterialCache.get(label);
      let tex = labelTextureCache.get(label);
      if (!tex) {
        const size = 128;
        const cnv = document.createElement("canvas");
        cnv.width = size;
        cnv.height = size;
        const ctx = cnv.getContext("2d");
        ctx.clearRect(0, 0, size, size);
        ctx.fillStyle = "#dcdcdc";
        ctx.textAlign = "center";
        ctx.textBaseline = "middle";
        const isWord = label.length > 2;
        ctx.font = `${isWord ? 500 : 400} ${isWord ? size * 0.2 : size * 0.44}px 'Space Mono', monospace`;
        ctx.fillText(label, size / 2, size / 2 + 3);
        tex = new THREE.CanvasTexture(cnv);
        tex.colorSpace = THREE.SRGBColorSpace;
        labelTextureCache.set(label, tex);
      }
      const mat = new THREE.MeshBasicMaterial({
        map: tex,
        transparent: true,
        alphaTest: 0.05,
      });
      labelMaterialCache.set(label, mat);
      return mat;
    }

    const keyLabelGeo = new THREE.PlaneGeometry(0.078, 0.078);
    const keyGeometries = [];

    const kbRowUnits = KEYBOARD_ROWS.map((row) =>
      row.reduce((s, [, u]) => s + u, 0),
    );
    const kbWidth = Math.max(...kbRowUnits) * KEY_PITCH;
    const kbDepth = KEYBOARD_ROWS.length * KEY_ROW_PITCH;
    const kbCenterZ = -0.42;

    // recessed tray the whole board sits inside — this is what makes it read as "set into" the deck
    const keyWell = new THREE.Mesh(
      new THREE.BoxGeometry(kbWidth + 0.09, 0.012, kbDepth + 0.07),
      keyWellMat,
    );
    keyWell.position.set(0, baseH + 0.006, kbCenterZ);
    laptop.add(keyWell);

    KEYBOARD_ROWS.forEach((row, r) => {
      const rowUnits = kbRowUnits[r];
      const rowWidth = rowUnits * KEY_PITCH - KEY_GAP;
      let cursorX = -rowWidth / 2;
      const z = kbCenterZ - kbDepth / 2 + r * KEY_ROW_PITCH + KEY_ROW_PITCH / 2;

      row.forEach(([label, units]) => {
        const w = units * KEY_PITCH - KEY_GAP;
        const x = cursorX + w / 2;

        // keycap
        const capGeo = new RoundedBoxGeometry(
          w,
          KEY_H,
          KEY_PITCH - KEY_GAP,
          2,
          0.008,
        );
        keyGeometries.push(capGeo);
        const cap = new THREE.Mesh(capGeo, keyCapMat);
        cap.position.set(x, baseH + 0.012 + KEY_H / 2, z);
        cap.castShadow = true;
        laptop.add(cap);

        // lower switch housing, visible just beneath the cap — the actual depth cue
        const housingGeo = new THREE.BoxGeometry(
          w * 0.92,
          0.012,
          (KEY_PITCH - KEY_GAP) * 0.92,
        );
        keyGeometries.push(housingGeo);
        const housing = new THREE.Mesh(housingGeo, keySideMat);
        housing.position.set(x, baseH + 0.006, z);
        laptop.add(housing);

        if (label !== "space") {
          const lbl = new THREE.Mesh(keyLabelGeo, getLabelMaterial(label));
          lbl.rotation.x = -Math.PI / 2;
          lbl.position.set(x, baseH + 0.012 + KEY_H + 0.002, z);
          laptop.add(lbl);
        }

        cursorX += w + KEY_GAP;
      });
    });

    const padCenterZ = D / 2 - 0.5;
    const padTray = new THREE.Mesh(
      new RoundedBoxGeometry(0.96, 0.01, 0.66, 2, 0.01),
      keyWellMat,
    );
    padTray.position.set(0, baseH + 0.008, padCenterZ);
    laptop.add(padTray);

    const trackpad = new THREE.Mesh(
      new RoundedBoxGeometry(0.88, 0.014, 0.58, 3, 0.02),
      darkMat,
    );
    trackpad.position.set(0, baseH + 0.016, padCenterZ);
    trackpad.castShadow = true;
    laptop.add(trackpad);

    // faint line near the bottom — reads as the physical click-hinge seam
    const seam = new THREE.Mesh(
      new THREE.BoxGeometry(0.7, 0.001, 0.004),
      feetMat,
    );
    seam.position.set(0, baseH + 0.0235, padCenterZ + 0.16);
    laptop.add(seam);

    // vents near the hinge
    const finGeo = new THREE.BoxGeometry(0.16, 0.006, 0.022);
    for (let i = -3; i <= 3; i++) {
      const fin = new THREE.Mesh(finGeo, darkMat);
      fin.position.set(i * 0.2, baseH + 0.003, -D / 2 + 0.1);
      laptop.add(fin);
    }

    const slatGeo = new THREE.BoxGeometry(0.02, 0.006, 0.09);
    [-1, 1].forEach((side) => {
      for (let i = 0; i < 6; i++) {
        const slat = new THREE.Mesh(slatGeo, darkMat);
        slat.position.set(side * (W / 2 - 0.012), baseH * 0.3, -0.5 + i * 0.11);
        laptop.add(slat);
      }
    });

    const speakerDotGeo = new THREE.CircleGeometry(0.006, 8);
    [-1, 1].forEach((side) => {
      for (let row = 0; row < 3; row++) {
        for (let col = 0; col < 6; col++) {
          const dot = new THREE.Mesh(speakerDotGeo, darkMat);
          dot.rotation.x = -Math.PI / 2;
          dot.position.set(
            side * (kbWidth / 2 + 0.05 + col * 0.014),
            baseH + 0.017,
            kbCenterZ - kbDepth / 2 + row * 0.02,
          );
          laptop.add(dot);
        }
      }
    });

    function addPort(x, z, side, w, h, { round = false } = {}) {
      const bezelGeo = round
        ? new THREE.CylinderGeometry(w, w, 0.016, 20)
        : new THREE.BoxGeometry(0.016, h + 0.012, w + 0.012);
      const bezel = new THREE.Mesh(bezelGeo, portBezelMat);
      if (round) bezel.rotation.z = Math.PI / 2;
      bezel.position.set(x, baseH / 2, z);
      laptop.add(bezel);

      const holeGeo = round
        ? new THREE.CylinderGeometry(w * 0.62, w * 0.62, 0.02, 20)
        : new THREE.BoxGeometry(0.014, h, w);
      const hole = new THREE.Mesh(holeGeo, portHoleMat);
      if (round) hole.rotation.z = Math.PI / 2;
      hole.position.set(x - side * 0.003, baseH / 2, z);
      laptop.add(hole);
    }

    // right edge — USB-C, USB-A, HDMI
    addPort(W / 2 - 0.003, 0.35, 1, 0.05, 0.018);
    addPort(W / 2 - 0.003, 0.58, 1, 0.05, 0.026);
    addPort(W / 2 - 0.003, 0.85, 1, 0.09, 0.02);

    // left edge — USB-C / power, headphone jack
    addPort(-W / 2 + 0.003, 0.4, -1, 0.05, 0.018);
    addPort(-W / 2 + 0.003, 0.7, -1, 0.014, 0, { round: true });

    const hingeZ = -D / 2 + 0.05;
    const hinge = new THREE.Mesh(
      new THREE.CylinderGeometry(0.08, 0.08, W - 0.1, 16),
      darkMat,
    );
    hinge.rotation.z = Math.PI / 2;
    hinge.position.set(0, baseH, hingeZ);
    laptop.add(hinge);

    // screen pivots around the hinge axis — fixed open, camera does the "approach"
    const screenPivot = new THREE.Group();
    screenPivot.position.set(0, baseH, hingeZ);
    screenPivot.rotation.x = -0.3;
    laptop.add(screenPivot);

    const screenLid = new THREE.Mesh(
      new RoundedBoxGeometry(W, screenH, screenT, 3, 0.04),
      bodyMat,
    );
    screenLid.position.set(0, screenH / 2, 0);
    screenLid.castShadow = true;
    screenPivot.add(screenLid);

    // camera notch in the top bezel
    const notch = new THREE.Mesh(new THREE.CircleGeometry(0.018, 16), darkMat);
    notch.position.set(0, screenH - 0.075, screenT / 2 + 0.001);
    screenPivot.add(notch);

    const displayW = W - 0.24;
    const displayH = screenH - 0.24;
    const display = new THREE.Mesh(
      new THREE.PlaneGeometry(displayW, displayH),
      screenMat,
    );
    display.position.set(0, screenH / 2, screenT / 2 + 0.002);
    screenPivot.add(display);

    // generous invisible click target — covers nearly the whole lid, not just the inset display
    const screenHitGeo = new THREE.PlaneGeometry(W - 0.06, screenH - 0.06);
    const screenHitMat = new THREE.MeshBasicMaterial({
      visible: false,
    });
    const screenHit = new THREE.Mesh(screenHitGeo, screenHitMat);
    screenHit.position.set(0, screenH / 2, screenT / 2 + 0.003);
    screenPivot.add(screenHit);

    // ---- CSS3D desktop, locked to the same plane as `display` ----
    const desktopDiv = document.createElement("div");
    desktopDiv.className = "desktop-root";
    const DIV_W = 1600;
    const DIV_H = 940;
    desktopDiv.style.width = `${DIV_W}px`;
    desktopDiv.style.height = `${DIV_H}px`;

    const cssObject = new CSS3DObject(desktopDiv);
    cssObject.position.set(0, screenH / 2, screenT / 2 + 0.004);
    cssObject.scale.set(displayW / DIV_W, displayH / DIV_H, 1);
    screenPivot.add(cssObject);

    setScreenEl(desktopDiv);

    const controls = new OrbitControls(camera, canvas);
    controls.enableDamping = true;
    controls.autoRotate = true;
    controls.autoRotateSpeed = 0.6;
    controls.enablePan = false;
    controls.enableZoom = false;
    controls.minPolarAngle = 0.35;
    controls.maxPolarAngle = 1.45;
    controls.target.copy(DEFAULT_TARGET);
    controls.update();

    // ---- click-to-zoom into the screen ----
    const raycaster = new THREE.Raycaster();
    const mouse = new THREE.Vector2();
    let screenIsOn = false;
    let animating = false;

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
        onComplete,
      );
    }

    function animateEmissive(from, to, duration) {
      tween(duration, (t) => {
        screenMat.emissiveIntensity = THREE.MathUtils.lerp(from, to, t);
      });
    }

    function zoomToScreen() {
      if (animating || screenIsOn) return;
      animating = true;
      controls.enabled = false;
      controls.autoRotate = false;

      const worldPos = new THREE.Vector3();
      display.getWorldPosition(worldPos);
      const worldQuat = new THREE.Quaternion();
      display.getWorldQuaternion(worldQuat);
      const normal = new THREE.Vector3(0, 0, 1)
        .applyQuaternion(worldQuat)
        .normalize();

      const vFov = THREE.MathUtils.degToRad(camera.fov);
      const fillFactor = 0.82; // how much of the viewport height the screen fills
      const distance = displayH / (fillFactor * 2 * Math.tan(vFov / 2));
      const targetCamPos = worldPos
        .clone()
        .add(normal.multiplyScalar(distance));

      animateEmissive(0, 0.55, 900);
      animateCameraTo(targetCamPos, worldPos, 1400, () => {
        animating = false;
        screenIsOn = true;
        setScreenOn(true);
      });
    }

    function zoomOut() {
      if (animating || !screenIsOn) return;
      animating = true;
      setScreenOn(false);
      screenIsOn = false;

      animateEmissive(screenMat.emissiveIntensity, 0, 600);
      animateCameraTo(DEFAULT_CAM_POS, DEFAULT_TARGET, 1400, () => {
        animating = false;
        controls.enabled = true;
        controls.autoRotate = true;
      });
    }
    zoomOutRef.current = zoomOut;

    function handleClick(event) {
      if (screenIsOn || animating) return;
      const rect = canvas.getBoundingClientRect();
      mouse.x = ((event.clientX - rect.left) / rect.width) * 2 - 1;
      mouse.y = -((event.clientY - rect.top) / rect.height) * 2 + 1;
      raycaster.setFromCamera(mouse, camera);
      const hit = raycaster.intersectObject(screenHit)[0]; // was: display
      if (hit) zoomToScreen();
    }
    canvas.addEventListener("click", handleClick);

    function handleMouseMove(event) {
      if (screenIsOn || animating) return;
      const rect = canvas.getBoundingClientRect();
      mouse.x = ((event.clientX - rect.left) / rect.width) * 2 - 1;
      mouse.y = -((event.clientY - rect.top) / rect.height) * 2 + 1;
      raycaster.setFromCamera(mouse, camera);
      canvas.style.cursor = raycaster.intersectObject(screenHit)[0]
        ? "pointer"
        : "default";
    }
    canvas.addEventListener("mousemove", handleMouseMove);

    function handleKeydown(e) {
      if (e.key === "Escape") zoomOut();
    }
    window.addEventListener("keydown", handleKeydown);

    function handleResize() {
      const { width, height } = canvas.parentElement.getBoundingClientRect();
      camera.aspect = width / height;
      camera.updateProjectionMatrix();
      renderer.setSize(width, height, false);
      renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
      cssRenderer.setSize(width, height);
    }
    handleResize();
    window.addEventListener("resize", handleResize);

    let animationId;
    const renderLoop = () => {
      controls.update();
      renderer.render(scene, camera);
      cssRenderer.render(scene, camera);
      animationId = requestAnimationFrame(renderLoop);
    };
    renderLoop();

    return () => {
      cancelAnimationFrame(animationId);
      window.removeEventListener("resize", handleResize);
      window.removeEventListener("keydown", handleKeydown);
      canvas.removeEventListener("click", handleClick);
      canvas.removeEventListener("mousemove", handleMouseMove);
      controls.dispose();
      renderer.dispose();
      cssContainerRef.current?.removeChild(cssRenderer.domElement);
      groundGeo.dispose();
      groundMat.dispose();
      bodyMat.dispose();
      deckMat.dispose();
      darkMat.dispose();
      keyCapMat.dispose();
      keySideMat.dispose();
      keyWellMat.dispose();
      portBezelMat.dispose();
      portHoleMat.dispose();
      feetMat.dispose();
      screenMat.dispose();
      keyGeometries.forEach((g) => g.dispose());
      keyLabelGeo.dispose();
      labelMaterialCache.forEach((m) => m.dispose());
      labelTextureCache.forEach((t) => t.dispose());
      labelMaterialCache.clear();
      labelTextureCache.clear();
    };
  }, []);

  return (
    <div className="laptop-scene">
      <canvas ref={canvasRef} className="laptop-canvas" />
      <div ref={cssContainerRef} className="laptop-css-layer" />
      <WorldNav onExit={onExit} visible={!screenOn} />
      {screenEl &&
        createPortal(<Desktop onBack={() => zoomOutRef.current()} />, screenEl)}
    </div>
  );
}
