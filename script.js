const errorMsg = document.querySelector('.error-msg');
const emailInput = document.querySelector('.email-input');
const validReg = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

const checkEmail = () => {
    if(emailInput.value.match(validReg)) {
        emailInput.style.outline = '1px solid var(--color-gray)'
        emailInput.value = '';
        errorMsg.style.display = 'none';
    }
    else {
        emailInput.style.outline = '1px solid var(--color-light-red)'
        errorMsg.style.display = 'block';
    }
}