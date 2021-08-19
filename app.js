function inputId(input, isWorking, price) {
    const inputField = document.getElementById(input);
    let inputFieldValue = parseInt(inputField.value);
    if (isWorking == true) {
        inputFieldValue = inputFieldValue + 1;
    }
    else if (inputFieldValue > 0) {
        inputFieldValue = inputFieldValue - 1;
    }
    inputField.value = inputFieldValue;
    const inputFieldPrice = document.getElementById(input + 'Price');
    inputFieldPrice.innerText = inputFieldValue * price;

    calculateTotal();
}

function getTotal(inputId) {
    const inputField = document.getElementById(inputId);
    const inputFieldValue = parseFloat(inputField.value);
    return inputFieldValue;
}

function calculateTotal() {
    const phoneFieldTotal = getTotal('phoneField') * 1219;
    const caseFieldTotal = getTotal('caseField') * 59;
    const totalFields = phoneFieldTotal + caseFieldTotal;
    const sub = document.getElementById('subTotal');
    sub.innerText = totalFields;
    const tax = document.getElementById('taxTotal');
    tax.innerText = totalFields / 10;
    const total = document.getElementById('total');
    total.innerText = parseFloat(sub.innerText) + parseFloat(tax.innerText);
}


document.getElementById('casePlus').addEventListener('click', function () {
    inputId('caseField', true, 59);
})
document.getElementById('caseMinus').addEventListener('click', function () {
    inputId('caseField', false, 59);
})
document.getElementById('phonePlus').addEventListener('click', function () {
    inputId('phoneField', true, 1219);
})
document.getElementById('phoneMinus').addEventListener('click', function () {
    inputId('phoneField', false, 1219);
})
