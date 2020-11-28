"use strict";
const ADMIN_PASSWORD = "jqueryismyjam";
const inputPass = prompt("Введите пароль");
let message;
if (inputPass === null) {
  message = "Отменено пользователем";
} else {
  if (ADMIN_PASSWORD === inputPass) {
    message = "Добро пожаловать!";
  } else {
    message = "Доступ запрещен, неверный пароль!";
  }
}
alert(message);
