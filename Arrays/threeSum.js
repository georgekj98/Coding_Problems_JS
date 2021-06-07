// Solution for 3sum question with array containing no repeated elements

let threeSum = function(nums, target) {
    const sorted = nums.sort( (a,b) => a-b);
    let out = [];
    if( sorted.length < 3)
        return out;
    
    for( let i =0; i<=sorted.length-3; i++){
        
        let left =i+1;
        let right = sorted.length-1;

        while( left < right){
            let sum = sorted[i] +sorted[left] +sorted[right];
            if( sum === target){
                out.push([ sorted[i], sorted[left], sorted[right] ]);
                left++;
                right--;
            }
            else if (sum < target)
                left++;
            else
                right--;
        }}
    return out;
}

console.log(threeSum([12,3,1,2,-6,5,-8,6,-1,0], 0));



// let threeSum = function(nums) {
//     const sorted = nums.sort( (a,b) => a-b);
//     let out = [];
//     if( sorted.length < 3)
//         return false;
//     let f = 0;
//     let s = 1;
//     let t = sorted.length -1;
//comment
    
//     let toggle = true;
//     while( s !== t){
//         let sum = sorted[f] +sorted[s] +sorted[t];
//         if( sum === 0){
//             return true;
//         }
//         else if( sum > 0)
//             t--;
//         else {
//             if(toggle)
//                 s++;
//             else
//                 f++;
//             toggle = !toggle;
//                  }                                    
//          }
//     return false;
// };

// let threeSum = function(nums) {
//     const sorted = nums.sort( (a,b) => a-b);
//     let out = [];
//     if( sorted.length < 3)
//         return out;
//     let f = 0;
//     let s = 1;
//     let t = sorted.length -1;
    
//     let toggle = true;
//     while( s !== t){
//         let sum = sorted[f] +sorted[s] +sorted[t];
//         if( sum === 0){
//             let ar = [ sorted[f], sorted[s], sorted[t] ];
//             out.push(ar);
//             s++;
//         }
//         else if( sum > 0)
//             t--;
//         else {
//             if(toggle)
//                 s++;
//             else
//                 f++;
//             toggle = !toggle;
//                  }                                    
//          }
//     return out;
// };



