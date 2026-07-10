import React, { useEffect, useRef, useState } from "react";
import * as THREE from "three";
import { OrbitControls } from "three/addons/controls/OrbitControls.js";
import { motion, AnimatePresence } from "framer-motion";
import "./developer.css";

export default function Developer() {
  const canvasRef = useRef(null);
  const [developerVisible] = useState(true);

  useEffect(() => {
    const canvas = canvasRef.current;

    const scene = new THREE.Scene();
    scene.background = new THREE.Color(0xffffff);

    const camera = new THREE.PerspectiveCamera(
      45,
      window.innerWidth / window.innerHeight,
      0.1,
      100
    );
    camera.position.set(5, 3.2, 6);
    scene.add(camera);

    // lights
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

    // renderer
    const renderer = new THREE.WebGLRenderer({ canvas, antialias: true });
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.shadowMap.enabled = true;
    renderer.shadowMap.type = THREE.PCFSoftShadowMap;
    renderer.outputColorSpace = THREE.SRGBColorSpace;

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

    const baseMat = new THREE.MeshStandardMaterial({
      color: "#9a9a9a",
      roughness: 0.55,
      metalness: 0.15,
    });
    const deckMat = new THREE.MeshStandardMaterial({
      color: "#7c7c7c",
      roughness: 0.6,
      metalness: 0.1,
    });
    const hingeMat = new THREE.MeshStandardMaterial({
      color: "#3a3a3a",
      roughness: 0.4,
      metalness: 0.5,
    });
    const screenMat = new THREE.MeshStandardMaterial({
      color: "#161616",
      roughness: 0.3,
      metalness: 0.1,
    });

    const W = 3.4; // laptop width
    const D = 2.3; // base depth
    const baseH = 0.18;
    const screenH = 2.1;
    const screenT = 0.12;

    const base = new THREE.Mesh(new THREE.BoxGeometry(W, baseH, D), baseMat);
    base.position.y = baseH / 2;
    base.castShadow = true;
    base.receiveShadow = true;
    laptop.add(base);

    const deck = new THREE.Mesh(
      new THREE.BoxGeometry(W - 0.3, 0.02, D - 0.35),
      deckMat
    );
    deck.position.set(0, baseH + 0.011, -0.05);
    laptop.add(deck);

    const trackpad = new THREE.Mesh(
      new THREE.BoxGeometry(0.9, 0.012, 0.65),
      hingeMat
    );
    trackpad.position.set(0, baseH + 0.022, D / 2 - 0.55);
    laptop.add(trackpad);

    const hingeZ = -D / 2 + 0.05;

    const hinge = new THREE.Mesh(
      new THREE.CylinderGeometry(0.09, 0.09, W - 0.1, 16),
      hingeMat
    );
    hinge.rotation.z = Math.PI / 2;
    hinge.position.set(0, baseH, hingeZ);
    laptop.add(hinge);

    // screen pivots around the hinge axis (X), open ~107° from base
    const screenPivot = new THREE.Group();
    screenPivot.position.set(0, baseH, hingeZ);
    screenPivot.rotation.x = -0.3;
    laptop.add(screenPivot);

    const screenLid = new THREE.Mesh(
      new THREE.BoxGeometry(W, screenH, screenT),
      baseMat
    );
    screenLid.position.set(0, screenH / 2, 0);
    screenLid.castShadow = true;
    screenPivot.add(screenLid);

    const display = new THREE.Mesh(
      new THREE.PlaneGeometry(W - 0.24, screenH - 0.24),
      screenMat
    );
    display.position.set(0, screenH / 2, screenT / 2 + 0.001);
    screenPivot.add(display);

    // orbit controls — same feel as the home screen
    const controls = new OrbitControls(camera, canvas);
    controls.enableDamping = true;
    controls.autoRotate = true;
    controls.autoRotateSpeed = 0.6;
    controls.enablePan = false;
    controls.enableZoom = false;
    controls.minPolarAngle = 0.35;
    controls.maxPolarAngle = 1.45; // stop before camera dips under the ground
    controls.target.set(0, 0.6, 0);
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
      groundGeo.dispose();
      groundMat.dispose();
      baseMat.dispose();
      deckMat.dispose();
      hingeMat.dispose();
      screenMat.dispose();
    };
  }, []);

  return (
    <AnimatePresence>
      {developerVisible && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1.5, ease: "easeInOut" }}
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            backgroundColor: "#ffffff",
          }}
        >
          <canvas
            ref={canvasRef}
            style={{ width: "100%", height: "100%", display: "block", touchAction: "none" }}
          />
        </motion.div>
      )}
    </AnimatePresence>
  );
}