import "../src/style.css";
import { cardGameTimeout, startTimer } from "../src/brain.js";
import { copyOne, copyTwo, copyThree } from "../src/brain.js";

const renderPage = () => {
  const appEl = document.getElementById("appLvl1");

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

  <div class="allCards">
        <div class="cards positionOne">${copyOne}<img class="back-view" src ="/static/img/рубашка.svg"></div>
        <div class="cards positionOne">${copyTwo}<img class="back-view" src ="/static/img/рубашка.svg"></div>
        <div class="cards positionOne">${copyThree}<img class="back-view" src ="/static/img/рубашка.svg"></div>
        <div class="cards positionOne">${copyOne}<img class="back-view" src ="/static/img/рубашка.svg"></div>
        <div class="cards positionOne">${copyTwo}<img class="back-view" src ="/static/img/рубашка.svg"></div>
        <div class="cards positionOne">${copyThree}<img class="back-view" src ="/static/img/рубашка.svg"></div>
  </div>
</div>
    `;
  appEl.innerHTML = choosePageHtml;
};

renderPage();


cardGameTimeout();

let timer = document.getElementById("timer");
startTimer();
