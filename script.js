document.addEventListener('DOMContentLoaded', function () {
    const buttons = document.querySelectorAll('.button');
    const display = document.querySelector('#display');
    let expression = '';

    buttons.forEach(button => {
        button.addEventListener('click', function () {
            const value = this.value;

            if (value === 'C') {
                expression = '';
            } else if (value === '=') {
                try {
                    expression = eval(expression);
                } catch {
                    expression = 'Error';
                }
            } else {
                expression += value === 'x' ? '*' : value;
            }

            display.value = expression;
        });
    });
});
