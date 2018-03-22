function explode(s) {
    let output = [];
    let tempvar = s.toString().split('');
    for (var i = 0; i < tempvar.length; i++) {
        for (var j = 0; j < tempvar[i]; j++){
            output.push(tempvar[i]);
        };
    };
    return output.join("");
};