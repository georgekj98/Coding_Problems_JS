let twoSum = function(nums, target) {
    let recip = {};
    for(let i =0; i < nums.length; i++){
        if( nums[i] in recip){
            return[ recip[nums[i]], i];
        }
        recip[target - nums[i]] = i;
    }
}

console.log(twoSum([2,7,11,15],26));