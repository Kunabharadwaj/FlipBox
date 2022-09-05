

function setTimer(m){
    return new Promise((resolve,reject) =>{
        setTimeout(()=>{
            resolve();
        },m);
    });
}

const wait = new Promise((resolve,reject) =>{
    resolve();
});

let letterTumbling = [{transform: 'scaleX(1)' },
                        {transform: 'scaleX(0)', backgroundColor: 'lightgreen'},{transform: 'scale(1)', backgroundColor:'lightgray'}];  
let letterTiming = { duration: 500, iteration: 1, fill: 'forwards' };


wait.then(()=>setTimer(1000))
    .then(()=>{
        

        let letter1 = document.getElementsByClassName('l1')[0];
        return  (letter1.animate(letterTumbling, letterTiming)).finished;
        
        
    })
    .then(()=>{
        

        let letter2 = document.getElementsByClassName('l2')[0];
        return letter2.animate(letterTumbling, letterTiming).finished;
    })
    .then(()=>{
        

        let letter3 = document.getElementsByClassName('l3')[0];
        return letter3.animate(letterTumbling, letterTiming).finished;
    })
    .then(()=>{
        

        let letter4 = document.getElementsByClassName('l4')[0];
        return letter4.animate(letterTumbling, letterTiming).finished;
    })
    .then(()=>{
        

        let letter5 = document.getElementsByClassName('l5')[0];
        return letter5.animate(letterTumbling, letterTiming).finished;
    })

