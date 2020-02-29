# perlin-fp

A fluent functional 3-dimensional Perlin noise generator based on [p5.js Perlin noise implementation](https://github.com/processing/p5.js/blob/1.0.0/src/math/noise.js)

---
## Install

```bash
npm i -S perlin-fp

# with yarn
# yarn add perlin-fp
```

## Examples

### Basic (random seed)

```js
const perlinNoise = require('perlin-fp');
const { getNoiseByCoordinate } = perlinNoise();

const x = 0;
const y = 0;
const z = 0;

getNoiseByCoordinate(x, y, z);
// -> 0.5324108156492002
```

### With all options

```js
const perlinNoise = require('perlin-fp');
const { getNoiseByCoordinate } = perlinNoise()
  .setSeed(1)
  .setOctaves(4)
  .setAmpFallOff(0.5);

const x = 0;
const y = 0;
const z = 0;

console.log(getNoiseByCoordinate(x, y, z));
// -> 0.22167705494211987
```

