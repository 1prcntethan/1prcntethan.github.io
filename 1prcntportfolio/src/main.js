import * as THREE from 'three';
import { OrbitControls } from 'three/addons/controls/OrbitControls.js';

const scene = new THREE.Scene();

const cubeGeometry = new THREE.BoxGeometry(1, 1, 1);
const cubeMaterial = new THREE.MeshBasicMaterial({color: "red"});

const cubeMesh = new THREE.Mesh(
  cubeGeometry,
  cubeMaterial
);

scene.add(cubeMesh);
console.log(scene);

console.log(window);

// const camera = new THREE.PerspectiveCamera(
//   50,
//   window.innerWidth / window.innerHeight,
//   0.1,
//   30
// )

const camera = new THREE.OrthographicCamera(
  -1,
  1,
  1,
  -1,
  0.1,
  30
)

camera.position.z = 5;
scene.add(camera);

const canvas = document.querySelector('canvas.threejs');
const renderer = new THREE.WebGLRenderer({canvas});
renderer.setSize(window.innerWidth, window.innerHeight);

const controls = new OrbitControls(camera, canvas);
controls.enableDamping = true;
controls.autoRotate = true;


const renderloop = () => {
  controls.update();
  renderer.render(scene, camera)
  window.requestAnimationFrame(renderloop);
}

renderloop();

