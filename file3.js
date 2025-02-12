const ageInput = prompt("Введите ваш возраст:");
const age = Number(ageInput);

if (isNaN(age)) {
    console.log("Возникла какая-то ошибка");
} else if (age < 18) {
    console.log("Несовершеннолетний");
} else {
    console.log("Совершеннолетний");
}