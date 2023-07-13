const renderMainPage = () => {
    const appEl = document.getElementById('app');

    const choosePageHtml = `
    <div class="bodyContent">
    <div class="mainContent">
        <h1 class="mainContentTitle">Выбери сложность</h1>
        <div class="mainContentButtons">
            <button
                id="lvlButton1"
                class="mainContentButtonsLvl"
                value="1"
            >
                1
            </button>
            <button id="lvlButton2" class="mainContentButtonsLvl">
                2
            </button>
            <button id="lvlButton3" class="mainContentButtonsLvl">
                3
            </button>
        </div>
        <button id="mainGoButton" class="mainContentGoButton">
            Старт
        </button>
    </div>
</div>
    `;
    appEl.innerHTML = choosePageHtml
};
renderMainPage();

let buttonLvl1 = document.getElementById("lvlButton1");
let buttonLvl2 = document.getElementById("lvlButton2");
let buttonLvl3 = document.getElementById("lvlButton3");
let mainGoButton = document.getElementById("mainGoButton");
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

buttons.forEach((element) =>
    element.addEventListener("click", changeButtonStyle),
);

mainGoButton.addEventListener("click", function () {
    for (let i = 0; i < buttons.length; i++) {
        if (buttons[i].classList.contains("active")) {
            let level = i + 1;
            window.location.href = "level" + level + ".html";
            break;
        }
    }
});
