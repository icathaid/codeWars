'use strict'
function pol(){
    console.log('i\'m alive!');
};


let testArray = [2,10,9,3];

function dumbfunction(arr){
    let counter = 0;
    for(var i = 0; i < arr.length; i++){
        for(var j = 0; j < arr.length; j++){
            if(arr[i] === arr[j] + 1 || arr[i] === arr[j] - 1){
                console.log('counter +1, ' + arr[i] + ', ' + arr[j]);
                   };
        };
    };
    console.log('counter:    ' + counter + 'arr.length:   ' + arr.length);
    if (counter === (arr.length)){
        return true;
    };
    return false;
};


function checkArray(arr){
    let bill = true;
    for(var i = 0; i < arr.length; i++){
        if (bill === true){
            for(var j = 0; j < arr.length; j++){
                if(arr[i] !== (arr[j] + 1) || arr[i] !== (arr[j] - 1)){
                    console.log(arr[i] + '' + arr[j]);
                    if(){};
                    return bill = false;
                } else {
                    bill = true;
                };
            };
        };
    };
    if(bill = true){
        return true;
    };
    console.log('all true');
};