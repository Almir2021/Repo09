// Only change code below this line
function myForLoop1() {
    for (var evenNumbers = 0; evenNumbers < 8; evenNumbers = evenNumbers + 2) {

        console.log(evenNumbers);





    }
    return evenNumbers;

} console.log(myForLoop1());

function myForLoop2() {

    for (evenInverseNumbers = 8; evenInverseNumbers > 0; evenInverseNumbers = evenInverseNumbers - 2) {

        console.log(evenInverseNumbers);
    }

    return evenInverseNumbers;

} console.log(myForLoop2());


// Only change code above this line

module.exports = {
    myForLoop1,
    myForLoop2

};