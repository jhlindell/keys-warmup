//Write a function named growingKeys that takes a number and a string and returns an object where the keys are that string, repeated one more each time

//Example:

//If you pass 2,“d” it should return {“d”: true, “dd”: true}

//Use a testing framework of your choice to write tests that cover at least one base case and two edge cases.

function growingKeys(key, number){
  if(typeof key !== 'string'){
    return "key must be a string";
  }
  let returnObject = {};
  for(let i = 0; i < number; i++){
    let objKey = '';
    for(let j = 0; j<= i; j++){
      objKey += key;
    }
    returnObject[key] = true;
  }
  return returnObject;
}

module.exports = {
  growingKeys
};
