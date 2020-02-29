const makeMatrix = require('./makeMatrix');
const getNoiseByCoordinate = require('./getNoiseByCoordinate');

module.exports = () => {
  let matrix;
  let ampFalloff = 0.5;
  let octaves = 4;

  return {
    setSeed(seed) {
      matrix = makeMatrix(seed);
      return this;
    },
    setAmpFallOff(value) {
      ampFalloff = value;
      return this;
    },
    setOctaves(value) {
      octaves = value;
      return this;
    },
    getNoiseByCoordinate(x, y, z) {
      return getNoiseByCoordinate({
        matrix,
        ampFalloff,
        octaves,
      }, x, y, z);
    },
  };
};
