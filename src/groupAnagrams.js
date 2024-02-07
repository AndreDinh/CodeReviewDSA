// sorted each array of each value
// create a map with sorted then value is array 

function groupAnagrams(words) {
    // array of sorted words
    let sorted = words.map((words) => words.split("").sort().join(''));
    let map = {}
    // we put in a map
    for (let i = 0; i < sorted.length; i++) {
        // check exist if not existed
        if (!map[sorted[i]]) {
            map[sorted[i]] = [words[i]];
            // if array already existed add to map using array.push
        } else {
            map[sorted[i]].push(words[i])
        }
    }
    // returns the object (map) as a array of values
    return Object.values(map);

}
const words = ["eat", "tea", "tan", "ate", "nat", "bat"]
console.log(groupAnagrams(words))
