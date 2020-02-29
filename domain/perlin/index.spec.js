const perlinNoise = require('./index');

describe('getNoiseByCoordinate', () => {
  it('should get Perlin noise by coordinate', () => {
    const { getNoiseByCoordinate } = perlinNoise()
      .setSeed(1)
      .setOctaves(4)
      .setAmpFallOff(0.5);

    expect(getNoiseByCoordinate(0, 0, 0)).toEqual(0.22167705494211987);
    expect(getNoiseByCoordinate(0, 0, 1)).toEqual(0.4392317433957942);
    expect(getNoiseByCoordinate(0, 0, 2)).toEqual(0.7085849543218501);
    expect(getNoiseByCoordinate(1, 0, 0)).toEqual(0.3180446257465519);
    expect(getNoiseByCoordinate(1, 0, 1)).toEqual(0.4000341524952091);
    expect(getNoiseByCoordinate(1, 0, 2)).toEqual(0.3880301942699589);
    expect(getNoiseByCoordinate(2, 0, 0)).toEqual(0.32062402117298916);
    expect(getNoiseByCoordinate(2, 0, 1)).toEqual(0.4330950056319125);
    expect(getNoiseByCoordinate(2, 0, 2)).toEqual(0.4202214156393893);
    expect(getNoiseByCoordinate(0, 1, 0)).toEqual(0.6483961020712741);
    expect(getNoiseByCoordinate(0, 1, 1)).toEqual(0.4652759705786593);
    expect(getNoiseByCoordinate(0, 1, 2)).toEqual(0.5154423986678012);
    expect(getNoiseByCoordinate(1, 1, 0)).toEqual(0.41691366635495797);
    expect(getNoiseByCoordinate(1, 1, 1)).toEqual(0.5496672769659199);
    expect(getNoiseByCoordinate(1, 1, 2)).toEqual(0.6947201272123493);
    expect(getNoiseByCoordinate(2, 1, 0)).toEqual(0.5780389209394343);
    expect(getNoiseByCoordinate(2, 1, 1)).toEqual(0.3408146997098811);
    expect(getNoiseByCoordinate(2, 1, 2)).toEqual(0.25934331613825634);
    expect(getNoiseByCoordinate(0, 2, 0)).toEqual(0.44744617241667584);
    expect(getNoiseByCoordinate(0, 2, 1)).toEqual(0.687015478790272);
    expect(getNoiseByCoordinate(0, 2, 2)).toEqual(0.2632343818549998);
    expect(getNoiseByCoordinate(1, 2, 0)).toEqual(0.5465624263160862);
    expect(getNoiseByCoordinate(1, 2, 1)).toEqual(0.2912373473518528);
    expect(getNoiseByCoordinate(1, 2, 2)).toEqual(0.5763792326324619);
    expect(getNoiseByCoordinate(2, 2, 0)).toEqual(0.5493804936413653);
    expect(getNoiseByCoordinate(2, 2, 1)).toEqual(0.47430188703583553);
    expect(getNoiseByCoordinate(2, 2, 2)).toEqual(0.7579485301976092);
  });
});
