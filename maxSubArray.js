/*
 * @param {number[]} nums
 * @return {number}
 */
 let maxSubArray = function(A) {
    if(A.length < 2) return A[0];
    let cs = A[0];
    let ms = A[0];
    //Current sum and max sum
    for(let i =1;i < A.length;i++){
        cs = Math.max(A[i], cs +A[i]);
        ms = Math.max(cs,ms);
    }

    return ms;
};

console.log(maxSubArray([-2,1,-3,4,-1,2,1,-5,4]));