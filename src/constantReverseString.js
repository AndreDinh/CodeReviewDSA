function constantReverseString(str) {
    // Convert the string to an array
    // strings are immutable so you can't change it you have to create a new object
    let strArray = str.split('');
    
    let left = 0;
    let right = strArray.length - 1;

    while (left < right) {
        // Temporary variable to hold one character during the swap
        let temp = strArray[left];

        // Swap the characters
        strArray[left] = strArray[right];
        strArray[right] = temp;

        // Move the pointers
        left++;
        right--;
    }

    // Convert the array back to a string
    return strArray.join('');
}

let stringReverse = 'hello';

console.log(constantReverseString(stringReverse));
