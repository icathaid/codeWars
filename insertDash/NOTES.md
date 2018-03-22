https://stackoverflow.com/questions/7784620/javascript-number-split-into-individual-digits/7784642

var number = 12354987,
    output = [],
    sNumber = number.toString();

for (var i = 0, len = sNumber.length; i < len; i += 1) {
    output.push(+sNumber.charAt(i));
}

console.log(output);

I used this as the base to build off of.