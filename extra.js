document.getElementById('btn-id-bank').addEventListener('click', function () {
    const withdrawInput = document.getElementById('withdraw-id');
    const withdrawValue = withdrawInput.value;
    const withdrawValueString = parseFloat(withdrawValue);

    const withdrawText = document.getElementById('withdraw-balance');
    const withdrawInner = withdrawText.innerText;
    const withdrawString = parseFloat(withdrawInner);

    const currentWithdrawBalance = withdrawValueString + withdrawString;
    withdrawText.innerText = currentWithdrawBalance;

    const balanceDeposit = document.getElementById('balance-id');
    const balanceAdd = balanceDeposit.innerText;
    const balanceString = parseFloat(balanceAdd);
    const currentBalance = balanceString - withdrawValueString;
    balanceDeposit.innerText = currentBalance;

    withdrawInput.value = '';
})