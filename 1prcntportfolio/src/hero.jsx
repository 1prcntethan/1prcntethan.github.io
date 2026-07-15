import * as THREE from "three";
import { OrbitControls } from "three/addons/controls/OrbitControls.js";
import { useEffect, useRef } from "react";
import { EffectComposer } from "three/addons/postprocessing/EffectComposer.js";
import { RenderPass } from "three/addons/postprocessing/RenderPass.js";
import { ShaderPass } from "three/addons/postprocessing/ShaderPass.js";
import { UnrealBloomPass } from "three/addons/postprocessing/UnrealBloomPass.js";
import { FXAAShader } from "three/addons/shaders/FXAAShader.js";
import React from "react";

export default function Hero({ onDeveloper, onArtist, onPortfolio }) {
  const canvasRef = useRef(null);
  const labelRefs = useRef([]);

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

    const ambient = new THREE.AmbientLight(0xffffff, 0.4);
    scene.add(ambient);

    const pointLight = new THREE.PointLight(0xfff4e6, 1.5, 100);
    pointLight.position.set(5, 5, 5);
    scene.add(pointLight);

    // initializing renderer
    const renderer = new THREE.WebGLRenderer({
      canvas: canvas,
      antialias: true,
    });
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.toneMapping = THREE.ACESFilmicToneMapping;
    renderer.toneMappingExposure = 0.9;

    // initializing composer and bloom pass
    const composer = new EffectComposer(renderer);

    const renderPass = new RenderPass(scene, camera);
    composer.addPass(renderPass);

    const bloomPass = new UnrealBloomPass(
      new THREE.Vector2(window.innerWidth, window.innerHeight),
      0.6, // strength
      0.7, // radius
      0.1, // threshold
    );
    composer.addPass(bloomPass);

    handleResize();

    const fxaaPass = new ShaderPass(FXAAShader);
    fxaaPass.material.uniforms["resolution"].value.x =
      1 / (window.innerWidth * renderer.getPixelRatio());
    fxaaPass.material.uniforms["resolution"].value.y =
      1 / (window.innerHeight * renderer.getPixelRatio());
    composer.addPass(fxaaPass);

    fxaaPass.renderToScreen = true;

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
    const sphereMaterial = new THREE.MeshStandardMaterial({
      color: "#a2d3bf",
      emissive: "#a2d3bf",
      emissiveIntensity: 0.6,
      roughness: 0.4,
      metalness: 0.0,
    });
    const sphereMesh = new THREE.Mesh(sphereGeometry, sphereMaterial);
    scene.add(sphereMesh);

    // adding the lines (made of thin cylinders) and the invisible clickable nodes
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

    const cylMaterial = new THREE.MeshBasicMaterial({ color: "#edfaf5" });
    const COUNT = 6;
    const LINE_SCALE = 0.93; // line stops short of the node, leaving room for the label

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
      const fullLength = end.length();
      const dir = end.clone().normalize();
      const lineLength = fullLength * LINE_SCALE;

      const cylGeo = new THREE.CylinderGeometry(0.02, 0.02, lineLength, 8);
      const cyl = new THREE.Mesh(cylGeo, cylMaterial);

      cyl.position.copy(dir.clone().multiplyScalar(lineLength / 2));
      cyl.quaternion.setFromUnitVectors(new THREE.Vector3(0, 1, 0), dir);
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
        onArtist();
        console.log("clicked node:", hits[0].object.userData.index);
      }
    }
    canvas.addEventListener("click", handleClick);
    // axes helper is on scene
    // const axesHelper = new THREE.AxesHelper(10);
    // scene.add(axesHelper);

    // logic to resize camera view on window resize
    function handleResize() {
      const { width, height } = canvas.parentElement.getBoundingClientRect();

      camera.aspect = width / height;
      camera.updateProjectionMatrix();

      renderer.setSize(width, height, false);
      composer.setSize(width, height);

      renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
      console.log("resized");
    }
    window.addEventListener("resize", handleResize);

    const projected = new THREE.Vector3();
    const occlusionRay = new THREE.Raycaster();

    // tune these to taste once you see it running —
    // they're the distance range over which labels grow/shrink
    const NEAR_DIST = 20;
    const FAR_DIST = 50;
    const MIN_SCALE = 0.65;
    const MAX_SCALE = 1.35;

    function mapRange(value, inMin, inMax, outMin, outMax) {
      const t = THREE.MathUtils.clamp((value - inMin) / (inMax - inMin), 0, 1);
      return outMin + t * (outMax - outMin);
    }

    function updateLabels() {
      const rect = canvas.getBoundingClientRect();

      nodeTargets.forEach((node, i) => {
        const el = labelRefs.current[i];
        if (!el) return;

        projected.copy(node.position).project(camera);

        // behind the camera entirely — hide
        if (projected.z > 1) {
          el.style.opacity = "0";
          return;
        }

        const x = (projected.x * 0.5 + 0.5) * rect.width;
        const y = (-projected.y * 0.5 + 0.5) * rect.height;

        // distance-based scale: closer = bigger, farther = smaller
        const dist = camera.position.distanceTo(node.position);
        const scale = mapRange(dist, NEAR_DIST, FAR_DIST, MAX_SCALE, MIN_SCALE);

        // occlusion: is the sphere sitting between the camera and this node?
        const toNode = node.position.clone().sub(camera.position);
        const distToNode = toNode.length();
        occlusionRay.set(camera.position, toNode.normalize());

        const sphereHit = occlusionRay.intersectObject(sphereMesh)[0];
        const isOccluded = sphereHit && sphereHit.distance < distToNode;

        el.style.left = `${x}px`;
        el.style.top = `${y}px`;
        el.style.transform = `translate(-50%, -50%) scale(${scale})`;
        el.style.opacity = isOccluded ? "0" : "1";
      });
    }

    // render loop that renders each consequtive frame
    let animationId;
    const renderloop = () => {
      controls.update();
      composer.render();
      updateLabels();
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

  const nodeValues = [
    "designer",
    "developer",
    "creator",
    "athlete",
    "artist",
    "musician",
  ];

  return (
    <div style={{ width: "100%", height: "100%", position: "relative" }}>
      <div className="hero-title">hi, i'm ethan.</div>
      <canvas
        ref={canvasRef}
        className="threejs"
        style={{
          width: "100%",
          height: "100%",
          display: "block",
          touchAction: "none",
        }}
      ></canvas>

      {nodeValues.map((label, i) => (
        <div
          key={label}
          ref={(el) => (labelRefs.current[i] = el)}
          style={{
            position: "absolute",
            pointerEvents: "none",
            opacity: 0,
            fontFamily: "'Raleway', sans-serif",
            fontSize: "0.75rem",
            color: "#edfaf5",
            letterSpacing: "0.03em",
            textShadow: "0 0 6px rgba(0,0,0,0.6)",
            zIndex: 1000,
            transition: "opacity 0.15s ease", // smooths the occlusion fade
          }}
        >
          {label}
        </div>
      ))}

      <button className="portfolio-go" onClick={onPortfolio}>
        view portfolio
        <img src="/scrolldown.svg" className="hero-scroll-down-indicator"></img>
      </button>
    </div>
  );
}
