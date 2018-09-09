import * as SimplexNoise from 'simplex-noise';

export default (mapWidth: number, mapHeight: number, scale: number): number[][] => {
  const simplexNoiseGenerator: SimplexNoise = new SimplexNoise(Math.random);
  if (scale <= 0) {
    scale = 0.0001;
  }
  const noiseMap: number[][] = [];
  for (let y = 0; y < mapHeight; y++) {
    noiseMap[y] = [];
  }
  for (let y = 0; y < mapHeight; y++) {
    for (let x = 0; x < mapWidth; x++) {
      const sampleX: number = x / scale;
      const sampleY: number = y / scale;
      const perlinValue = simplexNoiseGenerator.noise2D(sampleX, sampleY);
      noiseMap[y][x] = perlinValue;
    }
  }
  return noiseMap;
};
