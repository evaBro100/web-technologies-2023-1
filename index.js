//1
const students = [
    { name: 'Павел', age: 20 },
    { name: 'Иван', age: 20 },
    { name: 'Эдем', age: 20 },
    { name: 'Денис', age: 20 },
    { name: 'Виктория', age: 20 },
    { age: 40 },
]

const result = pickPropArray(students, 'name')
console.log('Задание 1',result)

function pickPropArray(arr,key){
    let array = [];
    for (const item of arr){
        if (item[key]){
            array.push(item[key]);
        }
    }
    return array;
}

//2
function createCounter(){
    let count = 1;

    return function(){
        console.log(count++);
    }
}
console.log('Задание 2');
const counter1 = createCounter()
counter1()
counter1()

const counter2 = createCounter()
counter2()
counter2()

//3
console.log('Задание 3')
const result1 = spinWords("Привет от Legacy");
console.log(result1);

const result2 = spinWords("This is a test");
console.log(result2);

function spinWords(let){
    let letSplit = let.split(' ');
    let newLet = [];
    for (const item of letSplit){
        if (item.length >= 5){
            newLet.push([...item].reverse().join(''))
        }
        else newLet.push(item)
    }
    return newLet.join(' ');
}

//4

const nums = [2,7,11,15];
let target = 9;
const result3 = indexSum(nums, target);
console.log('Задание 4\n', result3)

function indexSum(arr, sum){
    for (let i = 0; i <  arr.length; i++){
        for (let j = i + 1; j < arr.length; j++){
            if (arr[i]+arr[j]==sum){
                return [i,j]
            }
        }
    }
}

//5
// const strs = ["цветок","поток","хлопок"]
// const result4 = findPrefix(strs);
// console.log(result4);

// function findPrefix(str){
//     let prefix = str[0]; 
//     for (let i = 1; i <strs.length; i++){
//         while (strs[i].indexOf(prefix)!= -1){
//             let prefix = prefix.substring(0, prefix.length-1);
//             if (prefix ==''){
//                 return '';
//             }
//         }
//     }
//     return prefix;
// }

function findLongestCommonPrefix(strs) {
    if (!strs || strs.length === 0) {
        return "";
    }

    let longestCommonPrefix = "";
    let minLength = Math.min([...strs].map(str => str.length));

    for (let i = 0; i < minLength; i++) {
        const char = strs[0][i];

        if (strs.every(str => str[i] === char)) {
            longestCommonPrefix += char;
        } else {
            break;
        }
    }

    if (longestCommonPrefix.length < 2) {
        return "";
    }

    return longestCommonPrefix;
}

const example1 = findLongestCommonPrefix(["цветок", "поток", "хлопок"]);
console.log(example1);

const example2 = findLongestCommonPrefix(["собака", "гоночная машина", "машина"]);
console.log(example2);



