console.log("Я учу JavaScript!");

let image = document.getElementById("image");

function showLast() {
    image.src = "./assets/images/whitecat.jpg"
}

const showNext = () => {
image.src = "./assets/images/fairycat.jpg"
}

const findYear = () => {
    let year = document.getElementById("year").value;
    if ((year % 4 === 0) && !(year %100 === 0)) {
        alert("Год является високосным! (366 дней) :)")
    }
    if ((year % 4 === 0) && (year % 100 === 0) && (year % 400 ===0)) {
        alert("Год является високосным! (366 дней) :)")
    }
    else {
        alert("Год не високосный! (у него 365 дней) :)")
    }
}