let unCappedString = [];
let cappedStringA = [];
let cappedStringB = [];
let cappedStrings = [];
function capEveryOther(string){
    unCappedString = string.split("");
    for (var i = 0; i < unCappedString.length; i++){
        if (i === 0) {
            cappedStringA.push(unCappedString[i].toUpperCase());
            cappedStringB.push(unCappedString[i]);
        } else if (Number.isInteger(i/2)) {
            cappedStringA.push(unCappedString[i].toUpperCase());
            cappedStringB.push(unCappedString[i]);
        } else {
            cappedStringA.push(unCappedString[i])
            cappedStringB.push(unCappedString[i].toUpperCase());
        };
    };
    cappedStrings.push(cappedStringA.join(''), cappedStringB.join(''));
    return cappedStrings;
};
