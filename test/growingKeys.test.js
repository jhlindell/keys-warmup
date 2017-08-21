const chai = require('chai');
const assert = chai.assert;
const growingKeys = require('../growingKeys').growingKeys;

describe("Growing Keys", function(){
  it('should return the proper number of keys in an object', function() {
    assert.equal(growingKeys("test", 1), {test: true});
  });

  it('should return an empty object if the number passed in is zero', function(){
    assert.equal(growingKeys("test", 0), {});
  });

  it('should return an error if the key passed in is not a string', function(){
    assert.equal(growingKeys(4,2), "key must be a string");
  })
});
