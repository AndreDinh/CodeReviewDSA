// just writing notes here


function addMap(map, value) {
    //to add something to the map we need check if its in the map
    //if its not create a key map[key] 
    // then make the value map[key] = value
    //always check if the key exist
    if (!map[value]) {

        //key       //value
        map[value] = value
    } else {
        return 'value is already in the map'
    }
    return map
}

let map = {}
let value = 1

console.log(addMap(map, value))

console.log(addMap(map, value))