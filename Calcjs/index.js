function appendValue(value) {
    document.getElementById('display').value += value;
}

function CalcClear() {
    document.getElementById('display').value = '';
}

function Calc() {
    try {
        const result = eval(document.getElementById('display').value);
        document.getElementById('display').value = result;
    } catch (error) {
        document.getElementById('display').value = 'Error';
    }
}
