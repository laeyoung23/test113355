let display = document.getElementById('display');
let digits = Array.from(document.getElementsByClassName('digit'));
let operators = Array.from(document.getElementsByClassName('operator'));
let clear = document.getElementById('clear');
let equals = document.getElementById('equals');

digits.map( button => {
    button.addEventListener('click', (e) => {
        e.preventDefault();
        display.value += e.target.value;
    })
});

operators.map( button => {
    button.addEventListener('click', (e) => {
        e.preventDefault();
        if(display.value !== '') {
            display.value += e.target.value;
        }
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
