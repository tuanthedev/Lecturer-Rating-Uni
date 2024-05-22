//Use this code at the console in browser's dev mode / F12
const NUMBER_OF_STARS = 5; // Rate your lecturer
const FEEDBACK_TEXT = ""; // Enter your feedback

const tbodies = document.querySelectorAll("tbody");

tbodies.forEach((tbody) => {
const radioButtons = tbody.querySelectorAll('input[type="radio"]');

if (radioButtons.length >= NUMBER_OF_STARS) {
    radioButtons[NUMBER_OF_STARS - 1].click();
}
});

const textarea = document.getElementById("20");
textarea.value = FEEDBACK_TEXT;

const inputEvent = new Event("input", {
bubbles: true,
cancelable: true,
});
textarea.dispatchEvent(inputEvent);

setTimeout(() => {
const buttons = document.querySelectorAll("button.btn.btn-outline-primary");

buttons.forEach((button) => {
    if (button.textContent.includes("Gửi")) {
    button.click();
    }
});
}, 3000);