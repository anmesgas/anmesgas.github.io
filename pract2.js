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


function render() {
    requestAnimationFrame(render);
    update();
    renderer.render(scene,camera);
}

init();
loadScene();
render();
