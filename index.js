// num:1 temperature in Celsius js start

function celsiusToFahrenheit(celsius) {
    let temp ;
    temp = (celsius * (9/5)) + 32;
    return temp;
  }
  
  console.log(celsiusToFahrenheit(0)); // 32
  console.log(celsiusToFahrenheit(25)); // 77


  // num:2 the number to check js start

  function isEven(num) {
    return !(num % 2);
  }
  
  console.log(isEven(4)); // true
  console.log(isEven(7)); // false


  //num:3 the numbers to sum js start
  
  function sum(a, b) {
    return (a + b);
  }
  
  console.log(sum(3, 4)); // 7
  console.log(sum(10, 20)); // 30
  

    //num:4 the smallest number in an array start

    function findSmallestNum(arr) {
        let mini = arr[0];
        for (let i = 1; i < arr.length; i++){
            if (arr[i] < mini){
                mini = arr[i];
            }
        }
        return mini
      }
      
      console.log(findSmallestNum([3, 5, 1, 9])); // 1
      console.log(findSmallestNum([-1, -5, 0, 10])); // -5

        // num: 5 the number of vowels in a string start

      function countVowels(str) {
        let vowels = 'aeiouAEIOU';
        let sum = 0;

       for (let i = 0; i < str.length; i++) {
        if (vowels.indexOf(str[i]) !== -1){
            sum++;
        }
        
       }
       return sum;
      }
      
      console.log(countVowels("hello world")); // 3
      console.log(countVowels("Javascript")); // 3
      
      // num: 6 first element of an array

      function getFirstElement(arr) {
        return arr[0];
      }
      
      console.log(getFirstElement([1, 2, 3])); // 1
      console.log(getFirstElement(["a", "b", "c"])); // "a"
      
      // num: 7 array is empty

      function isArrayEmpty(arr) {
        return arr.length == 0;
      }
      
      console.log(isArrayEmpty([])); // true
      console.log(isArrayEmpty([1, 2, 3])); // false
      

      //num: 8 the factorial of a number

      function factorialize(num) {
        if (num === 0 || num === 1) return 1;
        
        let sum2  = 1;

        for( let i = 2; i <= num; i++){
          sum2 *= i;
        }
        return sum2;
      }
      
      console.log(factorialize(5)); // 120
      console.log(factorialize(7)); // 5040
      
      //num: 9 reverse a string.

      function reverseString(str) {
        return str.split('').reverse().join('');
      }
      
      console.log(reverseString("hello")); // "olleh"
      console.log(reverseString("world")); // "dlrow"
      

      // num 10: a string to lowercase

      function toLowerCase(str) {
        return str.toLowerCase();
      }
      
      console.log(toLowerCase("HELLO WORLD")); // "hello world"
      console.log(toLowerCase("JavaScript")); // "javascript"
      
      // num 11: the length of a string

      function stringLength(str) {
        return str.length;
      }
      
      console.log(stringLength("hello")); // 5
      console.log(stringLength("world")); // 5
      

      // num 12: function to merge two arrays

      function mergeArrays(arr1, arr2) {
        return arr1.concat(arr2);
      }
      
      console.log(mergeArrays([1, 2, 3], [4, 5, 6])); // [1, 2, 3, 4, 5, 6]
      console.log(mergeArrays(["a", "b"], ["c", "d"])); // ["a", "b", "c", "d"]
      

      // num 13: the last element of an array

      function getLastElement(arr) {
        return arr.at(-1);
      }
      
      console.log(getLastElement([1, 2, 3])); // 3
      console.log(getLastElement(["a", "b", "c"])); // "c"
      

      // num 14: the first character of a string

      function getFirstCharacter(str) {
        return str.at(0);
      }
      
      console.log(getFirstCharacter("hello")); // "h"
      console.log(getFirstCharacter("world")); // "w"
      

      //num 15: the sum of all elements in an arra

      function sumArray(arr) {
        let result = 0;
        for( let i =0; i< arr.length; i++){
          result += arr[i]
        }
        return result
      }
      
      console.log(sumArray([1, 2, 3, 4])); // 10
      console.log(sumArray([-1, -2, -3, -4])); // -10
      console.log(sumArray([1.5, 2.5, 3.5])); // 7.5
      