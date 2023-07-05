let display = document.getElementById('display');
let buttons = Array.from(document.getElementsByClassName('operator'));
let clear = document.getElementById('clear');
let equals = document.getElementById('equals');

buttons.map( button => {
    button.addEventListener('click', (e) => {
        e.preventDefault();
        let operator = e.target.innerText;
        let displayVal = display.value;
        display.value += operator;
    })
});

clear.addEventListener('click', (e) => {
    e.preventDefault();
    display.value = '';
});

equals.addEventListener('click', (e) => {
    e.preventDefault();
    try {
        let answer = eval(display.value);
        display.value = answer;
    } catch {
        display.value = '';
    }
});
