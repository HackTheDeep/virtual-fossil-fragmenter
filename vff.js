var scene = new THREE.Scene();
var camera = new THREE.PerspectiveCamera( 75, 1, 0.1, 1000 );

var renderer = new THREE.WebGLRenderer({antialias: true});
renderer.localClippingEnabled = true;
renderer.setSize(500, 500 );
document.body.appendChild( renderer.domElement );

//add orbit control
const orbit = new THREE.OrbitControls(camera, renderer.domElement);
orbit.enableZoom = false;
orbit.enableKeys = false;

scene.background = new THREE.Color( 0x505050 );
scene.add( new THREE.HemisphereLight( 0x606060, 0x404040 ) );

var light = new THREE.DirectionalLight( 0xffffff, 1 );
light.position.set( 0, 1, 0 ).normalize();
scene.add( light );

camera.position.set(0, 10, 0)
camera.lookAt(0, 0, 0);

//var positions = getPositions();
var meshes = [];

var loader = new THREE.STLLoader();
loader.load( './models/AMNH-FI-101479_M21282-40430__cephalon.stl', function ( loadedGeometry ) {
    //for (var i = 0; i < 18; i++){
        var localPlane = getRandomClippingPlane();
        var localPlane2 = getRandomClippingPlane();
        var material = new THREE.MeshLambertMaterial( { color: 0xE3DAC9, clippingPlanes: [localPlane, localPlane2]} );
        var mesh = new THREE.Mesh( loadedGeometry, material);
        mesh.scale.set(0.5, 0.5, 0.5);
        var rotationY = Math.random() * 2 * Math.PI;
        var rotationZ = (0.25 * Math.random() - 0.125) * 2 * Math.PI; 
        mesh.rotation.set(0, rotationY, rotationZ);
        //var pos = positions[i];
        //mesh.position.set(pos[0], pos[1], pos[2]);
        meshes.push(mesh);
        scene.add( mesh );
        render();
    //}
});

function getRandomClippingPlane() {
    // pick clipping axis
    var x, z;
    if (Math.random() > 0.5){
        x = 1;
        z = 0;
    } else {
        x = 0;
        z = 1;
    }
    return new THREE.Plane( new THREE.Vector3( x, 0, z ), 2 * Math.random() - 1 );
}

/*
function getPositions(){
    var unit = 4;
    var offset = unit * 9;
    var positions = [];
    for (var i = 1; i < 4; i++){
        for (var j = 1; j < 7; j++){
            positions.push([unit * j - 16, 0, unit * i - 9]);
        }
    }
    return positions;
}
*/

var getImageData = true;
function render() {
    renderer.render( scene, camera );
    if (meshes.length > 0 && getImageData){
        imgData = renderer.domElement.toDataURL();
        console.log(imgData);
        getImageData = false;
    }
}

