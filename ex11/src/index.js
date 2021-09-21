// Only change code below this line
function switchCase(letter) {
    var animals
    switch (letter) {
        case "a":
            animals = "antelope";

            break;
        case "b":
            animals = "Bird";
            break;
        case "c":
            animals = "cat"
            break;

        default:
            animals = "stuff"
            break;
    }

    return animals;
}
console.log(switchCase("d"));


// Only change code above this line
module.exports = switchCase;