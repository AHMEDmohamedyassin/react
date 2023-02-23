let myPromise = new Promise ((resolve , reject) => {
    const x = 0 ; 
    if(x === 0 ){
        resolve('sucess');
    }else{
        reject('fail');
    }
}).then(
    (resolve) => console.log(resolve) , 
    (reject) => console.log(reject)
);

//############################################
// eating => playing => sleeping
let eating = true;
let playing = false;
let sleeping = true;

let eat = new Promise((res , rej) => {
    if(eating)res('eating');
    else rej('not eating');
})
let play = new Promise((res , rej) => {
    if(playing)res('playing');
    else rej('not playing');
})
let sleep = new Promise((res , rej) => {
    if(sleeping)res('sleeping');
    else rej('not sleeping');
})



eat.then(
    (res) => {
        console.log(res);
        play.then(
            (res) => {
                console.log(res);
                sleep.then(
                    (res) => console.log(res),
                    (rej) => console.log(rej),
                );
            },
            (rej) => console.log(rej),
        );
    },
    (rej) => console.log(rej),
);