var scene = new THREE.Scene();
var camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 );

var renderer = new THREE.WebGLRenderer({antialias: true});
renderer.setSize( window.innerWidth, window.innerHeight );
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

var material = new THREE.MeshLambertMaterial( { color: 0xE3DAC9 } );
var positions = getPositions();
var meshes = [];

var loader = new THREE.STLLoader();
loader.load( './models/AMNH-FI-101649_M21284-40437__thorax.stl', function ( loadedGeometry ) {
    for (var i = 0; i < 18; i++){
        var mesh = new THREE.Mesh( loadedGeometry, material);
        mesh.scale.set(0.3, 0.3, 0.3);
        var rotation = Math.random() * 360;
        mesh.rotation.set(0, rotation, 0);
        var pos = positions[i];
        mesh.position.set(pos[0], pos[1], pos[2]);
        meshes.push(mesh);
        scene.add( mesh );
    }
});

var getImageData = true;
var doSplit = false;
function animate() {
    requestAnimationFrame( animate );
    renderer.render( scene, camera );
    if (meshes.length > 0 && getImageData){
        imgData = renderer.domElement.toDataURL();
        console.log(imgData);
        getImageData = false;
        doSplit = true;
    }
}
animate();

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