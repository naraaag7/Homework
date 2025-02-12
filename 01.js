const ageInput = prompt("Введите ваш возраст:");
const age = Number(ageInput);

if (isNaN(age)) {
    console.log("Возникла какая-то ошибка");
} else if (age < 65) {
    console.log("Вам ещё рано на пенсию");
} else {
    console.log("Поздравляем с пенсионным возрастом!");
}