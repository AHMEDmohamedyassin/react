let eating = true;
let playing = false;
let sleeping = true;

let eat = () => {
    return new Promise((res , rej) => {
        if(eating)res('eating');
        else rej('not eating');
    })
} 
let play = () => {
    return new Promise((res , rej) => {
        if(playing)res('playing');
        else rej('not playing');
    })
}
let sleep = () => {
    return new Promise((res , rej) => {
        if(sleeping)res('sleeping');
        else rej('not sleeping');
    })
}

async function run(){
    try{
        let EAT = await eat();
        console.log(EAT);
        let PLAY = await play();
        console.log(PLAY);
        let SLEEP = await sleep();
        console.log(SLEEP);
    }catch(err){ console.log(err)}
}

run();