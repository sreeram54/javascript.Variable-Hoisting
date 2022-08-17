function hoist() {
    a = 20;
    var b = 100;
  }
  
  hoist();
  
  console.log(a); 
  /* 
  Accessible as a global variable outside hoist() function
  Output: 20
  */
  
  console.log(b); 
  /*
  Since it was declared, it is confined to the hoist() function scope.
  We can't print it out outside the confines of the hoist() function.
  Output: ReferenceError: b is not defined
  */


  var hoist;

console.log(hoist); // Output: undefined
hoist = 'The variable has been hoisted.';