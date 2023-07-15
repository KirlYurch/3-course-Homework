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

export let copyOfTheCard = () => {
  const NUMBERS = [
    oneCard,
    twoCard,
    threeCard,
    fourCard,
    fiveCard,
    sixCard,
    sevenCard,
    eightCard,
    nineCard,
    tenCard,
    elevenCard,
    twelveCard,
    thirteenCard,
    fourteenCard,
    fifteenCard,
    sixteenCard,
    seventeenCard,
    eighteenCard,
    nineteenCard,
    twentyCard,
    twentyOneCard,
    twentyTwoCard,
    twentyThreeCard,
    twentyFourCard,
    twentyFiveCard,
    twentySixCard,
    twentySevenCard,
    twentyEightCard,
    twentyNineCard,
    thirtyCard,
    thirtyOneCard,
    thirtyTwoCard,
    thirtyThreeCard,
    thirtyFourCard,
    thirtyFiveCard,
    thirtySixCard,
  ];
  const mathNumber = Math.floor(Math.random() * NUMBERS.length);
  return NUMBERS[mathNumber];
};

export const copyOne = copyOfTheCard();
export const copyTwo = copyOfTheCard();
export const copyThree = copyOfTheCard();
export const copyFour = copyOfTheCard();
export const copyFive = copyOfTheCard();
export const copySix = copyOfTheCard();
export const copySeven = copyOfTheCard();
export const copyEight = copyOfTheCard();
export const copyNine = copyOfTheCard();
export const copyTen = copyOfTheCard();

export function shuffle() {
  let cards = document.querySelectorAll(".cards");
  let positionOne = document.querySelector(".containsOne");
  let positionTwo = document.querySelector(".containsTwo");
  cards.forEach((card) => {
    if (card.contains(positionOne)) {
      let randomPos1 = Math.floor(Math.random() * 6);
      card.style.order = randomPos1;
    } else if (card.contains(positionTwo)) {
      let randomPos2 = Math.floor(Math.random() * 12);
      card.style.order = randomPos2;
    } else {
      let randomPos3 = Math.floor(Math.random() * 20);
      card.style.order = randomPos3;
    }
    card.classList.add("flip");
  });
}

export function cardGameTimeout() {
  let cards = document.querySelectorAll(".cards");
  shuffle();

  setTimeout(() => {
    for (const card of cards) {
      card.classList.remove("flip");
    }

    cardGame();
  }, 5000);
}

let interval = null;
let seconds = 0;
let minutes = 0;

export function startTimer() {
  function updateTime() {
    seconds++;
    if (seconds === 60) {
      minutes++;
      seconds = 0;
    }

    timer.textContent = `${minutes.toString().padStart(2, "0")}:${seconds
      .toString()
      .padStart(2, "0")}`;
  }
  interval = setInterval(updateTime, 1000);
}

function stopTimer(interval) {
  clearInterval(interval);
}

export function cardGame() {
  let cards = document.querySelectorAll(".cards");
  let hasFlippedCard = false;
  let firstCard, secondCard;
  let lockBoard = false;

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
                textContent: `${timer.textContent}`,
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
              textContent: `${timer.textContent}`,
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

          timer.textContent = "00:00";
        }, 1000);
      }

      function resetBoard() {
        [hasFlippedCard, lockBoard] = [false, false][(firstCard, secondCard)] =
          [null, null];
      }
    });
  }
}
