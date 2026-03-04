const displayText = document.getElementById("display");

function addToDisplay(button) {
    displayText.value += button;
}

function clearText() {
    displayText.value = "";
}

function calculate() {
    try {
        displayText.value = eval(displayText.value)
    }
    catch(err) {
        displayText.value = "Error"
    }
}