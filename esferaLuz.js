//declaramos los objetos globales que manejaremos
var scene;
var camera;
var renderer;
var sphere;
//creamos la funcion init
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
  
  
  //colocamos una luz direccional
  const light = new THREE.DirectionalLight( 0xffffff );
	light.position.set( 1, 1, 1 ).normalize();
	scene.add( light );
  
  //Creamos una esfera de radio=1 color randomico
  const radio=1;
  const geometry = new THREE.IcosahedronGeometry( radio , 2 );    
  const material = new THREE.MeshLambertMaterial( { color: Math.random() * 0xffffff } ); 
  //const material = new THREE.MeshBasicMaterial({ color: 0xff0000 });
  //document.write("da");
  sphere = new THREE.Mesh(geometry, material);
  scene.add(sphere);
  renderer.render(scene, camera);
}
function animate() 
{
  requestAnimationFrame(animate);
  sphere.rotation.x += 0.01;  
  renderer.render(scene, camera);
}
//Llamamos a los metodos
init();
animate();
