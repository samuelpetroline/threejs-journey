const THREE = require('three')

const SIZES = {
  WIDTH: 800,
  HEIGHT: 600,
}

const scene = new THREE.Scene()

// Cubo
const geometry = new THREE.BoxGeometry(1, 1, 1)
const material = new THREE.MeshBasicMaterial({
  color: 'red',
})
const mesh = new THREE.Mesh(geometry, material)

scene.add(mesh)

// Camera
const camera = new THREE.PerspectiveCamera(75, SIZES.WIDTH / SIZES.HEIGHT)
camera.position.z = 3
camera.position.x = 1
camera.position.y = 1

scene.add(camera)

// Renderer
const renderer = new THREE.WebGLRenderer({
  canvas: document.querySelector('.webgl'),
})

renderer.setSize(SIZES.WIDTH, SIZES.HEIGHT)

renderer.render(scene, camera)
