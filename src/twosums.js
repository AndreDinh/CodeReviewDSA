function twoSum(nums, target) {
    let map = {};
    for (let i = 0; i < nums.length; i++) {
        const complement = target - nums[i];
        // Check if the complement of the current number exists in the map.
        // If it does, return an array containing the index of the complement 
        if (map[complement] !== undefined) {
            return [map[complement], i];
        }
        // If the complement is not found, store the current number with its index in the map.
        // This is for future reference, in case we find a complement of this number.
        map[nums[i]] = i;
    }

    // Return an empty array if no two numbers sum up to the target.
    return [];
}


const arrayOfNumbers = [1, 2, 3, 4, 10]

console.log(twoSum(arrayOfNumbers, 6))


