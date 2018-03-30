'use strict'
function longest(words){
    let sortedWords = words.sort(compareWords);
    let lastWord = sortedWords[sortedWords.length -1];
    return lastWord.length;
};
function compareWords(a, b){
    if(a.length < b.length){
        return -1;
    };
    if(a.length > b.length){
        return 1;
    };
    return 0;
};
