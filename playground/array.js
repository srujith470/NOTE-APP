function largestOfFour(arr) {
  return arr;
}

function largestOfFour(arr) {
   // Step 1. Create an array that will host the result of the 4 sub-arrays
   var largestNumber = [0,0,0,0];
 
   // Step 2. Create the first FOR loop that will iterate through the arrays
   for(var arrayIndex = 0; arrayIndex < arr.length; arrayIndex++) {
   /* The starting point, index 0, corresponds to the first array */
 
    // Step 3. Create the second FOR loop that will iterate through the sub-arrays
    for(var subArrayIndex = 0; subArrayIndex < arr[arrayIndex].length; subArrayIndex++) {
    /* The starting point, index 0, corresponds to the first sub-array */
       
       if(arr[arrayIndex][subArrayIndex] > largestNumber[arrayIndex]) {
          
          largestNumber[arrayIndex] = arr[arrayIndex][subArrayIndex];
        }
      }
   }
   // Step 4. Return the largest numbers of each sub-arrays
   return console.log (largestNumber); 
  }
  
  largestOfFour([[4, 5, 1, 3], [13, 27, 18, 26], [32, 35, 37, 39], [1000, 1001, 857, 1]]);
  
  
  function largestOfFour1(mainArray) {

    return mainArray.map(function (subArray){
      return subArray.reduce(function (previousLargestNumber, currentLargestNumber) {
        return (currentLargestNumber > previousLargestNumber) ? currentLargestNumber : previousLargestNumber;
      }, 0);
    }, 
    console.log(mainArray)

    );

  }
  largestOfFour1([[4, 5, 1, 3], [153, 27, 18, 26], [32, 35, 378, 39], [10050, 1001, 857, 1]]);



  function largestOfFour2(mainArray) {
    return mainArray.map(function(subArray) {
      return Math.max.apply(null, subArray);
    });
  }
  largestOfFour2([[4, 5, 1, 3], [13, 27, 18, 26], [32, 35, 37, 39], [1000, 1001, 857, 1]]);
  console.log()
  