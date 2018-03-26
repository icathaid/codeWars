let pol = () => {console.log('I\'m alive!')};

function disemvowel(str){
    let newString = str.replace(/[aeiou]/gi, '');
    return newString;
};