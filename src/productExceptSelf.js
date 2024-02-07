// no nest for loop or divsion

function productExceptSelf(nums) {
    let fowardArray = [];
    let start = 1;
    // Forward pass to calculate the product of elements to the left of each position
    for (let i = 0; i < nums.length; i++) {
        fowardArray.push(start); // Store the product up to the previous element
        start = start * nums[i]; // Update the product for the next iteration
    }

    let resverse = []; // Intended as 'reverse', stores the final result
    let start2 = 1;
    // Reverse pass to calculate the product of elements to the right of each position
    for (let i = nums.length - 1; i >= 0; i--) {
        resverse.unshift(start2 * fowardArray[i]); // Calculate the product except self
        start2 = start2 * nums[i]; // Update the product for the next iteration
    }

    return resverse; // Return the final result
}



const nums = [1, 2, 3, 4]
console.log(productExceptSelf(nums));


// answer this question 
// Can you solve the problem in O(1) extra space complexity? 
//(The output array does not count as extra space for space complexity analysis.)
function productExceptSelfFaster(nums) {
    let res = []
    let start = 1;
    for (let i = 0; i < nums.length; i++) {
        res.push(start);
        start = start * nums[i];
    }

    let start2 = 1;
    // start at the end of the array then mutiply current array that was in the loop on top
    for (let i = nums.length - 1; i >= 0; i--) {
        res[i] = start2 * res[i]
        start2 = start2 * nums[i]
    }

    return res;
}


const numsButFaster = [1, 2, 3, 4]
console.log(productExceptSelfFaster(numsButFaster));