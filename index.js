const display = document.getElementById("display");
var text;
function appendToDisplay(input) {
    display.value += input;
    text=display.value
    console.log(text)
}

function clearDisplay() {
    display.value = "";
}
const percentage=()=>{
    display.value=text/100;
}
function calculateResult() {
    try {
        display.value = eval(display.value);
    } catch (error) {
        display.value = "Error";
    }
}
const removeinput=()=>{
    console.log("remove",text)
    text=text.slice(0, -1)
    display.value=text;
}
