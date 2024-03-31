// Define a function called createArray which takes two parameters 'start' and 'end'
function createArray(start, end) {
    // Initialize an empty array to store the generated numbers
    let result = [];
    
    // Check if 'start' is less than or equal to 'end'
    if (start <= end) {
        // If true, generate numbers from 'start' to 'end' inclusively
        for (let i = start; i <= end; i++) {
            // Push each number into the 'result' array
            result.push(i);
        }
    } else {
        // If 'start' is greater than 'end', generate numbers in reverse order
        for (let i = start; i >= end; i--) {
            // Push each number into the 'result' array
            result.push(i);
        }
    }
    
    // Return the generated array
    return result;
}

// Test the createArray function with different inputs
// Output the result of generating an array from 4 to 7
console.log(createArray(4, 7)); 

// Output the result of generating an array from -4 to 7
console.log(createArray(-4, 7));
