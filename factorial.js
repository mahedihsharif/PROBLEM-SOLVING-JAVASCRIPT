function fact(n){
    if(n === 0)return 1;  //5 * 4* 3* 2* 1* 0*
    else{
        return n * fact(n-1);   //1 1 2 6 24 120
    }
}
var result=fact(5);
console.log(result);