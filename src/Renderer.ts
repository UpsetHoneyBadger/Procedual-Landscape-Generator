import { Scene, PerspectiveCamera, WebGLRenderer, PlaneGeometry, MeshBasicMaterial, Mesh, Vertex } from 'three';

class Renderer {
  static scene: Scene = new Scene();
  static camera: PerspectiveCamera = new PerspectiveCamera(45, 800 / 600, 1, 10000);
  static renderer = new WebGLRenderer();

  static initScene(): void {
    this.renderer.setSize(800, 600);
    document.body.appendChild(this.renderer.domElement);
    this.render();
  }
  static render(): void {
    this.renderer.render(this.scene, this.camera);
  }
  static addLandscapeToScene(noiseMap: number[][]): void {
    const width: number = noiseMap[0].length;
    const height: number = noiseMap.length;
    const geometry = new PlaneGeometry(20, 20, width - 1, height - 1);
    for (let index = 0, y = 0; y < height; y++) {
      for (let x = 0; x < width; x++, index++) {
        geometry.vertices[index].z = noiseMap[y][x] * 0.5;
      }
    }

    const material = new MeshBasicMaterial({ color: 0xff0000, wireframe: true, transparent: true });
    const plane = new Mesh(geometry, material);
    plane.translateZ(-5);
    // plane.translateX(-1)
    plane.rotateX(90);
    this.scene.add(plane);
  }
}

export default Renderer;
