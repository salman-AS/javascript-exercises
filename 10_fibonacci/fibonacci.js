const fibonacci = function(num) {
    let prev=1,curr=1;
    if(num<0)
        return 'OOPS'
    if(num==0)
        return 0;
    for(let i=1;i<num-1;i++){
        next=curr+prev
        prev=curr;
        curr=next;
    }
    return curr;
};
fibonacci(3);
// Do not edit below this line
module.exports = fibonacci;
