let inputbox = document.querySelector("#inputbox");
let buttons = document.querySelectorAll("button");

let string = "";
let arr = Array.from(buttons);

arr.forEach(button => {
    button.addEventListener('click', (e) => {
        if (e.target.innerText === '=') {
            try {
                string = eval(string); // Evaluates the expression
                inputbox.value = string;
            } catch {
                inputbox.value = "Error"; // Displays error if invalid input
                string = "";
            }
        } 
        else if (e.target.innerText === 'DEL') {
            string = string.substring(0, string.length - 1); // Removes last character
            inputbox.value = string;
        } 
        else if (e.target.innerText === 'AC') {
            string = ""; // Clears input
            inputbox.value = string;
        } 
        else {
            string += e.target.innerText; // Adds clicked button value
            inputbox.value = string;
        }
    });
});
