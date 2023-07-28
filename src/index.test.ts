
// Пример работоспособности наипростейших тестов, с принятием аргументов и возвращением результатов
import { testingExampleOne, testingExampleTwo} from './polygon';

// Тестирование функции, которая возвращает значение
test('should add two numbers correctly', () => {
  expect(testingExampleOne(2, 3)).toBe(5);
});

// Тестирование асинхронной функции:
describe('fetchData function', () => {
  test('should fetch data', async () => {
    const data = await testingExampleTwo();
    expect(data).toMatchSnapshot();
  });
});










// import { startTimer } from './index';
//   test("startTimer функция должна корректно обновлять таймер", () => {
//     // Создание заглушки для document.getElementById
//     document.getElementById = jest.fn().mockReturnValue({
//       textContent: "",
//     });
  
//     // Установка начальных значений для seconds и minutes
//     let seconds = 0;
//     let minutes = 0;
   
//     // Создание заглушки для setInterval
//     const interval = jest.spyOn(global, "setInterval");
  
//     // Вызов функции startTimer
//     startTimer();
  
//     // Проверка вызова setInterval
//     expect(interval).toHaveBeenCalledWith(expect.any(Function), 1000);
  
//     // // Проверка обновления времени
//     // expect(document.getElementById("timer").textContent).toBe("00:01"); // Пример значения после первой секунды
  
//     // // Проверка обновления времени после 59 секунд
//     // for (let i = 0; i < 59; i++) {
//     //   jest.advanceTimersByTime(1000);
//     // }
//     // expect(document.getElementById("timer").textContent).toBe("01:00"); // Пример значения после 1 минуты
  
//     // // Проверка обновления времени после 1 минуты и 59 секунд
//     // for (let i = 0; i < 59; i++) {
//     //   jest.advanceTimersByTime(1000);
//     // }
//     // expect(document.getElementById("timer").textContent).toBe("02:00"); // Пример значения после 2 минуты
  
//     // // Остановка таймера
//     // clearInterval(interval);
//   });





