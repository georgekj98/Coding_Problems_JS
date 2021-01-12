/*
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
let twoSum = function(nums, target) {
    let recip = new Set();
    for( let i of nums){
        if( recip.has(i)){
            return true;
        }
        recip.add(target - i);
    }
    return false;
};
console.log(twoSum([1,1],6));