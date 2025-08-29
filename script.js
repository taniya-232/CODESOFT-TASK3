const display = document.getElementById("display");
const buttons = document.querySelectorAll(".btn");

let currentInput = "";

buttons.forEach(button => {
    button.addEventListener("click", () => {
        const value = button.getAttribute("data-value");

        if (value === "C") {
            currentInput = "";
            display.value = "";
        } else if (value === "=") {
            try {
                display.value = eval(currentInput) || "";
                currentInput = display.value;
            } catch {
                display.value = "Error";
                currentInput = "";
            }
        } else {
            currentInput += value;
            display.value = currentInput;
        }
    });
});
