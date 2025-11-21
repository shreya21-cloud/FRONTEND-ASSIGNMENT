const textBox = document.getElementById("textBox");
const counter = document.getElementById("counter");

const maxChars = 100;

counter.textContent = `Characters left: ${maxChars}`;
counter.style.color = "green";

textBox.addEventListener("input", function () {
    let textLength = textBox.value.length;
    let charsLeft = maxChars - textLength;


    if (textLength >= maxChars) {
        textBox.value = textBox.value.substring(0, maxChars);
        charsLeft = 0;
    }

    counter.textContent = `Characters left: ${charsLeft}`;

    
    if (charsLeft > 50) {
        counter.style.color = "green";
    } else if (charsLeft > 20) {
        counter.style.color = "orange";
    } else {
        counter.style.color = "red";
    }
});
