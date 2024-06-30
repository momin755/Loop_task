// Construct a for loop that sorts the array [2, 3, 13, 18, -5, 38, -10, 11, 0, 104] into two new arrays:

// Define an empty evens array to hold the even numbers and an odds array for the odd numbers.
var newArray = [2, 3, 13, 18, -5, 38, -10, 11, 0, 104];
console.log(newArray.length)
var even =[];
var odd = [];
for(var i = 0; i < newArray.length; i++){
    var arrs = newArray[i];
    if(arrs % 2 === 0){
        console.log("The Even Number is: " + arrs)
    }
    if(arrs % 2 !== 0){
        console.log("The Odd Number is: " + arrs)
    }
}

