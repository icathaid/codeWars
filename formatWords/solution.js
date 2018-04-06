'use strict';
function formatWords(words){
    let ted = words;
    for(var i = 0; i < ted.length; i++){
        if(ted[i].length === 0){
            ted.splice(i, 1);
        };
    };
    let bill = [];
    if(ted.length === 0){
        return '';
    } else if(ted.length === 1){
        return ted[0];
    } else if(ted.length === 2){
        return ted[0] + ' and ' + ted[1];
    } else if(ted.length === 3) {
        bill.push(words[0] + ', ' + ted[1] + ' and ' + ted[2]);
        return bill.join('');
    } else if(ted.length > 3){
        for(var i = 0; i < (ted.length -2); i++){
            bill.push(ted[i] + ', ');
        };
        bill.push(ted[ted.length -2] + ' and ');
        bill.push(ted[ted.length -1]);
        return bill.join('');
    };
};

function removeCommas(words){
    let james = words;
    for(var i = 0; i < james.length; i++){
        if(james[i].length === 0){
            james.splice(i, 1);
        };
    };
    return james.join('');
};