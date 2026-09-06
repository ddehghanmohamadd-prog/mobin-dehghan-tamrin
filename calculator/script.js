const display = document.getElementById("display");

function appendvalue(value) {
    display.value += value;
}

function cleardisplay() {
    display.value = "";
}

function calculate() {
    try {
        display.value = eval(display.value);
    } catch (e) {
        display.value = "Error";
    }
}