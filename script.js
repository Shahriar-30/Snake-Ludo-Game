let li = document.querySelectorAll("li");
let dot_1 = document.querySelector(".dot_1");
let dot_2 = document.querySelector(".dot_2");
let btn = document.querySelector(".btn");
let btn_2 = document.querySelector(".btn_2");
let point = document.querySelector(".point");
let point_2 = document.querySelector(".point_2");
let goo = document.querySelectorAll(".goo");
let count = 0;
let count_2 = 0;

max = 6;
min = 1;
btn.addEventListener("click", lodu);
btn_2.addEventListener("click", lodu_2);

btn_2.style.display = "none";
// point_2.style.display = "none";

let eee = 0;


function lodu() {
    let random = Math.floor(Math.random() * (max - min + 1)) + min;
    point.innerHTML = random;
    count = count + random;
    eee++;
    console.log(eee);



    if (eee % 2 != 0) {
        // if (random == 1) {
        //     confirm("You Have Got One More Chance");
        // }
        if (count > 100) {
            count = 100;
            point.innerHTML = "Black Won the Game";
            btn.style.display = "none";
        }
        if (count == 100) {
            point.innerHTML = "Black Won the Game";
            btn.style.display = "none";
        }
        if (count == parseInt(goo[0].innerHTML)) {
            count = 2;
            alert(`Better Luck Next Time. ** ${goo[0].innerHTML} to 2`);
        }
        if (count == parseInt(goo[1].innerHTML)) {
            alert(`Better Luck Next Time. ** ${goo[1].innerHTML} to 8`);
            count = 8;
        }
        if (count == parseInt(goo[2].innerHTML)) {
            alert(`Better Luck This Time. ** ${goo[2].innerHTML} to 15`);
            count = 15;
        }
        if (count == parseInt(goo[3].innerHTML)) {
            alert(`Better Luck Next Time. ** ${goo[3].innerHTML} to 25`);
            count = 25;
        }
        if (count == parseInt(goo[4].innerHTML)) {
            alert(`Better Luck Next Time. ** ${goo[4].innerHTML} to 32`);
            count = 32;
        }
        if (count == parseInt(goo[5].innerHTML)) {
            alert(`Better Luck This Time. ** ${goo[5].innerHTML} to 50`);
            count = 50;
        }
        if (count == parseInt(goo[6].innerHTML)) {
            alert(`Better Luck Next Time. ** ${goo[6].innerHTML} to 50`);
            count = 50;
        }
        if (count == parseInt(goo[7].innerHTML)) {
            alert(`Better Luck Next Time. ** ${goo[7].innerHTML} to 60`);
            count = 60;
        }
        if (count == parseInt(goo[8].innerHTML)) {
            alert(`Better Luck Next Time. ** ${goo[8].innerHTML} to 15`);
            count = 15;
        }
        if (count == parseInt(goo[9].innerHTML)) {
            alert(`Better Luck Next Time. ** ${goo[9].innerHTML} to 50`);
            count = 50;
        }
        if (count == parseInt(goo[10].innerHTML)) {
            alert(`Better Luck Next Time. ** ${goo[10].innerHTML} to 60`);
            count = 60;
        }
        if (count == parseInt(goo[11].innerHTML)) {
            alert(`Better Luck Next Time. ** ${goo[11].innerHTML} to 2`);
            count = 2;
        }
        li[count].appendChild(dot_1);

        btn_2.style.display = "block";
        // point_2.style.display = "block";
        btn.style.display = "none";
        // point.style.display = "none";
    }
}

function lodu_2() {
    let random = Math.floor(Math.random() * (max - min + 1)) + min;
    point_2.innerHTML = random;
    count_2 = count_2 + random;
    eee++;
    console.log(eee);

    if (eee % 2 == 0) {
        if (count_2 > 100) {
            count_2 = 100;
            point_2.innerHTML = "Red Won the Game";
            btn.style.display = "none";
        }
        if (count_2 == 100) {
            point_2.innerHTML = "Red Won the Game";
            btn.style.display = "none";
        }
        // if (random == 1) {
        //     confirm("You Have Got One More Chance");
        // }
        if (count_2 == parseInt(goo[0].innerHTML)) {
            count_2 = 2;
            alert(`Better Luck Next Time. ** ${goo[0].innerHTML} to 2`);
        }
        if (count_2 == parseInt(goo[1].innerHTML)) {
            alert(`Better Luck Next Time. ** ${goo[1].innerHTML} to 8`);
            count_2 = 8;
        }
        if (count_2 == parseInt(goo[2].innerHTML)) {
            alert(`Better Luck This Time. ** ${goo[2].innerHTML} to 15`);
            count_2 = 15;
        }
        if (count_2 == parseInt(goo[3].innerHTML)) {
            alert(`Better Luck Next Time. ** ${goo[3].innerHTML} to 25`);
            count_2 = 25;
        }
        if (count_2 == parseInt(goo[4].innerHTML)) {
            alert(`Better Luck Next Time. ** ${goo[4].innerHTML} to 32`);
            count_2 = 32;
        }
        if (count_2 == parseInt(goo[5].innerHTML)) {
            alert(`Better Luck This Time. ** ${goo[5].innerHTML} to 50`);
            count_2 = 50;
        }
        if (count_2 == parseInt(goo[6].innerHTML)) {
            alert(`Better Luck Next Time. ** ${goo[6].innerHTML} to 50`);
            count_2 = 50;
        }
        if (count_2 == parseInt(goo[7].innerHTML)) {
            alert(`Better Luck Next Time. ** ${goo[7].innerHTML} to 60`);
            count_2 = 60;
        }
        if (count_2 == parseInt(goo[8].innerHTML)) {
            alert(`Better Luck Next Time. ** ${goo[8].innerHTML} to 15`);
            count_2 = 15;
        }
        if (count_2 == parseInt(goo[9].innerHTML)) {
            alert(`Better Luck Next Time. ** ${goo[9].innerHTML} to 50`);
            count_2 = 50;
        }
        if (count_2 == parseInt(goo[10].innerHTML)) {
            alert(`Better Luck Next Time. ** ${goo[10].innerHTML} to 60`);
            count_2 = 60;
        }
        if (count_2 == parseInt(goo[11].innerHTML)) {
            alert(`Better Luck Next Time. ** ${goo[11].innerHTML} to 2`);
            count_2 = 2;
        }
        li[count_2].appendChild(dot_2);

        btn_2.style.display = "none";
        // point_2.style.display = "none";
        btn.style.display = "block";
        // point.style.display = "block";
    }
}

