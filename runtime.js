const perf = require('execution-time')();


function doublerAppend(nums){ // O(n)

    let new_nums = [];

    for (let i=0; i<nums.length; i++){
        let num = nums[i] * 2;
        new_nums.push(num);
    }
    console.log(new_nums)
}


function doublerInsert(nums){ // O(n^2)
    
    let new_nums = [];
    
    for (let i=0; i<nums.length; i++){
        let num = nums[i] * 2;
        new_nums.unshift(num);
    }
    
    console.log(new_nums)
}


function getSizedArray(size){
    let array = [];
    for (let i=0; i<size; i++){
        array.push(i);
    }
    return array
}


const tinyArray = getSizedArray(10);
const smallArray = getSizedArray(100);
const mediumArray = getSizedArray(1000);
const largeArray = getSizedArray(10000);
const extraLargeArray = getSizedArray(100000);



// How long does it take to double every number in a given 
// array? = O(n)

// Try it with first function
perf.start();     // Starts timer
doublerAppend(smallArray); 
let resultsAppend = perf.stop();  // Stops timer and save time results


// Try it with second function
perf.start(); 
doublerInsert(smallArray);
let resultsInsert = perf.stop();


console.log('Results for the extraLargeArray');
console.log("secondFunction", resultsInsert.preciseWords);
console.log("firstFunction", resultsAppend.preciseWords);


/*
2.  RUNTIME FOR doublerAppend FUNCTION
    Values && Runtime
    10 : 6.6ms
    100 : 8.1ms
    1000 : 8.9ms
    10000 : 8.26ms
    100000 : 11.897ms

    RUNTIME FOR doublerInsert FUNCTION
    Values && Runtime
    10 : 313.1μs
    100 : 1.1ms
    1000 : 1.4ms
    10000 : 10.58ms
    100000 : 1.029s

3.  PATTERN ANALYSIS:
    The doublerAppend function increases by about a single ms 
    for every 0 added to the GetSizedArray() function. The scaling factor is very 
    small and time needed to complete this function is O(n) - due to the 
    function only adding the new array to the end of the existing array.

    The doublerInsert function increases much more drastically.
    Initially running very quickly for small array sizes. However, once the 
    array sizes increase the time also increases due to the function needing to move every 
    item in the array to the right one index position. This shift of the array over and over 
    causes the time complexity of this function to be O(n^2).

4.  The doublerAppend function scales much better than the doublerInsert function. The doublerAppend
    time complexity of O(n) is better than doublerInsert's time complexity of O(n^2). 

5.  The doublerInsert function is so slow as its size grows larger because for every value that
    is getting inserted to the beginning of the array, the function pushes all existing values
    to the right 1 index position. It does this same process for every single element being
    added to the array. This causes the function to dramatically increase in time as the value
    being passed in grows larger because the array values being moved to the right 1 index position
    is only getting bigger and taking more time.


*/