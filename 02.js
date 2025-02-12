const num = prompt("Введите число:");
const number = Number(num);

if (isNaN(number)) {
    console.log("Пожалуйста, введите корректное число.");
} else {
    if (number % 2 === 0) {
        console.log("Это чётное число");
    } else {
        console.log("Это нечётное число");
    }
}