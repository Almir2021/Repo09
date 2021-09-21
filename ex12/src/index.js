function switchCaseSequential(num) {
    // Only change code below this line
    var answer
    switch (num) {
        case 1:
            answer = "low";


            break;

        case 2:
            answer = "low";


            break;

        case 3:
            answer = "low";


            break;

        case 4:
            answer = "Mid"
            break;

        case 5:
            answer = "Mid"
            break;

        case 6:
            answer = "Mid"
            break;

        case 7:
            answer = "High"

            break;
        case 8:
            answer = "High"

            break;
        case 9:
            answer = "High"

            break;
        default:
            break;
    }


    // Only change code above this line
    return answer;

}
console.log(switchCaseSequential(7));

module.exports = switchCaseSequential;