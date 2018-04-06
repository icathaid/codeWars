'use strict';
function formatWords(words){
    let bill = [];
    if(words.length === 0){
        return console.log('empty array');
    } else if(words.length === 1){
        return words[0];
    } else if(words.length === 2){
        return words[0] + ' and ' + words[1];
        //  need else if for 3 to deal with oxford comma
    } else if(words.length === 3) {
        bill.push(words[0] + ', ' + words[1] + ' and ' + words[2]);
        return bill.join('');
    } else if(words.length > 3){
        for(var i = 0; i < (words.length -2); i++){
            bill.push(words[i] + ', ');
        };
        bill.push(words[words.length -2] + ' and ');
        bill.push(words[words.length -1]);
        return bill.join('');
    };
};
