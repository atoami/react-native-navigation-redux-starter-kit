import './__mocks__';

jest
  .mock('Button', () => {
    const RealComponent = require.requireActual('react-native-elements').Button;
    return RealComponent;
  });

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
