const makeLinearCongruentialGenerator = require('./makeLinearCongruentialGenerator');

const PERLIN_SIZE = 4095;

module.exports = (seed) => {
  const generator = makeLinearCongruentialGenerator();
  const perlin = new Float64Array(PERLIN_SIZE + 1);

  generator.setSeed(seed);

  for (let i = 0; i < PERLIN_SIZE + 1; i += 1) {
    perlin[i] = generator.rand();
  }

  return perlin;
};
