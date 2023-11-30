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
function indexSum(nums, target){

}


