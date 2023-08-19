document.getElementById('btn-papa-id').addEventListener('click', function () {
    // step-1-pleas deposit
    const depositField = document.getElementById('deposit-id');
    const depositFinal = depositField.value;
    const newDeposit = parseFloat(depositFinal)
    // step-2-deposit
    const onlyDeposit = document.getElementById('deposit-header');
    const betterDeposit = onlyDeposit.innerText;
    const betterDepositString = parseFloat(betterDeposit);
    const currentAmount = newDeposit + betterDepositString;
    onlyDeposit.innerText = currentAmount;
    // step-3-balance
    const balanceDeposit = document.getElementById('balance-id');
    const balanceAdd = balanceDeposit.innerText;
    const balanceString = parseFloat(balanceAdd);
    const currentBalance = balanceString + newDeposit;
    balanceDeposit.innerText = currentBalance;

    depositField.value = '';
})