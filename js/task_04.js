"use strict";
let credits = 23580;
const pricePerDroid = 3000;

const inputDroidQty = prompt("Введите количество дроидов:");

if (inputDroidQty === null) {
  console.log("Отменено пользователем!");
} else {
  const totalPrice = inputDroidQty * pricePerDroid;
  console.log(totalPrice);

  if (credits < totalPrice) {
      console.log("Недостаточно средств на счету!");
    alert("Недостаточно средств на счету!");
  } else {
    credits = credits - totalPrice;

    const message = `Вы купили ${inputDroidQty} дроидов, на счету осталось ${credits} кредитов.`;
    alert(message);
  }
}
