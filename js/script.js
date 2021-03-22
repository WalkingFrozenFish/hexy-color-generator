let button = document.querySelector(".button");
button.addEventListener("click", generateColor);

function generateColor() {
    let arrChars = ["A", "B", "C", "D", "E", "F"];
    let arrNums = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

    let resultColor = [];

    for (var i = 0; i < 6; i++) {
        let randomNum = Math.floor(Math.random() * 2) + 1;
        // let randomNum = Math.floor(Math.random() * 2);

        if (randomNum == 1) {
            resultColor.push(Math.floor(Math.random() * (arrNums.length - 0)) + 0);
            // resultColor.push(Math.floor(Math.random() * arrNums.length));
        } else {
            resultColor.push(arrChars[Math.floor(Math.random() * (arrChars.length - 0)) + 0]);
            // resultColor.push(arrChars[Math.floor(Math.random() * arrChars.length)]);
        }

    }

    console.log(`Result color: #${resultColor.join("")}`);
    document.querySelector(".colors").style.backgroundColor = "#" + resultColor.join("");
    document.querySelector(".hexy").textContent = "#" + resultColor.join("")

}



