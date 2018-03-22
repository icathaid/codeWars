// checks if number is even or odd 
function doshit(bill){
    if (Number.isInteger(bill/2)) {
        return console.log('even');
    } else {
        return console.log('odd');
    }
};

//checks if both numbers are odd
function domoreshit(bill, ted){
    if (!Number.isInteger(bill/2) && (!Number.isInteger(ted/2))){
        return console.log ('both odd');
    } else {
        return console.log ('fuck you');
    };
};

//stores number as array of separate integers
let stuff = [];
function storestuff(rufus){
    let shitstring = rufus.toString();
    let shit = shitstring.split("");
    shit.forEach(function(theo){
        stuff.push(parseInt(theo))
    });
};

//checks the new array if both numbers are odd
function checkshit(){
    for (var i = 0; i + 1 < stuff.length; i++){
        domoreshit(stuff[i], stuff[i + 1]);
    };
};

//put it all together
function dashMyNums(james){
    let numBox = [];
    let boxOfNums = [];
    let stringJames = james.toString().split("");
    console.log(stringJames);
    stringJames.forEach(function(ana){
        numBox.push(parseInt(ana))
    });
    for (var i = 0; i < numBox.length; i++){
        if (!Number.isInteger(numBox[i]/2) && (!Number.isInteger(numBox[i + 1]/2)) && ((i + 1) !== numBox.length)){
            boxOfNums.push(numBox[i] + '-');    
        } else {
            boxOfNums.push(numBox[i]);
        };

    };
    console.log(boxOfNums.join(""));
    console.log(numBox);
};

// everything works if you feed the function 21 digits or less, when it begins inserting letters and symbols like 'e', '+', ',' into numBox, which creates NaN errors during the odd/even check.  Baffled.
