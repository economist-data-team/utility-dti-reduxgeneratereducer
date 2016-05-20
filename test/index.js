import 'babel-polyfill';
import generateReducer from '../src';
import chai from 'chai';
chai.should();

describe('generateReducer', () => {
  it('should generate a reducer function', () => {
    const reducer = generateReducer();
    reducer.should.be.a('function');
  });

  it('should generate a reducer that alters state when correctly triggered', () => {
    const reducer = generateReducer('foo', 'BAR');
    reducer('foo', { type: 'BAR', data: 'baz' }).should.equal('baz');
    reducer('baz', { type: 'BOO', data: 'boo' }).should.equal('baz');
    reducer(undefined, { type: 'BOO', data: 'boo' }).should.equal('foo'); // eslint-disable-line no-undefined
  });
});
