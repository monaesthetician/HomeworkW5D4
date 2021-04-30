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
    
    
    let finalAnswer = truthCheck([{"user": "Tinky-Winky", "sex": "male"}, {"user": "Dipsy", "sex": "male"}, {"user": "Laa-Laa", "sex": "female"}, {"user": "Po", "sex": "female"}], "sex");
    console.log(finalAnswer);
    