const removeFromArray = function(array, ...args) {
    const arr2 = [];
    for (const item of array){
        if(!args.includes(item))
            arr2.push(item);
    }
    return arr2;
};

// Do not edit below this line
module.exports = removeFromArray;
