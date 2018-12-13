const getRandomValue = (min = 0, max = 1) => {
  // TODO: Complete this function to allow the test to pass
        return new Promise((resolve,reject) => {
            const randomInt = Math.floor(Math.random() * (max - min + 1) + min);
            resolve(randomInt);
        });
};

describe('getRandomValue', () => {
  it('returns a promise of a random integer', () => {
    getRandomValue().then(value => assert.isNumber(value));
  });
});

describe('getFourRandomValues', () => {
  const getFourRandomValues = (min, max) => {
    // TODO: Complete this function to allow the test to pass
        let promises = [];
        for (let i = 0; i < 4; i++){
            promises.push(getRandomValue(min,max));
        }
        return Promise.all(promises);
  };

  it('returns an array of four integers, generated by getRandomValue()', () => {
    getFourRandomValues().then(values => assert.lengthOf(values, 4));
  });
});