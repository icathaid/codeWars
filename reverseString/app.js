let stuff = [];
function solution(str){
    stuff = str.split("").reverse().join().replace(/\,/g, '');
return stuff;
};