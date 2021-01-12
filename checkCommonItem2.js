

function checkCommonItem(arr1, arr2){
    
    let map = {};
    for( let item of arr1){
        if( !map[item])
            map[item] = true;
    }
    for( let item of arr2){
        if(map[item])
             return true;
    }
    return false;
}

array1 = ['a', 'b', 'c', 'd'];
array2 = ['hj', 'k', 'j', 'z', '.'];

console.log(checkCommonItem(array1, array2));