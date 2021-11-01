//handle deposit button event

function getInputValue(input) {
    const inputField = document.getElementById(input);
    const inputFiledAmountText = inputField.value;
    const inputFieldAmount = parseFloat(inputFiledAmountText);
    // clear deposit input filed
    inputField.value = '';
    return inputFieldAmount;


}

document.getElementById('deposit-button').addEventListener('click', function() {
    //get the amount deposited
    // const depositInput = document.getElementById('deposit-input');
    // const newDepositAmountText = depositInput.value;
    // const newDepositAmount = parseFloat(newDepositAmountText);
    const newDepositAmount = getInputValue('deposit-input');

    const depositTotal = document.getElementById('deposit-total');
    const previousDepositAmountText = depositTotal.innerText;
    const previousDepositAmount = parseFloat(previousDepositAmountText);
    const newDepositTotal = parseFloat(previousDepositAmount + newDepositAmount);
    depositTotal.innerText = newDepositTotal;

    // update account balance
    const balanceTotal = document.getElementById('balance-total');
    const previousBalance = parseFloat(balanceTotal.innerText);
    const newBalance = parseFloat(newDepositAmount) + previousBalance;
    balanceTotal.innerText = newBalance; 
});

// handle withdraw button event
document.getElementById('withdraw-button').addEventListener('click', function() {
    // const withdrawInput = document.getElementById('withdraw-input');
    // const newWithdrawAmount = parseFloat(withdrawInput.value);
    const newWithdrawAmount = getInputValue('withdraw-input');

    const withdrawTotal = document.getElementById('withdraw-total');
    const previousWithdrawAmount = parseFloat(withdrawTotal.innerText);
    const newWithdrawTotal = previousWithdrawAmount + newWithdrawAmount
    withdrawTotal.innerText = newWithdrawTotal;

    // update account balance
    const balanceTotal = document.getElementById('balance-total');
    const previousBalance = parseFloat(balanceTotal.innerText);
    const newBalance = previousBalance - newWithdrawAmount;
    balanceTotal.innerText = newBalance;
});
