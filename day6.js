let testTime = [7, 15, 30];
let testDistance = [9, 40, 200];

let time = [47,84,74,67];
let distance = [207,1394,1209,1014];

//num of sec press = num of mm per milisec 
//how to win: travel longer than the given distance 
//to find distance travel ,(time - num of sec press)*num of sec press
//max time press = given time 
//but if you press for max time you'll travel 0 
//find max time to win, then maxt - (15-maxt) +1 = num of ways to win

const product = (arr)=>{
    return arr.reduce((acu,curr)=> acu*curr, 1);
}
//part 1
const findNumOfWays = (time,dist) =>{
    let numOfWays =[];
    for(let i = 0;i<time.length;i++){
        //min distance to win 
        let minDist = dist[i];
        let totalTime = time[i];
        let distTravel = 0; 
        let secPress = totalTime-1;
        let timeLeft = 0;

        while(distTravel <= minDist){
            timeLeft = totalTime - secPress;
            distTravel = secPress*timeLeft;
            if(distTravel > minDist){
                let numWays = (secPress - timeLeft)+1;
                numOfWays.push(numWays);
            }
            secPress --;
        }

    }
    return product(numOfWays);

}

//console.log(findNumOfWays(time,distance));

//part 2 

let twoTime = 71530; 
let twoDistance = 940200; 

let realTime = 47847467;
let realDistance =207139412091014;

const convertToSci = num =>{
    let e = num.toString().length-1;
    let tens = Math.pow(10,e);
    num = num/tens;
    return [num, e];
}
//console.log(convertToSci(twoTime));

const longRace = (time,dist)=>{
    let minDist = dist;
    let totalTime = time;

    let distTravel = 0; 
    let secPress = totalTime-1;
    let timeLeft = 0;
    let numWays = 0;

    while(distTravel <= minDist){
        timeLeft = totalTime - secPress;
        distTravel = secPress*timeLeft;
        if(distTravel > minDist){
            numWays = (secPress - timeLeft)+1;
        }
        secPress --;
    }
    return numWays;

}
console.log(longRace(twoTime,twoDistance))

console.log(longRace(realTime,realDistance))
