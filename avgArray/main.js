'use strict'
const averages = (numbers) => {
    let input = numbers
    let output = [];
    if (input.includes(null || None) || input.length < 1){
        let nullArray = [];
        return nullArray;
    } else {
        for (var i = 0; i < (input.length - 1); i++){
            output.push((input[i]+input[i+1])/2);
        };
        return output;
    };
};