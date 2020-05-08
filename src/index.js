  import * as THREE from 'three';
  //import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';


  
  async function init() {

    //var loader = new GLTFLoader();

    var camera, scene, renderer;
  
    camera = new THREE.PerspectiveCamera( 70, window.innerWidth / window.innerHeight, 1, 10000 );
    camera.position.z = 400;

    scene = new THREE.Scene();


    const canvas = document.getElementById("canvas");
    
    renderer = new THREE.WebGLRenderer( { antialias: true, canvas } );
    renderer.setPixelRatio( window.devicePixelRatio );
    renderer.setSize( window.innerWidth, window.innerHeight );
    renderer.setClearColor ( new THREE.Color(0x2222aa));

    const annotVals = [];
    //scene.add(mesh);

    window.addEventListener( 'resize', onWindowResize, false );

    function onWindowResize() {

      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
  
      renderer.setSize( window.innerWidth, window.innerHeight );
  
    }


    var light = new THREE.HemisphereLight( 0xffffbb, 0x080820, 1 );
    scene.add( light );
    var directionalLight = new THREE.DirectionalLight( 0xffffff);
    

    const sphere =new THREE.LineSegments(
      new THREE.SphereBufferGeometry(100),
      new THREE.MeshBasicMaterial({color:0xff0000})
    );
    scene.add(sphere);

    scene.add( directionalLight.target );
    directionalLight.target.position.x = 0.0;
    directionalLight.target.position.y = 0.0;
    directionalLight.target.position.z = -100.0;
    scene.add( directionalLight );

    async function animate() {
  
      
      requestAnimationFrame( animate );
  
      renderer.render( scene, camera );
  
    }

    animate();

  }


  init().then(()=>{
    console.log("Done");
  })