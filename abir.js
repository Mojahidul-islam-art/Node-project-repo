document.getElementById('btn-id').addEventListener('click', function () {
    const emailItem = document.getElementById('email-id');
    const email = emailItem.value;
    const passItem = document.getElementById('password-id');
    const pass = passItem.value;

    if (email == 'mojahidmiah37@gmail.com' && pass == 'secret') {
        window.location.href = 'bank.html';
    }
    else {
        alert("your information is invalid.write the correct information")
    }
})
