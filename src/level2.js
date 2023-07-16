import "../src/style.css";
import { cardGameTimeout, startTimer } from "../src/brain.js";
import { copyOne, copyTwo, copyThree, copyFour, copyFive, copySix} from "../src/brain.js";


const renderChoosePage = () => {
  const appEl = document.getElementById("appLvl2");

  const choosePageHtml = `
  <div class="bodyContentRun">
  <div class="headerContent">
      <div class="timerMainAll">
                 <div class="timerMain">
                     <div class="timerMin"><p>min</p></div>
                     <div class="timerSec"><p>sec</p></div>
                 </div>
                 <div><h1 id="timer" class="timerTime">00:00</h1></div>
             </div>


      <div>
      <button class="mainContentGoButton" id = "goMainButton">Начать заново</button>
      </div>
  </div>

  <div class="allCards lvl2">
<div class="cards containsOne">${copyOne}<img class="back-view" src ="/static/img/рубашка.svg"></div>
<div class="cards containsOne">${copyTwo}<img class="back-view" src ="/static/img/рубашка.svg"></div>
<div class="cards containsOne">${copyThree}<img class="back-view" src ="/static/img/рубашка.svg"></div>
<div class="cards containsTwo">${copyFour}<img class="back-view" src ="/static/img/рубашка.svg"></div>
<div class="cards containsTwo">${copyFive}<img class="back-view" src ="/static/img/рубашка.svg"></div>
<div class="cards containsTwo">${copySix}<img class="back-view" src ="/static/img/рубашка.svg"></div>
<div class="cards containsOne">${copyOne}<img class="back-view" src ="/static/img/рубашка.svg"></div>
<div class="cards containsOne">${copyTwo}<img class="back-view" src ="/static/img/рубашка.svg"></div>
<div class="cards containsOne">${copyThree}<img class="back-view" src ="/static/img/рубашка.svg"></div>
<div class="cards containsTwo">${copyFour}<img class="back-view" src ="/static/img/рубашка.svg"></div>
<div class="cards containsTwo">${copyFive}<img class="back-view" src ="/static/img/рубашка.svg"></div>
<div class="cards containsTwo">${copySix}<img class="back-view" src ="/static/img/рубашка.svg"></div>
  </div>
</div>
    `;
  appEl.innerHTML = choosePageHtml;
};

renderChoosePage();

const mainContentGoButton = document.getElementById("goMainButton");
mainContentGoButton.addEventListener("click", () => {
  window.location.href = "index.html";
});

cardGameTimeout();

let timer = document.getElementById("timer");
startTimer();