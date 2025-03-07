let counter1 = document.getElementById("counter201");
let counter1Value = 6543;
let counter2 = document.getElementById("counter202");
let counter2Value = 1154789;
let counter3 = document.getElementById("counter203");
let counter3Value = 8706;
let counter4 = document.getElementById("counter204");
let counter4Value = 56;

function count1(num) {

    let intervalID = setInterval(function(){
        if(num == counter1Value) {
            clearInterval(intervalID);
            return;
        }
        counter1.innerText = num;
        num++;
    }, 1);
}

function count2(num) {

    let intervalID = setInterval(function(){
        if(num == counter2Value) {
            clearInterval(intervalID);
            return;
        }
        counter2.innerText = num;
        num++;
    }, 1);
}

function count3(num) {

    let intervalID = setInterval(function(){
        if(num == counter3Value) {
            clearInterval(intervalID);
            return;
        }
        counter3.innerText = num;
        num++;
    }, 1);
}
function count4(num) {

    let intervalID = setInterval(function(){
        if(num == counter4Value) {
            clearInterval(intervalID);
            return;
        }
        counter4.innerText = num;
        num++;
    }, 100);
}

count1(4000);
count2(1152000);
count3(5989);
count4(0);
