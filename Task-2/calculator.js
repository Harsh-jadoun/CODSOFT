const display = document.getElementById('display');
const buttons = document.querySelectorAll('.btn');

buttons.forEach(button => {
    button.addEventListener('click', () => {
        const value = button.textContent;

        if (value === '=') {
            try {
                let expr = display.value.replace('×', '*').replace('÷', '/');
                display.value = eval(expr);
            } catch {
                display.value = 'Error';
            }
        } else if (value === 'backspace') {
            display.value = display.value.slice(0, -1);
        } else if (value === 'Remainder') {
            let parts = display.value.split('%');
            if (parts.length === 2) {
                display.value = parseInt(parts[0]) % parseInt(parts[1]);
            }
        } else {
            display.value += value;
        }
    });
});
