var firends = [20, 39, 34, 90, 43, 77, 43, 75, 37];
firends[2] = 41; //added new element in array position if i want to change a array value..
// push, pop, shift, unshift;
firends.push(100); //insert new element in array last position
console.log(firends);
firends.pop(); //remove element in array last position
console.log(firends);
firends.unshift(500); //insert new element in array first position
console.log(firends);
var firends = ["sharif", "rahim", "karim"];
firends.shift(); //remove element in array first position
console.log(firends);


// slice array element
var arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
var newArr = arr.slice(4); //it means to slice from array index num 4 to all other elements.
var newArray = arr.slice(4, 7); //slice (2,6) it will slice array element from array 2 num index theke start korbe... and 6 num element pozzonto slice korbe ata kintu array index num 6 na... ata array ar 6 number element count kobe mane 1 theke 6 pozzonto count korbe index num ar moto 0 theke count korbe na...

console.log(newArray);
var sliceStr = "I live in Bangladesh, I love my country very much";
var newSliceStr = str.slice(7, 12);
console.log(newSliceStr);

//splite element...

var splitStr = "I Live in Bangladesh, I love my country very much";
var newSplitStr = splitStr.split(" ")[5]; //it means that space gulu ke vad diye 5 num index value dewa.. (" ") means remove space..
console.log(newSplitStr);
// string reverse without using loop.
var splitStr = "I Live in Bangladesh, I love my country very much";
var newSplitStr = splitStr.split(" ").reverse().join(" ");
console.log(newSplitStr);

//splice array elements...

const months = ["Jan", "March", "April", "June"];
months.splice(1, 0, "Feb");
// inserts at index 1
console.log(months);
// expected output: Array ["Jan", "Feb", "March", "April", "June"]

months.splice(4, 2, "May", "July");
// replaces 1 element at index 4
console.log(months);
// expected output: Array ["Jan", "Feb", "March", "April", "May"]

var num = [1, 2, 3, 4, 5, 6, 7, 8, 9];

num.splice(3, 0, 100); // it means inserts a value at index 3
num.splice(3, 1, 100); //it means replace a value  at index 3

// 0 dile insert hobe, r 1 dile replace hobe... 0 mane akta value insert hocche oi position a r 1 mane 1 ta value replace hocche oi position a..
console.log(num);
