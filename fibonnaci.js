var fibonnaci=function(n){
    if(n===1){
        return [0,1];
    }
    else{
        var arr=fibonnaci(n-1);
        arr.push(arr[arr.length - 1] + arr[arr.length - 2]);
        return arr
    }
}
var result= fibonnaci(10)
console.log(result)