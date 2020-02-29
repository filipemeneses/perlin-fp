module.exports = () => {
  const m = 4294967296;
  const a = 1664525;
  const c = 1013904223;

  let localSeed;
  let z;

  return {
    setSeed(val) {
      const randomNumber = (val == null ? Math.random() * m : val) >>> 0;
      z = randomNumber;
      localSeed = randomNumber;
    },
    getSeed() {
      return localSeed;
    },
    rand() {
      z = (a * z + c) % m;
      return z / m;
    },
  };
};
