import GenerateNoiseMap from './Noise';
import Renderer from './Renderer';

const mapWidth: number = 100;
const mapHeight: number = 100;

function DrawNoiseMap(noiseMap: number[][]): void {
  const width: number = noiseMap[0].length;
  const height: number = noiseMap.length;
  const img: ImageData = new ImageData(width, height);
  for (let y = 0; y < height; y++) {
    for (let x = 0; x < width; x++) {
      const index: number = (y * width + x) * 4;
      img.data[index] = Math.round(noiseMap[y][x] * 255);
      img.data[index + 1] = Math.round(noiseMap[y][x] * 255);
      img.data[index + 2] = Math.round(noiseMap[y][x] * 255);
      img.data[index + 3] = 255;
    }
  }
  const canvas = document.getElementById('LandscapeCanvas') as HTMLCanvasElement;
  canvas.width = width;
  canvas.height = height;
  const ctx = canvas.getContext('2d') as CanvasRenderingContext2D;
  ctx.putImageData(img, 0, 0);
}
document.addEventListener('DOMContentLoaded', () => {
  Renderer.initScene();
  Renderer.addLandscapeToScene(GenerateNoiseMap(mapWidth, mapHeight, 50));
  Renderer.render();
  // DrawNoiseMap(GenerateNoiseMap(mapWidth, mapHeight, 50));
});
