let oldArray = [1,2,3,4,5,6];
let newArray = [0 , ...oldArray , 7 , 8];

console.log(newArray);

let oldObject = {id : '1' , name : 'ahmed'}
let newObject = {...oldObject , id: '2' , lastName : 'mohamed'}  // يقوم بإضافة و تعديل

console.log(newObject);


let numbers = (...args) => {
    // return args.filter(item => {
    //     return item === 5;
    // });
    // return args.filter(item => item === 5 );     // returning array of results
    return args.find(item => item === 5);        // return single value of result
} 

console.log(numbers(1,2,4,5,6,7,5));