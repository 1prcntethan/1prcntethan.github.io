import * as THREE from 'three';
import { OrbitControls } from 'three/addons/controls/OrbitControls.js';
import { OutlinePass } from 'three/addons/postprocessing/OutlinePass.js';
import { EffectComposer } from 'three/examples/jsm/postprocessing/EffectComposer.js';
import { RenderPass } from 'three/addons/postprocessing/RenderPass.js';
import { ShaderPass } from 'three/examples/jsm/postprocessing/ShaderPass.js';
import { FXAAShader } from 'three/examples/jsm/shaders/FXAAShader.js';

// initialize scene
const scene = new THREE.Scene();
scene.background = new THREE.Color(0x0b0b0b);

// add sphere to scene
const sphereGeometry = new THREE.CapsuleGeometry(1, 0, 67, 67);
const sphereMaterial = new THREE.MeshBasicMaterial({color: "black"});
const sphereMesh = new THREE.Mesh(
  sphereGeometry,
  sphereMaterial
);
scene.add(sphereMesh);

// outline mesh for sphere copies sphere and scales it very slightly
const outlineM = new THREE.MeshBasicMaterial({ color: "white", side: THREE.BackSide });
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

for (let i = 0; i < COUNT; i++) {
  const end = endpointForIndex(i, COUNT, 15);
  const length = end.length();

  const cylGeo = new THREE.CylinderGeometry(0.01, 0.01, length, 8);
  const cyl = new THREE.Mesh(cylGeo, cylMaterial);

  cyl.position.copy(end.clone().multiplyScalar(0.5));

  cyl.quaternion.setFromUnitVectors(
    new THREE.Vector3(0, 1, 0),
    end.clone().normalize()
  );

  scene.add(cyl);
}



// axes helper is on scene
// const axesHelper = new THREE.AxesHelper(10);
// scene.add(axesHelper);

//initialize camera
const camera = new THREE.PerspectiveCamera(
  50,
  window.innerWidth / window.innerHeight,
  0.1,
  100
)
camera.position.z = 35;
scene.add(camera);

// relating canvas to 3js, initializing renderer
const canvas = document.querySelector('canvas.threejs');
const renderer = new THREE.WebGLRenderer({
  canvas: canvas,
  antialias: true,
});
renderer.setSize(window.innerWidth, window.innerHeight);

// using orbit controls
const controls = new OrbitControls(camera, canvas);
controls.enableDamping = true;
controls.autoRotate = true;
controls.enablePan = false;
controls.minPolarAngle = Math.PI / 4;
controls.maxPolarAngle = Math.PI * 3 / 4;

// const composer = new EffectComposer(renderer);
// const renderPass = new RenderPass(scene, camera);
// composer.addPass(renderPass);


// const fxaaPass = new ShaderPass(FXAAShader);
// fxaaPass.material.uniforms['resolution'].value.x = 1 / (window.innerWidth * window.devicePixelRatio);
// fxaaPass.material.uniforms['resolution'].value.y = 1 / (window.innerHeight * window.devicePixelRatio);
// composer.addPass(fxaaPass);

// const resolution = new THREE.Vector2( window.innerWidth, window.innerHeight );
// const outlinePass = new OutlinePass( resolution, scene, camera );
// outlinePass.selectedObjects = [sphereMesh];
// composer.addPass( outlinePass );

// logic to resize camera view on window resize
window.addEventListener('resize', () => {
  camera.aspect = window.innerWidth / window.innerHeight;
  camera.updateProjectionMatrix();
  renderer.setSize(window.innerWidth, window.innerHeight);
})

// render loop that renders each consequtive frame
const renderloop = () => {
  controls.update();
  // composer.render();
  renderer.render(scene, camera)
  window.requestAnimationFrame(renderloop);
}
renderloop();

