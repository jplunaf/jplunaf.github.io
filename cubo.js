//declaramos los objetos globales que manejaremos
var scene;
var camera;
var renderer;
var cube;
function init()
{
  //inicializamos la escena
  scene = new THREE.Scene();
  //inicializamos la camara
  camera = new THREE.PerspectiveCamera(
    75,
    window.innerWidth / window.innerHeight,
    0.1,
    1000
  );
  camera.position.z = 5;
  //inicializamos el renderizador y establecemos su parametros
  renderer = new THREE.WebGLRenderer();
  renderer.setSize(window.innerWidth, window.innerHeight);
  document.body.appendChild(renderer.domElement);

  //Definimos nuestra geometria
  const geometry = new THREE.BoxGeometry();
  const material = new THREE.MeshBasicMaterial({ color: 0xff0000 });
  cube = new THREE.Mesh(geometry, material);
  scene.add(cube);
}
function animate() 
{
  requestAnimationFrame(animate);
  cube.rotation.x += 0.01;
  cube.rotation.y += 0.01;
  renderer.render(scene, camera);
}
//Llamamos a los metodos
init();
animate();
