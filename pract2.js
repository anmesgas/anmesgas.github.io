var renderer, scene, camera;

function init()
{
    renderer = new THREE.WebGLRenderer();
    renderer.setSize( window.innerWidth, window.innerHeight );
    renderer.setClearColor( new THREE.Color(0x0000AA), 1.0 );
    document.body.appendChild(renderer.domElement);

    scene = new THREE.Scene();

    camera = new THREE.PerspectiveCamera( 75, window.innerWidth/window.innerHeight, 0.1,1000);
    camera.position.set(200, 300, 150); #pos cam
    camera.lookAt( new THREE.Vector3(0,0,0) );  
}


function loadScene() {

renderer = new THREE.WebGLRenderer();

    var material = new THREE.MeshBasicMaterial( {color:"red", wireframe: true} );

    var suelo = new THREE.Mesh( new THREE.PlaneGeometry( 1000, 1000, 20, 20 ), material );
    suelo.position.set(0, 0, 0);
    suelo.rotation.x = -Math.PI/2;
    suelo.rotation.z = Math.PI/4;
    scene.add(suelo);
    
}


function render() {
    requestAnimationFrame(render);
    update()
    renderer.render(scene,camera);
}

init();
loadScene();
render();
