import './__mocks__';

const emptyFn = () => {};
const AnimatedValue = function() {
  this.setValue = emptyFn;
  this.setOffset = emptyFn;
};

const AnimatedValueXY = function() {};
AnimatedValueXY.prototype.x = new AnimatedValue();
AnimatedValueXY.prototype.y = new AnimatedValue();

console.error = jest.genMockFunction();

jest.resetModules();
