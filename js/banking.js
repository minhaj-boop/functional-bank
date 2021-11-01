//handle deposit button event

function getInputValue(input) {
    const inputField = document.getElementById(input);
    const inputFiledAmountText = inputField.value;
    const inputFieldAmount = parseFloat(inputFiledAmountText);
    // clear deposit input filed
    inputField.value = '';
    return inputFieldAmount;
}

function updateTotalAmount(amount, id) {
    const totalAmount = document.getElementById(id);
    const previousTotalAmountText = totalAmount.innerText;
    const previousDepositAmount = parseFloat(previousTotalAmountText);
    const newTotalAmount = parseFloat(previousDepositAmount + amount);
    totalAmount.innerText = newTotalAmount;
}

function getBalance() {
    const balanceTotal = document.getElementById('balance-total');
    const previousBalance = balanceTotal.innerText;
    return previousBalance;
}

function updateAccountBalance(amount, isAdd) {
    const balanceTotal = document.getElementById('balance-total');
    const previousBalance = getBalance();
    let newBalance = 0;
    if(isAdd == true) {
        newBalance = amount + parseFloat(previousBalance);
    } else {
        newBalance = parseFloat(previousBalance) - amount;
    }
    balanceTotal.innerText = newBalance; 
}

document.getElementById('deposit-button').addEventListener('click', function() {
    //get the amount deposited
    const newDepositAmount = getInputValue('deposit-input');

    if(newDepositAmount > 0) {
        updateTotalAmount(newDepositAmount, 'deposit-total');
        // update account balance
        updateAccountBalance(newDepositAmount,true);
    }
});

// handle withdraw button event
document.getElementById('withdraw-button').addEventListener('click', function() {
    //get amount withdrawn
    const newWithdrawAmount = getInputValue('withdraw-input');

    const currentBalance = getBalance();
    if(newWithdrawAmount > 0 && newWithdrawAmount < currentBalance) {
        updateTotalAmount(newWithdrawAmount,'withdraw-total');
        // update account balance
        updateAccountBalance(newWithdrawAmount,false);
    }
});
