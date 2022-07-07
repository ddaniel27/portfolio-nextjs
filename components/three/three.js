import * as THREE from 'three'
import vertexShader from './shaders/vertex.glsl'
import fragmentShader from './shaders/fragment.glsl'

let camera, renderer, scene, refElement
let material

export default function ThreeController(refEl){
    refElement = refEl
    init()
    animate()
}

function init(){
    //Scene
    scene = new THREE.Scene()
    scene.background = new THREE.Color(0x000000)

    //Camera
    camera = new THREE.PerspectiveCamera(
        45,
        window.innerWidth / window.innerHeight,
        0.1,
        250
    )
    camera.position.set(0, 0, 0.6)
    scene.add(camera)

    //Renderer
    renderer = new THREE.WebGLRenderer({ antialias: true })
    renderer.setSize(
        window.innerWidth,
        window.innerHeight
    )
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))
    renderer.render( scene, camera )
    refElement.appendChild( renderer.domElement )

    //Plane
    const geometry = new THREE.PlaneGeometry(1, 1, 1, 1)
    material = new THREE.ShaderMaterial({
        vertexShader,
        fragmentShader,
        side: THREE.SingleSide,
        uniforms:{
            time: { value: 0.0 },
        }
    })


    const plane = new THREE.Mesh(geometry, material)
    scene.add(plane)

    
    //Listeners
    window.addEventListener('resize', onWindowResize)
    
}


function onWindowResize(){
    camera.aspect = window.innerWidth / window.innerHeight
    camera.updateProjectionMatrix()

    renderer.setSize(
        window.innerWidth,
        window.innerHeight
    )
}

const clock = new THREE.Clock()

function animate(){
    const elapsedTime = clock.getElapsedTime()
    material.uniforms.time.value = elapsedTime / 2
    renderer.render( scene, camera )
    window.requestAnimationFrame(animate)
}