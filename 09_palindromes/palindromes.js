const palindromes = function (str) {
    str = str.toLowerCase().replace(/[^a-z0-9]/g, "");
    for(let i=0;i<=str.length/2;i++){
        let j = str.length - 1 - i;
        console.log(str[i],str[j]);
        if(str[i] != str[j])
            return false;
    }
    return true;
};

palindromes('racecar');
// Do not edit below this line
module.exports = palindromes;
