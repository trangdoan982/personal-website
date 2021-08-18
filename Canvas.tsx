// import React, { useEffect } from 'react'
// import { render } from 'react-dom'
// // import './../styles/canvas'
// import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls'
// import * as THREE from 'three'
// export default function Canvas() {
//     useEffect(() => {
//         const scene = new THREE.Scene()
//         const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000)

//         const renderer = new THREE.WebGLRenderer({
//             canvas: document.querySelector('#bg'),
//         });
//         renderer.setPixelRatio(window.devicePixelRatio);
//         renderer.setSize(window.innerWidth, window.innerHeight)
//         camera.position.setZ(30)
//         renderer.render(scene, camera)
//         console.log("the scene is rendered");

//         const geometry = new THREE.TorusGeometry(10, 3, 16, 100)
//         const material = new THREE.MeshStandardMaterial({ color: 0xff6347 })
//         const torus = new THREE.Mesh(geometry, material)

//         scene.add(torus)

//         const pointLight = new THREE.PointLight(0xffffff)
//         pointLight.position.set(5, 5, 5)
//         const ambientLight = new THREE.AmbientLight(0xffffff)
//         scene.add(pointLight, ambientLight)

//         const lightHelper = new THREE.PointLightHelper(pointLight)
//         const gridHeler = new THREE.GridHelper()
//         scene.add(lightHelper, gridHeler)

//         const axesHelper = new THREE.AxesHelper(5);
//         scene.add(axesHelper);

//         const controls = new OrbitControls(camera, renderer.domElement)

//         const addStar = () => {
//             const geometry = new THREE.SphereGeometry(0.25)
//             const material = new THREE.MeshStandardMaterial({ color: 0xfffff })
//             const star = new THREE.Mesh(geometry, material)

//             const [x, y, z] = Array(3).fill(0).map(() => THREE.MathUtils.randFloatSpread(100))
//             console.log([x, y, z]);

//             star.position.set(x, y, z)
//             scene.add(star)

//         }
//         Array(200).fill(0).forEach(addStar)
//         function animate() {
//             requestAnimationFrame(animate)
//             torus.rotation.x += 0.01
//             torus.rotation.y += 0.005
//             torus.rotation.z += 0.01

//             controls.update()
//             renderer.render(scene, camera)
//         }

//         animate()

//     })


//     return <canvas id="bg">
//     </canvas>
// }



// function Box(props: JSX.IntrinsicElements['mesh']) {
//     const mesh = useRef<THREE.Mesh>(null!)
//     const [hovered, setHover] = useState(false)
//     const [active, setActive] = useState(false)
//     useFrame((state, delta) => (mesh.current.rotation.x += 0.01))
//     return (
//         <mesh
//             {...props}
//             ref={mesh}
//             scale={active ? 1.5 : 1}
//             onClick={(event) => setActive(!active)}
//             onPointerOver={(event) => setHover(true)}
//             onPointerOut={(event) => setHover(false)}
//         >
//             <boxGeometry args={[1, 1, 1]} />
//             <meshStandardMaterial color={hovered ? 'hotpink' : 'orange'} />
//         </mesh>
//     )
// }