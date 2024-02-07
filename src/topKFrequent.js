function topKFrequent(numbers, k) {
    const freqMap = {};
    const result = [];

    // Count the frequency of each number
    for (const num of numbers) {
        if (!freqMap[num]) {
            freqMap[num] = 1;
        } else {
            freqMap[num]++;
        }

        // If the frequency reaches k, add to the result array
        if (freqMap[num] === k) {
            result.push(num);
        }
    }

    return result;
}

const nums = [1, 1, 1, 2, 2, 3];
const k = 2;
console.log(topKFrequent(nums, k));



// a little simply if you want look at Object.keys rather than createing your own array
function topKFrequentSimplfy(numbers, k) {
    const freqMap = {};

    // Count the frequency of each number
    for (const num of numbers) {
        freqMap[num] = (freqMap[num] || 0) + 1;
    }

    // Filter keys whose frequency is exactly k
    const result = Object.keys(freqMap).filter(num => freqMap[num] === k);

    return result;
}

const numsSimple = [1, 1, 1, 2, 2, 3, 2, 2, 2, 2];
const kSimple = 2;
console.log(topKFrequentSimplfy(numsSimple, kSimple));  