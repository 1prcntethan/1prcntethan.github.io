import * as THREE from "three";
import { OrbitControls } from "three/addons/controls/OrbitControls.js";
import { useEffect, useRef } from "react";
import React from "react";

export default function Hero({ onDeveloper, onPortfolio }) {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;

    // initialize scene
    const scene = new THREE.Scene();
    scene.background = new THREE.Color(0x0b0b0b);

    //initialize camera
    const camera = new THREE.PerspectiveCamera(
      50,
      window.innerWidth / window.innerHeight,
      0.1,
      100,
    );
    camera.position.z = 35;
    scene.add(camera);

    // initializing renderer
    const renderer = new THREE.WebGLRenderer({
      canvas: canvas,
      antialias: true,
    });
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    handleResize();

    // using orbit controls
    const controls = new OrbitControls(camera, canvas);
    controls.enableDamping = true;
    controls.autoRotate = true;
    controls.enablePan = false;
    controls.enableZoom = false;
    controls.minPolarAngle = Math.PI / 4;
    controls.maxPolarAngle = (Math.PI * 3) / 4;

    // add sphere to scene
    const sphereGeometry = new THREE.SphereGeometry(1, 67, 67);
    const sphereMaterial = new THREE.MeshBasicMaterial({ color: "black" });
    const sphereMesh = new THREE.Mesh(sphereGeometry, sphereMaterial);
    scene.add(sphereMesh);

    // outline mesh for sphere copies sphere and scales it very slightly
    const outlineM = new THREE.MeshBasicMaterial({
      color: "white",
      side: THREE.BackSide,
    });
    const outline = new THREE.Mesh(sphereGeometry.clone(), outlineM);
    outline.scale.set(1.02, 1.02, 1.02);
    sphereMesh.add(outline);

    function endpointForIndex(i, count, maxRadius = 15) {
      const angle = (i / count) * Math.PI * 2;

      // base circle
      const baseRadius = maxRadius * (0.66 + Math.random() * 0.33);
      // keeps lengths between 75–100% of max

      const x = Math.cos(angle) * baseRadius;
      const z = Math.sin(angle) * baseRadius;

      // controlled height variation
      const y = (Math.random() - 0.5) * 12; // adjust spread here

      return new THREE.Vector3(x, y, z);
    }

    const cylMaterial = new THREE.MeshBasicMaterial({ color: "white" });

    const COUNT = 6;

    const nodeValues = [
      "designer",
      "developer",
      "creator",
      "athlete",
      "artist",
      "musician",
    ];
    const nodeTargets = [];

    for (let i = 0; i < COUNT; i++) {
      const end = endpointForIndex(i, COUNT, 15);
      const length = end.length();

      const cylGeo = new THREE.CylinderGeometry(0.01, 0.01, length, 8);
      const cyl = new THREE.Mesh(cylGeo, cylMaterial);

      cyl.position.copy(end.clone().multiplyScalar(0.5));

      cyl.quaternion.setFromUnitVectors(
        new THREE.Vector3(0, 1, 0),
        end.clone().normalize(),
      );

      scene.add(cyl);

      // clickable node sphere
      const nodeGeo = new THREE.SphereGeometry(0.8, 16, 16);
      const nodeMat = new THREE.MeshBasicMaterial({
        color: "white",
        transparent: true,
        opacity: 0.0,
      });
      const node = new THREE.Mesh(nodeGeo, nodeMat);
      node.position.copy(end);

      node.userData.index = nodeValues[i]; // identify node
      nodeTargets.push(node);

      scene.add(node);
    }

    const raycaster = new THREE.Raycaster();
    const mouse = new THREE.Vector2();

    function handleClick(event) {
      const rect = canvas.getBoundingClientRect();

      mouse.x = ((event.clientX - rect.left) / rect.width) * 2 - 1;
      mouse.y = -((event.clientY - rect.top) / rect.height) * 2 + 1;

      raycaster.setFromCamera(mouse, camera);

      const hits = raycaster.intersectObjects(nodeTargets);

      if (hits.length > 0) {
        nodeZoomIn(1500);
        onDeveloper();
      }
    }

    canvas.addEventListener("click", handleClick);

    // axes helper is on scene
    // const axesHelper = new THREE.AxesHelper(10);
    // scene.add(axesHelper);

    // logic to resize camera view on window resize
    function handleResize() {
      const { width, height}  = canvas.getBoundingClientRect();

      camera.aspect = width / height;
      camera.updateProjectionMatrix();
      renderer.setSize(width, height, false);
      renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
      console.log("resized");
    }
    window.addEventListener("resize", handleResize);

    // render loop that renders each consequtive frame
    let animationId;
    const renderloop = () => {
      controls.update();
      // composer.render();
      renderer.render(scene, camera);
      animationId = requestAnimationFrame(renderloop);
    };
    renderloop();

    function nodeZoomIn(duration) {
      const startPos = camera.position.clone();
      const targetPos = new THREE.Vector3(0, 0, 0.5);

      const startTime = performance.now();

      function easeInOutCubic(t) {
        return t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2;
      }

      function animate(now) {
        const elapsed = now - startTime;
        const progress = Math.min(elapsed / duration, 1);
        const eased = easeInOutCubic(progress);

        camera.position.lerpVectors(startPos, targetPos, eased);

        if (progress < 1) {
          requestAnimationFrame(animate);
        } else {
          controls.enabled = true;
        }
      }

      requestAnimationFrame(animate);
    }

    //cleanup
    return () => {
      cancelAnimationFrame(animationId);
      window.removeEventListener("resize", handleResize);
      canvas.removeEventListener("click", handleClick);
      controls.dispose();
      renderer.dispose();
    };
  }, []);

  return (
    <div style={{ width: "100%", height: "100%", position: "relative" }}>
      <div className="hero-title">hi, i'm ethan.</div>
      <canvas ref={canvasRef} className="threejs" style={{ width: "100%", height: "100%" , display: "block", touchAction: "none"}}></canvas>
      <button className="portfolio-go" onClick={onPortfolio}>
        view portfolio
        <img src="/scrolldown.svg" className="hero-scroll-down-indicator">
        </img>
        </button>
    </div>
  );
}
