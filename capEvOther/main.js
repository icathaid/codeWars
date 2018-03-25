let unCappedString = [];
let cappedString = [];
function capEveryOther(string){
    unCappedString = string.split("");
    for (var i = 0; i < unCappedString.length; i++){
        if (i === 0) {
            cappedString.push(unCappedString[i].toUpperCase())
        } else if (Number.isInteger(i/2)) {
            cappedString.push(unCappedString[i].toUpperCase())
        } else {
            cappedString.push(unCappedString[i])
        };
    };
    return cappedString.join().replace(/\,/g, "");
};