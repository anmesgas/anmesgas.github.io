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
    //suelo.position.set(0, 0, 0);
    //suelo.rotation.x = -Math.PI/2;
    //suelo.rotation.z = Math.PI/4;
    var robot = new THREE.Object3D();
    
    var baseC = new THREE.Mesh( new THREE.CylinderGeometry( 50, 50, 15, 40 ), material );

    var brazoEsfera = new THREE.Mesh( new THREE.SphereGeometry( 20, 20, 20 ), material );
    brazoEsfera.position.set(0, 120, 0);

    var brazoCaja = new THREE.Mesh( new THREE.BoxGeometry( 18, 120, 12 ), material );
    brazoCaja.position.set(0, 60, 0);

    var brazoCilindro = new THREE.Mesh( new THREE.CylinderGeometry( 20, 20, 18, 40 ), material );
    brazoCilindro.rotation.x = Math.PI/2;
    brazoCilindro.rotation.z = Math.PI/5;

    var antebrazoCilindro = new THREE.Mesh( new THREE.CylinderGeometry( 15, 15, 40, 40 ), material );
    antebrazoCilindro.position.set(0, 200, 0);
    antebrazoCilindro.rotation.x = Math.PI/2;
    antebrazoCilindro.rotation.z = Math.PI/5;

    var antebrazoNervioGeometria = new THREE.BoxGeometry( 4, 80, 4 );

    var antebrazoNervio1 = new THREE.Mesh( antebrazoNervioGeometria, material );
    antebrazoNervio1.position.set(4, 160, 4);

    var antebrazoNervio2 = new THREE.Mesh( antebrazoNervioGeometria, material );
    antebrazoNervio2.position.set(4, 160, -4);

    var antebrazoNervio3 = new THREE.Mesh( antebrazoNervioGeometria, material );
    antebrazoNervio3.position.set(-4, 160, 4);

    var antebrazoNervio4 = new THREE.Mesh( antebrazoNervioGeometria, material );
    antebrazoNervio4.position.set(-4, 160, -4);

    var antebrazoBase = new THREE.Mesh( new THREE.CylinderGeometry( 22, 22, 6, 40 ), material );
    antebrazoBase.position.set(0, 120, 0);

    var pinzas_coordenadas = [
        0, 0, 0,
        0, 0, 4,
        0, 20, 0,
        0, 20, 4,
        19, 0, 0,
        19, 0, 4,
        19, 20, 0,
        19, 20, 4,
        38, 3, 0,
        38, 3, 2,
        38, 17, 0,
        38, 17, 2
    ];

    var pinzas_indices = [
        0,2,1, 0,3,2,
        0,2,6, 0,6,4,
        0,1,4, 0,5,4,
        7,6,3, 7,2,3,
        7,5,1, 7,5,3,
        7,11,10, 7,10,6,
        7,11,9, 7,9,5,
        8,4,5, 8,5,9,
        8,10,11, 8,11,9,
        8,4,6, 8,6,10
    ]

    var pinza1_geometry = new THREE.Geometry();

    for (let i = 0; i < pinzas_coordenadas.length; i += 3) {
        let vertice = new THREE.Vector3( pinzas_coordenadas[i], pinzas_coordenadas[i+1], pinzas_coordenadas[i+2] );
        pinza1_geometry.vertices.push( vertice );
    }

    for (let i = 0; i < pinzas_indices.length; i += 3) {
        let triangulo = new THREE.Face3( pinzas_indices[i], pinzas_indices[i+1], pinzas_indices[i+2] );
        pinza1_geometry.faces.push(triangulo);
    }

    var pinza1 = new THREE.Mesh( pinza1_geometry, material );
    pinza1.position.set( 0, 190, 20 );
    pinza1.rotation.y = -Math.PI/4;

    var pinza2 = new THREE.Mesh( pinza1_geometry, material );
    pinza2.position.set( 20, 190, -10 );
    pinza2.rotation.y = -Math.PI/4;

    var robot = new THREE.Object3D();
    var base = new THREE.Object3D();
    var brazo = new THREE.Object3D();
    var antebrazo = new THREE.Object3D();
    var mano = new THREE.Object3D();

    robot.add(base);

    base.add(baseC);
    base.add(brazo);

    brazo.add(brazoEsfera);
    brazo.add(brazoCaja);
    brazo.add(brazoCilindro);
    brazo.add(antebrazo);

    antebrazo.add(antebrazoNervio1);
    antebrazo.add(antebrazoNervio2);
    antebrazo.add(antebrazoNervio3);
    antebrazo.add(antebrazoNervio4);
    antebrazo.add(antebrazoBase);
    antebrazo.add(mano);

    mano.add(antebrazoCilindro);
    mano.add(pinza1);
    mano.add(pinza2);

    robot.position.set( 0, 0, 0 );

    scene.add(suelo);
    scene.add(robot);
    
}


function render() {
    requestAnimationFrame(render);
    renderer.render(scene,camera);
}

init();
loadScene();
render();
