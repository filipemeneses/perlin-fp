const makeMatrix = require('./makeMatrix');

const PERLIN_YWRAPB = 4;
const PERLIN_YWRAP = 1 << PERLIN_YWRAPB;
const PERLIN_ZWRAPB = 8;
const PERLIN_ZWRAP = 1 << PERLIN_ZWRAPB;
const PERLIN_SIZE = 4095;
const scaledCosine = (i) => 0.5 * (1.0 - Math.cos(i * Math.PI));

module.exports = ({
  matrix = makeMatrix(),
  octaves = 4,
  ampFalloff = 0.5,
}, ax, ay = 0, az = 0) => {
  let x = ax;
  let y = ay;
  let z = az;

  if (x < 0) {
    x = -x;
  }
  if (y < 0) {
    y = -y;
  }
  if (z < 0) {
    z = -z;
  }

  let xi = Math.floor(x);
  let yi = Math.floor(y);
  let zi = Math.floor(z);
  let xf = x - xi;
  let yf = y - yi;
  let zf = z - zi;
  let rxf;
  let ryf;

  let r = 0;
  let ampl = 0.5;

  let n1;
  let n2;
  let n3;

  for (let o = 0; o < octaves; o += 1) {
    let oc = xi + (yi << PERLIN_YWRAPB) + (zi << PERLIN_ZWRAPB);

    rxf = scaledCosine(xf);
    ryf = scaledCosine(yf);

    n1 = matrix[oc & PERLIN_SIZE];
    n1 += rxf * (matrix[(oc + 1) & PERLIN_SIZE] - n1);
    n2 = matrix[(oc + PERLIN_YWRAP) & PERLIN_SIZE];
    n2 += rxf * (matrix[(oc + PERLIN_YWRAP + 1) & PERLIN_SIZE] - n2);
    n1 += ryf * (n2 - n1);

    oc += PERLIN_ZWRAP;
    n2 = matrix[oc & PERLIN_SIZE];
    n2 += rxf * (matrix[(oc + 1) & PERLIN_SIZE] - n2);
    n3 = matrix[(oc + PERLIN_YWRAP) & PERLIN_SIZE];
    n3 += rxf * (matrix[(oc + PERLIN_YWRAP + 1) & PERLIN_SIZE] - n3);
    n2 += ryf * (n3 - n2);

    n1 += scaledCosine(zf) * (n2 - n1);

    r += n1 * ampl;
    ampl *= ampFalloff;
    xi <<= 1;
    xf *= 2;
    yi <<= 1;
    yf *= 2;
    zi <<= 1;
    zf *= 2;

    if (xf >= 1.0) {
      xi += 1;
      xf -= 1;
    }
    if (yf >= 1.0) {
      yi += 1;
      yf -= 1;
    }
    if (zf >= 1.0) {
      zi += 1;
      zf -= 1;
    }
  }
  return r;
};
