let moveZeroes = function(A) {
    let s =0, f=0;
    let ctr = 0;
    while( f < A.length){
        if(A[f]!=0 && A[s]!=0){
            f++;
            s++;
        }
        else if(A[f] == 0 || A[s]==0){
            f++;
        }
        else{
            ctr+= (f-s +1);
            A.splice(s, f-s+1);
            f=s;
        }
    }
    for( let i =0; i< ctr;i++)
        A.push(0);
    console.log(A);
};
moveZeroes([0,1,0]);