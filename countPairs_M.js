let countPairs = function(D){
    
    let map = {};
    let counter = 0;
    for (let item of D) {
        for(let j = 0; j<=21; j++){
            if( (2**j -item) in map)
                counter+=map[2**j -item];
        }
        if( map[item])
            map[item] = ++map[item];
        else
            map[item] = 1;      
    }
    //console.log(map);
    return counter %(10**9+7);
}

console.log(countPairs([149,107,1,63,0,1,6867,1325,5611,2581,39,89,46,18,12,20,22,234]));