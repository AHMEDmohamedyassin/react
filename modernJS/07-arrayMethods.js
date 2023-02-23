arr1 = [1,2,3,4,5,6,7,8,9];
alpha = ['a' , 'b' , 'c' , 'd'];

// arr2 = arr1.slice(2 , 4);            // لا يؤثر علي المصفوفة الأولي
// arr2 = arr1.splice(2 , 2);              // يؤثر علي المصفوفة الأولي
// arr2 = arr1.concat(10);                 // concating
// arr3 = [...arr2 , ...arr1];             // concating



// arr2 = arr1.filter((item) => item > 4);         // return array of values
// arr2 = arr1.find((item) => item > 4);           // return first value
// arr2 = arr1.reduce((total , current) => total + current , 0);   // 0 => total initialization 
// arr2 = alpha.reduce((total , current) => total + current);
arr2 = arr1.sort((current , previous) => {
    if(current > previous) return 1;              // return 1   => يعني لا يغير شئ
    else return -1;                               // return -1 => يعني يبدلهم
});



console.log(arr2);