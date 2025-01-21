// Applying array method
const fibonacci = function(num) {
    const arr = [0,1];
    if (Number(num) >= 0){
        for(let i = 2; i <= num; i ++){
            let addedArr = arr.reduce(() => arr[i-2] + arr[i-1])
            arr.push(addedArr);
        }
        return arr[num];
    } else{
        return 'OOPS'
    }
};


// Do not edit below this line
module.exports = fibonacci;
