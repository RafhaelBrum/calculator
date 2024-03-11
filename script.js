const display = document.getElementById("display");
var historyList = document.getElementById('history');

function appendToDisplay(input) {
    display.value += input;
}

function clearDisplay() {
    display.value = "";
}

function calculate() {
    var currentValue = display.value;
    if (currentValue !== '') {
        var expression = currentValue;
        var result = eval(currentValue);
        var historyItem = document.createElement('li');

        historyItem.textContent = expression + ' = ' + result;
        historyList.appendChild(historyItem);

        display.value = result;
    }
}

function deleteLastNumber() {
    var currentValue = display.value;

    if (currentValue.length > 0) {
        var newDisplay = currentValue.slice(0, -1);
        display.value = newDisplay;
    }
}



