const prompt=require('prompt-sync')();
let age=+prompt("enter child age");
let season=prompt("enter the season");
if(age<=5){
    if(season=='summer'&&season=='fall'){
        console.log("bedtime:8:30");
    }
    elseif(season=='winter'&&season=='spring') {
        console.log("bedtime:8:00pm");
    }


}
