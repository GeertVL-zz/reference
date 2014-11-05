// Show protime360 approach of building the client-side.
// patterns used:
// - module pattern
// - revealing module pattern

var protime360 = {};
 
protime360.public_function = function() {
  console.log('public function');
}
 
// protime360.testModule = name of your module

// pubfun = declare aliases of your required modules.
protime360.testModule = (function(pubFun) { 
  // container of all public (exposed) methods.
  var pub = {};  
  // container of all private methods in this module.
  var priv = {}; 
 
  // initialize() is the constructor or igniter of your module.
  priv.initialize = function() { 
    console.log('initialize');
    testPublicMethod();
  }
 
  // example of a public method.
  pub.testPublicMethod = function() { 
    console.log('public method called');
    testPrivateMethod();
  }
 
  // example of a private method
  priv.testPrivateMethod = function() { 
    console.log('private method called');
  }

  // will be called on document ready no external usage needed.
  priv.initialize(); 
 
  // better then return {} so you do not have to type the functionname three times.
  return pub; 
  // define the (required) modules you want to use in your module.
})(protime360.public_function); 
 
console.log('end');
// example of calling a public function of the testmodule.
protime360.testModule.testPublicMethod();
