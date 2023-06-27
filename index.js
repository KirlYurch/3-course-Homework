let buttonLvl1 = document.getElementById('lvlButton1');
let buttonLvl2 = document.getElementById('lvlButton2');
let buttonLvl3 = document.getElementById('lvlButton3');
let mainGoButton = document.getElementById('mainGoButton');
let buttons = [buttonLvl1, buttonLvl2, buttonLvl3];

function changeButtonStyle() {
    let textButton = "#FFFFFF";
    let colorButton = "#0080C1";
    for (let i = 0; i < buttons.length; i++) {
        buttons[i].classList.remove("active");
        buttons[i].style.backgroundColor = "";
        buttons[i].style.color = "";
    }
    this.classList.add("active");
    this.style.backgroundColor = colorButton;
    this.style.color = textButton;
}

buttonLvl1.addEventListener("click", changeButtonStyle);
buttonLvl2.addEventListener("click", changeButtonStyle);
buttonLvl3.addEventListener("click", changeButtonStyle);

mainGoButton.addEventListener("click", function () {
    for (let i = 0; i < buttons.length; i++) {
        if (buttons[i].classList.contains("active")) {
            let level = i + 1;
            window.location.href = "level" + level + ".html";
            break;
        }
    }
});

// buttonLvl1.addEventListener("click", function() {
//     let textButton = "#FFFFFF";
//     let colorButton = "#0080C1";
//     this.style.backgroundColor = colorButton;
//     this.style.color = textButton;
// });

// buttonLvl2.addEventListener("click", function() {
//     let textButton = "#FFFFFF";
//     let colorButton = "#0080C1";
//     this.style.backgroundColor = colorButton;
//     this.style.color = textButton;
// });

// buttonLvl3.addEventListener("click", function() {
//     let textButton = "#FFFFFF";
//     let colorButton = "#0080C1";
//     this.style.backgroundColor = colorButton;
//     this.style.color = textButton;
// });