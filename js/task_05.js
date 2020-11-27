"use strict";
let deliveryCost;
let inputDestination = prompt("Введите страну доставки товара.");

switch (inputDestination.toUpperCase()) {
  case "КИТАЙ":
    deliveryCost = 100;
    alert(
      `Доставка в ${inputDestination} будет стоить ${deliveryCost} кредитов`
    );
    break;
  case "ЧИЛИ":
    deliveryCost = 250;
    alert(
      `Доставка в ${inputDestination} будет стоить ${deliveryCost} кредитов`
    );
    break;
  case "АВСТРАЛИЯ":
    deliveryCost = 170;
    alert(
      `Доставка в ${inputDestination} будет стоить ${deliveryCost} кредитов`
    );
    break;
  case "ИНДИЯ":
    deliveryCost = 80;
    alert(
      `Доставка в ${inputDestination} будет стоить ${deliveryCost} кредитов`
    );
    break;
  case "ЯМАЙКА":
    deliveryCost = 120;
    alert(
      `Доставка в ${inputDestination} будет стоить ${deliveryCost} кредитов`
    );
    break;

  default:
    alert("В вашей стране доставка не доступна.");
}
