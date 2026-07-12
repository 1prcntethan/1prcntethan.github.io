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

export default function Laptop() {
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
    const keyMat = new THREE.MeshStandardMaterial({
      color: "#5c5c5c",
      roughness: 0.7,
      metalness: 0.05,
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

    // keyboard — instanced grid of keys, cheap and detailed
    const KEY_COLS = 14;
    const KEY_ROWS = 5;
    const keyGap = 0.02;
    const keySize = 0.13;
    const keyGeo = new RoundedBoxGeometry(keySize, 0.02, keySize, 2, 0.006);
    const keyCount = KEY_COLS * KEY_ROWS;
    const keyboard = new THREE.InstancedMesh(keyGeo, keyMat, keyCount);
    keyboard.castShadow = true;
    const dummy = new THREE.Object3D();
    const kbWidth = KEY_COLS * (keySize + keyGap);
    const kbDepth = KEY_ROWS * (keySize + keyGap);
    let idx = 0;
    for (let r = 0; r < KEY_ROWS; r++) {
      for (let c = 0; c < KEY_COLS; c++) {
        const x = -kbWidth / 2 + c * (keySize + keyGap) + keySize / 2;
        const z = -kbDepth / 2 + r * (keySize + keyGap) + keySize / 2 - 0.35;
        dummy.position.set(x, baseH + 0.02, z);
        dummy.updateMatrix();
        keyboard.setMatrixAt(idx, dummy.matrix);
        idx++;
      }
    }
    keyboard.instanceMatrix.needsUpdate = true;
    laptop.add(keyboard);

    // trackpad
    const trackpad = new THREE.Mesh(
      new RoundedBoxGeometry(0.9, 0.012, 0.6, 2, 0.004),
      darkMat,
    );
    trackpad.position.set(0, baseH + 0.015, D / 2 - 0.55);
    laptop.add(trackpad);

    // vents near the hinge
    for (let i = -2; i <= 2; i++) {
      const vent = new THREE.Mesh(
        new THREE.BoxGeometry(0.18, 0.01, 0.03),
        darkMat,
      );
      vent.position.set(i * 0.24, baseH + 0.001, -D / 2 + 0.12);
      laptop.add(vent);
    }

    // port cutouts, right edge
    [0.55, 0.75].forEach((z) => {
      const port = new THREE.Mesh(
        new THREE.BoxGeometry(0.02, 0.05, 0.14),
        darkMat,
      );
      port.position.set(W / 2 - 0.005, baseH / 2, z);
      laptop.add(port);
    });

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
      keyMat.dispose();
      feetMat.dispose();
      screenMat.dispose();
      keyGeo.dispose();
    };
  }, []);

  return (
    <div className="laptop-scene">
      <canvas ref={canvasRef} className="laptop-canvas" />
      <div ref={cssContainerRef} className="laptop-css-layer" />
      {screenEl &&
        createPortal(<Desktop onBack={() => zoomOutRef.current()} />, screenEl)}
    </div>
  );
}
