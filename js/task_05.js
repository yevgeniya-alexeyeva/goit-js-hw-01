"use strict";
let deliveryCost;
const inputDestination = prompt("Введите страну доставки товара.");

if (inputDestination === null) {
    console.log('Отменено пользователем')
} else {
    switch (inputDestination.toUpperCase()) {
        case "КИТАЙ":
          deliveryCost = 100;
          break;
        case "ЧИЛИ":
          deliveryCost = 250;
          break;
        case "АВСТРАЛИЯ":
          deliveryCost = 170;
          break;
        case "ИНДИЯ":
          deliveryCost = 80;
          break;
        case "ЯМАЙКА":
          deliveryCost = 120;
          break;
      
        default:
          alert("В вашей стране доставка не доступна.");
      }
      if(deliveryCost) {alert(
          `Доставка в ${inputDestination.toUpperCase()} будет стоить ${deliveryCost} кредитов`
        );}
}


