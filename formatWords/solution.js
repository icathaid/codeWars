'use strict';
function formatWords(arr){
    if(!arr){
        return '';
    };
    let bill = [];
    let ted = [];
    for(var i = 0; i < arr.length; i++){
        if(arr[i].length > 0){
            bill.push(arr[i]);;
        }
    };
    let james = bill.join(' ');
    if(bill.length < 1){
        return '';
    } else if(bill.length === 1){
        return bill[0];
    } else if(bill.length === 2){
        return bill[0] + ' and ' + bill[1];
    } else if(bill.length === 3){
        return bill[0] + ', ' + bill[1] + ' and ' + bill[2];
    } else {
        for(var i = 0; i < bill.length - 2; i++){
            ted.push(bill[i]);
        };
        return ted.join(', ') + ', ' + bill[bill.length -2] + ' and ' + bill[bill.length -1];
    };
    return console.log('end of script');
};