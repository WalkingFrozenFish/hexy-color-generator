// Кнопка для генерации цвета
let button = document.querySelector(".button");
button.addEventListener("click", generateColor);

// Копирование кода в буфер обмена
let copy = document.querySelector(".hexy");
copy.addEventListener("click", function(event) {
    let elem = event.target;
    navigator.clipboard.writeText(elem.innerHTML);
});

function generateColor() {
    // Массивы для генерации
    let arrChars = ["A", "B", "C", "D", "E", "F"];
    let arrNums = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

    // Массив результат
    let resultColor = [];

    for (var i = 0; i < 6; i++) {
        // По рандомному числу определяем что будет в коде, буква или цифра
        let randomNum = Math.floor(Math.random() * 2) + 1;
        // let randomNum = Math.floor(Math.random() * 2);

        // Если единица, то в результат пойдет число, иначе буква
        if (randomNum == 1) {
            resultColor.push(Math.floor(Math.random() * (arrNums.length - 0)) + 0);
            // resultColor.push(Math.floor(Math.random() * arrNums.length));
        } else {
            resultColor.push(arrChars[Math.floor(Math.random() * (arrChars.length - 0)) + 0]);
            // resultColor.push(arrChars[Math.floor(Math.random() * arrChars.length)]);
        }

    }

    // Генерируем код цвета
    console.log(`Result color: #${resultColor.join("")}`);
    document.querySelector(".colors").style.backgroundColor = "#" + resultColor.join("");
    document.querySelector(".hexy").textContent = "#" + resultColor.join("")

}



