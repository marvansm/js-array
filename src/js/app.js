const mixButton = document.querySelector(".mix")
const result = document.querySelector(".result")
const cardBody = document.querySelector(".card-body")
function randomColor() {
    let r = Math.floor(Math.random() * 256);
    let g = Math.floor(Math.random() * 256);
    let b = Math.floor(Math.random() * 256);
    let colorArr = ["rgb(", r, ", ", g, ", ", b, ")"].reduce((a, b) => a + b)
    result.innerHTML = colorArr;

    document.querySelector(".card-body").style.backgroundColor = colorArr;
    console.log(colorArr)
} 

mixButton.addEventListener('click', randomColor)


// const mixButton = document.querySelectorAll(".mix");
// const result = document.querySelectorAll(".result");
// const cardBody = document.querySelectorAll(".card-body");

// function randomColor(index) {
//     let r = Math.floor(Math.random() * 256);
//     let g = Math.floor(Math.random() * 256);
//     let b = Math.floor(Math.random() * 256);
//     let colorArr = "rgb(" + r + ", " + g + ", " + b + ")";

//     result[index].innerHTML = colorArr;
//     cardBody[index].style.backgroundColor = colorArr;

//     console.log(colorArr);
// }

// mixButton.forEach((button, index) => {
//     button.addEventListener('click', () => randomColor(index));
// });

