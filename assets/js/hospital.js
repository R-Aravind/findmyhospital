let btn1 = document.getElementById("1");
let btn2 = document.getElementById("2");
let btn3 = document.getElementById("3");
let dep1 = document.getElementById("dep-1");
let dep2 = document.getElementById("dep-2");
let dep3 = document.getElementById("dep-3");


Select1();

function Select1() {
    btn1.style.color = "#1f0b30";
    btn1.style.backgroundColor = "white";

    btn2.style.color = "white";
    btn2.style.backgroundColor = "#1f0b30";
    btn3.style.color = "white";
    btn3.style.backgroundColor = "#1f0b30";

    dep1.style.visibility = "visible";
    dep2.style.visibility = "hidden";
    dep3.style.visibility = "hidden";
    dep1.style.width = "100%";
    dep1.style.height = "80%";

    dep2.style.width = "0";
    dep2.style.height = "0";
    dep3.style.width = "0";
    dep3.style.height = "0";
}

function Select2() {
    btn2.style.color = "#1f0b30";
    btn2.style.backgroundColor = "white";

    btn1.style.color = "white";
    btn1.style.backgroundColor = "#1f0b30";
    btn3.style.color = "white";
    btn3.style.backgroundColor = "#1f0b30";

    dep2.style.visibility = "visible";
    dep1.style.visibility = "hidden";
    dep3.style.visibility = "hidden";
    dep2.style.width = "100%";
    dep2.style.height = "80%";

    dep1.style.width = "0";
    dep1.style.height = "0";
    dep3.style.width = "0";
    dep3.style.height = "0";
}

function Select3() {
    btn3.style.color = "#1f0b30";
    btn3.style.backgroundColor = "white";

    btn1.style.color = "white";
    btn1.style.backgroundColor = "#1f0b30";
    btn2.style.color = "white";
    btn2.style.backgroundColor = "#1f0b30";

    dep3.style.visibility = "visible";
    dep2.style.visibility = "hidden";
    dep1.style.visibility = "hidden";
    dep3.style.width = "100%";
    dep3.style.height = "80%";

    dep1.style.width = "0";
    dep1.style.height = "0";
    dep2.style.width = "0";
    dep2.style.height = "0";
}