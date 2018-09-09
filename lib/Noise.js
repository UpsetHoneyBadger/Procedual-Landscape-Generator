"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const SimplexNoise = require("simplex-noise");
exports.default = (mapWidth, mapHeight, scale) => {
    const simplexNoiseGenerator = new SimplexNoise(Math.random);
    if (scale <= 0) {
        scale = 0.0001;
    }
    const noiseMap = [];
    for (let y = 0; y < mapHeight; y++) {
        noiseMap[y] = [];
    }
    for (let y = 0; y < mapHeight; y++) {
        for (let x = 0; x < mapWidth; x++) {
            const sampleX = x / scale;
            const sampleY = y / scale;
            const perlinValue = simplexNoiseGenerator.noise2D(sampleX, sampleY);
            noiseMap[y][x] = perlinValue;
        }
    }
    return noiseMap;
};
