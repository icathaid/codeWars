'use strict'
let tempArr = [];
function isNice(arr){
    if(!arr.length){
        return false;
    };
    tempArr = arr;
    return tempArr.every(checkVal);
};
function checkVal(currentVal){
    for (var i = 0; i < tempArr.length; i++){
        if(currentVal + 1 === tempArr[i] || currentVal - 1 === tempArr[i]){
            return true;
        };
    };
};
