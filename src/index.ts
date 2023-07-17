import "../src/style.css";

const renderMainPage = () => {
    const appEl = document.getElementById("app") as HTMLInputElement;
  
    const choosePageHtml = `
      <div class="bodyContent">
      
      <form class="mainContent">
          <h1 class="mainContentTitle">Выбери сложность</h1>
  
          <div class="chooseDifContainer">
              <input
                  value="1"
                  name="choose_input"
                  type="radio"
                  id="choose_input_1"
              />
              <label class="label_1" for="choose_input_1">1</label>
  
              <input
                  value="2"
                  name="choose_input"
                  type="radio"
                  id="choose_input_2"
              />
              <label class="label_2" for="choose_input_2">2</label>
  
              <input
                  value="3"
                  name="choose_input"
                  type="radio"
                  id="choose_input_3"
              />
              <label class="label_3" for="choose_input_3">3</label>
          </div>
          <button type="submit" class="mainContentGoButton">Старт</button>
          </form>
      </div>
  </div> `;
    appEl.innerHTML = choosePageHtml;
  };
  
  renderMainPage();
  
  let BODY = document.querySelector(".body") as HTMLInputElement;
  let mainContent = document.querySelector(".mainContent") as HTMLElement;
  let radios = document.getElementsByName("choose_input");
  let label1 = document.querySelector(".label_1") as HTMLInputElement;
  let label2 = document.querySelector(".label_2") as HTMLInputElement;
  let label3 = document.querySelector(".label_3") as HTMLInputElement;
  
  for (const radio of radios) {
    radio.onchange = getChooseDif;
  }
  
  function getChooseDif(this: any) {
    if (this.value == 1) {
      label1.style.background = "#0080c1";
      label1.style.color = "#ffffff";
      label2.style.background = "#ffffff";
      label3.style.background = "#ffffff";
    } else {
      label1.style.background = "#ffffff";
      label1.style.color = " #0080c1";
    }
    if (this.value == 2) {
      label2.style.background = "#0080c1";
      label2.style.color = "#ffffff";
      label1.style.background = "#ffffff";
      label3.style.background = "#ffffff";
    } else {
      label2.style.background = "#ffffff";
      label2.style.color = " #0080c1";
    }
    if (this.value == 3) {
      label3.style.background = "#0080c1";
      label3.style.color = "#ffffff";
      label1.style.background = "#ffffff";
      label2.style.background = "#ffffff";
    } else {
      label3.style.background = "#ffffff";
      label3.style.color = " #0080c1";
    }
  }
  
  let selectInput1 = document.getElementById("choose_input_1") as HTMLInputElement;
  let selectInput2 = document.getElementById("choose_input_2") as HTMLInputElement;
  let selectInput3 = document.getElementById("choose_input_3") as HTMLInputElement;
  
  const oneCard = `<img class="front-view" src ='/static/img/6 крести.svg'>`;
  const twoCard = `<img class="front-view" src ='/static/img/6 бубны.svg'>`;
  const threeCard = `<img class="front-view" src ='/static/img/6 черви.svg'>`;
  const fourCard = `<img class="front-view" src ='/static/img/6 пики.svg'>`;
  const fiveCard = `<img class="front-view" src ='/static/img/7 крести.svg'>`;
  const sixCard = `<img class="front-view" src ='/static/img/7 бубны.svg'>`;
  const sevenCard = `<img class="front-view" src ='/static/img/7 черви.svg'>`;
  const eightCard = `<img class="front-view" src ='/static/img/7 пики.svg'>`;
  const nineCard = `<img class="front-view" src ='/static/img/8 крести.svg'>`;
  const tenCard = `<img class="front-view" src ='/static/img/8 бубны.svg'>`;
  const elevenCard = `<img class="front-view" src ='/static/img/8 черви.svg'>`;
  const twelveCard = `<img class="front-view" src ='/static/img/8 пики.svg'>`;
  const thirteenCard = `<img class="front-view" src ='/static/img/9 крести.svg'>`;
  const fourteenCard = `<img class="front-view" src ='/static/img/9 бубны.svg'>`;
  const fifteenCard = `<img class="front-view" src ='/static/img/9 черви.svg'>`;
  const sixteenCard = `<img class="front-view" src ='/static/img/9 пики.svg'>`;
  const seventeenCard = `<img class="front-view" src ='/static/img/10 крести.svg'>`;
  const eighteenCard = `<img class="front-view" src ='/static/img/10 бубны.svg'>`;
  const nineteenCard = `<img class="front-view" src ='/static/img/10 черви.svg'>`;
  const twentyCard = `<img class="front-view" src ='/static/img/10 пики.svg'>`;
  const twentyOneCard = `<img class="front-view" src ='/static/img/валет крести.svg'>`;
  const twentyTwoCard = `<img class="front-view" src ='/static/img/валет бубны.svg'>`;
  const twentyThreeCard = `<img class="front-view" src ='/static/img/валет черви.svg'>`;
  const twentyFourCard = `<img class="front-view" src ='/static/img/валет пики.svg'>`;
  const twentyFiveCard = `<img class="front-view" src ='/static/img/дама крести.svg'>`;
  const twentySixCard = `<img class="front-view" src ='/static/img/дама бубны.svg'>`;
  const twentySevenCard = `<img class="front-view" src ='/static/img/дама черви.svg'>`;
  const twentyEightCard = `<img class="front-view" src ='/static/img/дама пики.svg'>`;
  const twentyNineCard = `<img class="front-view" src ='/static/img/король крести.svg'>`;
  const thirtyCard = `<img class="front-view" src ='/static/img/король бубны.svg'>`;
  const thirtyOneCard = `<img class="front-view" src ='/static/img/король черви.svg'>`;
  const thirtyTwoCard = `<img class="front-view" src ='/static/img/король пики.svg'>`;
  const thirtyThreeCard = `<img class="front-view" src ='/static/img/туз крести.svg'>`;
  const thirtyFourCard = `<img class="front-view" src ='/static/img/туз бубны.svg'>`;
  const thirtyFiveCard = `<img class="front-view" src ='/static/img/туз черви.svg'>`;
  const thirtySixCard = `<img class="front-view" src ='/static/img/туз пики.svg'>`;
  
  let copyOfTheCard = () => {
    const NUMBERS = [ oneCard, twoCard, threeCard, fourCard, fiveCard, sixCard, sevenCard, eightCard, nineCard, tenCard, elevenCard, twelveCard, thirteenCard, fourteenCard, fifteenCard, sixteenCard, seventeenCard, eighteenCard, nineteenCard, twentyCard, twentyOneCard, twentyTwoCard, twentyThreeCard, twentyFourCard, twentyFiveCard, twentySixCard, twentySevenCard, twentyEightCard, twentyNineCard, thirtyCard, thirtyOneCard, thirtyTwoCard, thirtyThreeCard, thirtyFourCard, thirtyFiveCard, thirtySixCard,
    ];
    const mathNumber = Math.floor(Math.random() * NUMBERS.length);
    return NUMBERS[mathNumber];
  };
  
  const copyOne = copyOfTheCard();
  const copyTwo = copyOfTheCard();
  const copyThree = copyOfTheCard();
  const copyFour = copyOfTheCard();
  const copyFive = copyOfTheCard();
  const copySix = copyOfTheCard();
  const copySeven = copyOfTheCard();
  const copyEight = copyOfTheCard();
  const copyNine = copyOfTheCard();
  const copyTen = copyOfTheCard();
  
  const renderLvL1 = `
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
                  <button class="goMainButton" id="goMainButton">Начать заново</button>
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
  </div>`;
  
  const renderLvL2 = `<div class="bodyContentRun">
    <div class="headerContent">
        <div class="timerMainAll">
                   <div class="timerMain">
                       <div class="timerMin"><p>min</p></div>
                       <div class="timerSec"><p>sec</p></div>
                   </div>
                   <div><h1 id="timer" class="timerTime">00:00</h1></div>
               </div>
  
  
        <div>
        <button class="goMainButton" id="goMainButton">Начать заново</button>
        </div>
    </div>
  
    <div class="allCards">
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
  </div>`;
  
  const renderLvL3 = `
  <div class="bodyContentRun">
    <div class="headerContent">
        <div class="timerMainAll">
                   <div class="timerMain">
                       <div class="timerMin"><p>min</p></div>
                       <div class="timerSec"><p>sec</p></div>
                   </div>
                   <div id="timer" class="timerTime">00:00</div>
               </div>
  
  
        <div>
        <button class="goMainButton" id="goMainButton">Начать заново</button>
        </div>
    </div>
  
    <div class="allCards">
    <div class="cards containsOne">${copyOne}<img class="back-view" src ="/static/img/рубашка.svg"></div>
  <div class="cards containsOne">${copyTwo}<img class="back-view" src ="/static/img/рубашка.svg"></div>
  <div class="cards containsOne">${copyThree}<img class="back-view" src ="/static/img/рубашка.svg"></div>
  <div class="cards containsTwo">${copyFour}<img class="back-view" src ="/static/img/рубашка.svg"></div>
  <div class="cards containsTwo">${copyFive}<img class="back-view" src ="/static/img/рубашка.svg"></div>
  <div class="cards containsTwo">${copySix}<img class="back-view" src ="/static/img/рубашка.svg"></div>
  <div class="cards">${copySeven}<img class="back-view" src ="/static/img/рубашка.svg"></div>
  <div class="cards">${copyEight}<img class="back-view" src ="/static/img/рубашка.svg"></div>
  <div class="cards">${copyNine}<img class="back-view" src ="/static/img/рубашка.svg"></div>
  <div class="cards containsOne">${copyOne}<img class="back-view" src ="/static/img/рубашка.svg"></div>
  <div class="cards containsOne">${copyTwo}<img class="back-view" src ="/static/img/рубашка.svg"></div>
  <div class="cards containsOne">${copyThree}<img class="back-view" src ="/static/img/рубашка.svg"></div>
  <div class="cards containsTwo">${copyFour}<img class="back-view" src ="/static/img/рубашка.svg"></div>
  <div class="cards containsTwo">${copyFive}<img class="back-view" src ="/static/img/рубашка.svg"></div>
  <div class="cards containsTwo">${copySix}<img class="back-view" src ="/static/img/рубашка.svg"></div>
  <div class="cards">${copySeven}<img class="back-view" src ="/static/img/рубашка.svg"></div>
  <div class="cards">${copyEight}<img class="back-view" src ="/static/img/рубашка.svg"></div>
  <div class="cards">${copyNine}<img class="back-view" src ="/static/img/рубашка.svg"></div>
    </div>
  </div>
  `;
  
  function shuffle() {
    let cards: NodeListOf<HTMLElement> = document.querySelectorAll(".cards");
    let positionOne: Element | null = document.querySelector(".containsOne");
    let positionTwo: Element | null = document.querySelector(".containsTwo");
    cards.forEach((card: HTMLElement) => {
      if (card.contains(positionOne)) {
        let randomPos1 = Math.floor(Math.random() * 6);
        card.style.order = randomPos1.toString();
      } else if (card.contains(positionTwo)) {
        let randomPos2 = Math.floor(Math.random() * 12);
        card.style.order = randomPos2.toString();
      } else {
        let randomPos3 = Math.floor(Math.random() * 20);
        card.style.order = randomPos3.toString();
      }
      card.classList.add("flip");
    });
}
  
  function cardGameTimeout() {
    let cards = document.querySelectorAll(".cards");
    shuffle();
  
    setTimeout(() => {
      for (const card of cards) {
        card.classList.remove("flip");
      }
  
      MainGameLogic();
    }, 5000);
  }
  
  let interval: string | number | NodeJS.Timeout | null | undefined = null;
  let seconds = 0;
  let minutes = 0;
  
  function startTimer() {
    function updateTime() {
      seconds++;
      if (seconds === 60) {
        minutes++;
        seconds = 0;
      }
      let timer = document.getElementById("timer") as HTMLElement;
      timer.textContent = `${minutes.toString().padStart(2, "0")}:${seconds
        .toString()
        .padStart(2, "0")}`;
    } 
    interval = setInterval(updateTime, 1000);
  }
  
  function stopTimer(interval: string | number | NodeJS.Timeout | undefined) {
    clearInterval(interval);
  }
  
  function MainGameLogic() {
    let cards = document.querySelectorAll(".cards");
    let hasFlippedCard: boolean | undefined | null = false;
    let firstCard: Element, secondCard: Element;
    let lockBoard: boolean | undefined | null = false;
  
    for (const card of cards) {
      card.addEventListener("click", function flipCard() {
        if (lockBoard) return;
        if (card === firstCard) return;
        card.classList.add("flip");
  
        if (!hasFlippedCard) {
          hasFlippedCard = true;
          firstCard = card;
          return;
        }
        secondCard = card;
  
        checkForMatch();
  
        function checkForMatch() {
          let isMatch = firstCard.innerHTML === secondCard.innerHTML;
          isMatch ? disableCards() : unFlipCards();
        }
  
        function disableCards() {
          firstCard.removeEventListener("click", flipCard);
          secondCard.removeEventListener("click", flipCard);
  
          if (document.querySelectorAll(".flip").length === cards.length) {
            
            stopTimer(interval);
            setTimeout(() => {
              let timer = document.getElementById("timer") as HTMLElement;
              //   Уведомление при победе
              const notification = document.createElement("div");
              notification.className = "result";
              notification.id = "result-win";
              const resultContent = document.createElement("div");
              resultContent.className = "resultContent";
              notification.appendChild(resultContent);
              const resultImg = document.createElement("img");
              resultImg.className = "resultImg";
              resultImg.src = "../static/img/win.svg";
              resultImg.alt = "Win";
              resultContent.appendChild(resultImg);
              const elements = [
                {
                  tag: "h3",
                  className: "resultHeader",
                  textContent: "Вы выиграли!",
                },
                {
                  tag: "p",
                  className: "resultText",
                  textContent: `Затраченное время:`,
                },
                {
                  tag: "p",
                  className: "resultTime",
                  id: "timeWin",
                  textContent: `${timer?.textContent}`,
                },
                {
                  tag: "button",
                  className: "mainContentGoButton",
                  id: "goMainButton",
                  textContent: "Играть снова",
                },
              ];
  
              elements.forEach((element) => {
                const el = document.createElement(element.tag);
                el.className = element.className;
                if (element.textContent) {
                  el.textContent = element.textContent;
                }
                if (element.id) {
                  el.id = element.id;
                }
                resultContent.appendChild(el);
              });
  
              document.body.appendChild(notification);
              const resetButton = document.querySelector(".mainContentGoButton") as HTMLElement;
              resetButton.addEventListener("click", () => {
                reloadPage();
              });
  
              timer.textContent = "00:00";
  
            }, 1000);
          }
          resetBoard();
        }
  
        function reloadPage() {
          window.location.reload();
        }
  
        function unFlipCards() {
          lockBoard = true;
  
          setTimeout(() => {
            firstCard.classList.remove("flip");
            secondCard.classList.remove("flip");
  
            resetBoard();
          }, 500);
  
          stopTimer(interval);
  
          setTimeout(() => {
            let timer = document.getElementById("timer") as HTMLElement;
          //   Уведомление при поражении  
            const notification = document.createElement("div");
            notification.className = "result";
            notification.id = "result-win";
            const resultContent = document.createElement("div");
            resultContent.className = "resultContent";
            notification.appendChild(resultContent);
            const resultImg = document.createElement("img");
            resultImg.className = "resultImg";
            resultImg.src = "../static/img/lose.svg";
            resultImg.alt = "Win";
            resultContent.appendChild(resultImg);
            const elements = [
              {
                tag: "h3",
                className: "resultHeader",
                textContent: "Вы проиграли(",
              },
              {
                tag: "p",
                className: "resultText",
                textContent: `Затраченное время:`,
              },
              {
                tag: "p",
                className: "resultTime",
                id: "timeWin",
                textContent: `${timer?.textContent}`,
              },
              {
                tag: "button",
                className: "mainContentGoButton",
                id: "goMainButton",
                textContent: "Играть снова",
              },
            ];
            elements.forEach((element) => {
              const el = document.createElement(element.tag);
              el.className = element.className;
              if (element.textContent) {
                el.textContent = element.textContent;
              }
              if (element.id) {
                el.id = element.id;
              }
              resultContent.appendChild(el);
            });
            document.body.appendChild(notification);
  
            const resetButton = document.querySelector(".mainContentGoButton") as HTMLElement;
            resetButton.addEventListener("click", () => {
              reloadPage();
            });
  
            timer.textContent = "00:00";
  
          }, 1000);
        }
  
        function resetBoard() {
          [hasFlippedCard, lockBoard] = [false, false];
        }
      });
    }
  }
  
  mainContent.addEventListener("submit", (event) => {
    event.preventDefault();
    if (selectInput1.checked) {
      BODY.innerHTML = renderLvL1;
      cardGameTimeout();
      startTimer();
    }
    if (selectInput2.checked) {
      BODY.innerHTML = renderLvL2;
      cardGameTimeout();
      startTimer();
    }
    if (selectInput3.checked) {
      BODY.innerHTML = renderLvL3;
      cardGameTimeout();
      startTimer();
    }
  
    const resetButtonGame = document.getElementById("goMainButton") as HTMLInputElement;
    resetButtonGame.addEventListener("click", () => {
      window.location.reload();
    });
  
  });
  