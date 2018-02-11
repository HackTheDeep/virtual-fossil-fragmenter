var scene = new THREE.Scene();
var camera = new THREE.PerspectiveCamera( 75, 1, 0.1, 1000 );

var renderer = new THREE.WebGLRenderer({antialias: true});
renderer.localClippingEnabled = true;
renderer.setSize(500, 500 );
var container = document.getElementById("container");
container.appendChild( renderer.domElement);

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

var geometry;
var loader = new THREE.STLLoader();
loader.load( './models/AMNH-FI-101479_M21282-40430__cephalon.stl', function ( loadedGeometry ) {
    geometry = loadedGeometry;
    buildObject();
    render();
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

function buildObject(){
    var localPlane = getRandomClippingPlane();
    var localPlane2 = getRandomClippingPlane();
    var material = new THREE.MeshLambertMaterial( { color: 0xE3DAC9, clippingPlanes: [localPlane, localPlane2]} );
    var mesh = new THREE.Mesh( geometry, material);
    mesh.scale.set(0.5, 0.5, 0.5);
    var rotationY = Math.random() * 2 * Math.PI;
    var rotationZ = (0.25 * Math.random() - 0.125) * 2 * Math.PI; 
    mesh.rotation.set(0, rotationY, rotationZ);
    scene.add( mesh );
}

var saveImageButton = document.getElementById("save-image-btn");
function render() {
    renderer.render( scene, camera );
    var imgData = renderer.domElement.toDataURL('image/png');
    saveImageButton.href = imgData;
}

function refresh(){
    scene.remove(scene.children[2]); 
    render();
    buildObject();
    render();
}
