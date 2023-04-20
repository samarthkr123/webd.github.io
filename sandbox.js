// const burger = document.querySelector('.burger');
// 		const navLinks = document.querySelector('.nav-links');

// 		burger.addEventListener('click', () => {
// 			navLinks.classList.toggle('open');
// 		});


function onClickMenu() {
    document.getElementById("menu").classList.toggle("icon");
    document.getElementById("nav").classList.toggle("change");
}

var sum = 0;
document.getElementById("sum").innerText = sum;




function onClickADD(number) {
    sum = sum + number;
    document.getElementById("sum").innerText = sum;
}

function onClickREMOVE(number) {
    if (sum >= number) {
        sum -= number;
        document.getElementById("sum").innerText = sum;
    }
}



const num = document.querySelector(' .bill b');
num.innerHTML = ' ' + sum;


