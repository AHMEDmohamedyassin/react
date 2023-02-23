function sayHello (welcome) {
    console.log(welcome);
    return (name) => {
        console.log(name);
    }
}

let say = sayHello('welcome')   // لكي أصل إلي ال return 

console.log(sayHello('welcome'));    // هنا أنا وصلت لما قبل ال return
console.log(say);    // هنا أنا وصلت لما قبل ال return
console.log(say('ahmed'))        // هنا وصلت لل return