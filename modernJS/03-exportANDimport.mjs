let sayHello = (msg) => {
    console.log(msg)
}

let sayGoodBye = (msg) => {
    console.log(msg)
}

export let say = (msg) => {
    console.log(msg)
}

let ServerName = "localHost";

// export default sayHello;
export  {sayHello , sayGoodBye , ServerName};