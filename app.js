
//   18.Intermediate Algorithm Scripting: Everything Be True
// Check if the predicate (second argument) is truthy on all elements of a collection (first argument).

// In other words, you are given an array collection of objects. The predicate pre will be an object property and you need to return true if its value is truthy. Otherwise, return false.

// In JavaScript, truthy values are values that translate to true when evaluated in a Boolean context.

// Remember, you can access object properties through either dot notation or [] notation.

function truthCheck(collection, pre) {
  // first solution
    return collection.every(function(dataPoint) {
      console.log(dataPoint[pre]);
      return dataPoint[pre];
    });
  
    // second solution
    let result = true;
    for (let i = o; i < collection.length; i +=1) {
  
      if (
        collection[i][pre] === undefined ||
        collection[i][pre] === null||
        collection[i][pre] === null||
        collection[i][pre] === 0 ||
        collection[i][pre] === ""
        ) {
          return result;
        }
       
      }
    }
    return result;
  }
  
  let finalAnswer = truthCheck([{"user": "Tinky-Winky", "sex": "male"}, {"user": "Dipsy", "sex": "male"}, {"user": "Laa-Laa", "sex": "female"}, {"user": "Po", "sex": "female"}], "sex");
  console.log(finalAnswer);
  
    
  
  //   19.Intermediate Algorithm Scripting: Arguments Optional
  // Create a function that sums two arguments together. If only one argument is provided, then return a function that expects one argument and returns the sum.
  
  // For example, addTogether(2, 3) should return 5, and addTogether(2) should return a function.
  
  // Calling this returned function with a single argument will then return the sum:
  
  // var sumTwoAnd = addTogether(2);
  
  // sumTwoAnd(3) returns 5.
  
  // If either argument isn't a valid number, return undefined.
  
  function addTogether() {
    let [arg1, arg2] = arguments;
  
    const isNum = (num) => Number.isInteger(num);
  
    if (!isNum(arg1)) {
      return undefined;
  
    }
    else if (isNum(arg1) && isNum(arg2)){
      return arg1 + arg2;
    }
    else if (!arg2) {
      return (newArg) => {
        if (ifNum(newArg)){
          return arg1 + newArg;
        }
      }
    }
  }
  
  
  
  
  
    console.log(addTogether(2,3));
  
  
  
  
  
  //   20.Intermediate Algorithm Scripting: Make a Person
  //   Fill in the object constructor with the following methods below:
    
  //   getFirstName()
  //   getLastName()
  //   getFullName()
  //   setFirstName(first)
  //   setLastName(last)
  //   setFullName(firstAndLast)
  //   Run the tests to see the expected output for each method. The methods that take an argument must accept only one argument and it has to be a string. 
  //   These methods must be the only available means of interacting with the object.
  var Person = function(firstAndLast) {
      // Only change code below this line
      this.first = firstAndLast.split(' ') [0];
      this.last = firstAndLast.split(' ') [1];
  
      this.getFirstName = function() {
        return this.first;
      };
  
      this.getLastName = function() {
        return this.last;
    };
    
     this.getFullName = function() {
      return this.first + ' ' + this.last
   };
     this.setFirstName= function(str) {
       this.first = str;
  
     };
     this.setLastName = function(str) {
       this.last = str;
  
    };
     this.setFullName = function(str){
       this.first = str.split(' ')[0];
       this.last= str.split(' ')[1];
     };
  
    var bob = new Person('Bob Ross');
    bob.getFullName();
  
    Object.defineProperties(bob, 'first', {
      enumerable: false
    });
  
    Object.defineProperties(bob, 'last', {
      enumerable: false
    });
  
    // Complete the method below and implement the others similarly
    var Person = function(firstAndLast) {
      // Only change code below this line
      this.first = firstAndLast.split(' ') [0];
      this.last = firstAndLast.split(' ') [1];
  
      this.getFirstName = function() {
        return this.first;
      };
  
      this.getLastName = function() {
        return this.last;
    };
    
     this.getFullName = function() {
      return this.first + ' ' + this.last
   };
     this.setFirstName= function(str) {
       first = str;
  
     };
     this.setLastName = function(str) {
       last = str;
  
    };
     this.setFullName = function(str){
       first = str.split(' ')[0];
       last= str.split(' ')[1];
     };
  
    var bob = new Person('Bob Ross');
    bob.getFullName();
  
    Object.defineProperties(bob, 'first', {
      enumerable: false
    });
  
    Object.defineProperties(bob, 'last', {
      enumerable: false
    });
  
  
  //   21 Intermediate Algorithm Scripting: Map the Debris
  // Return a new array that transforms the elements' average altitude into their orbital periods (in seconds).
  
  // The array will contain objects in the format {name: 'name', avgAlt: avgAlt}.
  
  // You can read about orbital periods on Wikipedia.
  
  // The values should be rounded to the nearest whole number. The body being orbited is Earth.
  
  // The radius of the earth is 6367.4447 kilometers, and the GM value of earth is 398600.4418 km3s-2
  
  function orbitalPeriod(arr) {
      var GM = 398600.4418;
      var earthRadius = 6367.4447;
  
    //  this solution using forEach function
  
      arr.forEach(function(obj) {
        var orbPeriod = Mat.round(2*Math.PI*Math.sqrt(Math.pow(earthRadius+item.+ obj.avgAlt,3)/GM));
        obj.orbitalPeriod = orbPeriod
        delete obj.avgAlt;
      });
  
  
      return arr;
  
  
  // anther solution using reduce function
       return arr.reduce(function(acc, obj) {
         var orbPeriod = Math.round(2*Math.PI*Math.sqrt(Math.pow(earthRadius+item.+ obj.avgAlt,3)/GM));
         acc.push({name: obj.name, orbitalPeriod: orbPeriod})
         return acc;
       }, []);
      
    }
    
    orbitalPeriod([{name : "sputnik", avgAlt : 35873.5553}]);
  
  
  
  //   22JavaScript Algorithms and Data Structures Projects: Palindrome Checker
  // Return true if the given string is a palindrome. Otherwise, return false.
  
  // A palindrome is a word or sentence that's spelled the same way both forward and backward, ignoring punctuation, case, and spacing.
  
  // Note: You'll need to remove all non-alphanumeric characters (punctuation, spaces and symbols) and turn everything into the same case (lower or upper case) in order to check for palindromes.
  
  // We'll pass strings with varying formats, such as "racecar", "RaceCar", and "race CAR" among others.
  
  // We'll also pass strings with special symbols, such as "2A3*3a2", "2A3 3a2", and "2_A3*3#A2".
  
  function palindrome(str) {
  
    let polishedString = str.replace(/\W |_+/g, "").toLowerCase();
  
    let reversrdString = polishedString.split("").reverse().join("");
    
    console.log(reversedString, polishedString)
  
     return(polishedString === reversrdString)  ? false : true;
  }
   
    
    let result = palindrome("A man***, a p_lan, a canall Panama");
    console.log(result);
    
    
    
    palindrome("eye");