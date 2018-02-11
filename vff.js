var scene = new THREE.Scene();
var camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 );


var renderer = new THREE.WebGLRenderer();
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

var mesh;

var loader = new THREE.STLLoader();
loader.load( './models/AMNH-FI-101479_M21282-40430__cephalon.stl', function ( geometry ) {
    var material = new THREE.MeshLambertMaterial( { color: 0xE3DAC9 } );
    mesh = new THREE.Mesh( geometry, material);
    mesh.scale.set(0.3, 0.3, 0.3);
    scene.add( mesh );
});

var getImageData = true;
function animate() {
    requestAnimationFrame( animate );
    renderer.render( scene, camera );
    if (mesh && getImageData){
        imgData = renderer.domElement.toDataURL();
        console.log(imgData);
        getImageData = false;
    }
}
animate();