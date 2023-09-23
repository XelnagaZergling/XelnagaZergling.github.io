function generatePassword() {
    const length = parseInt(document.getElementById('length').value);
    const includeUppercase = document.getElementById('uppercase').checked;
    const includeNumbers = document.getElementById('numbers').checked;

    const lowercaseChars = 'abcdefghijklmnopqrstuvwxyz';
    const uppercaseChars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    const numberChars = '0123456789';

    let chars = lowercaseChars;
    if (includeUppercase) {
        chars += uppercaseChars;
    }
    if (includeNumbers) {
        chars += numberChars;
    }

    let password = '';
    for (let i = 0; i < length; i++) {
        const randomIndex = Math.floor(Math.random() * chars.length);
        password += chars[randomIndex];
    }

    const passwordElement = document.getElementById('password');
    passwordElement.textContent = password;
    const copyButton = document.getElementById('copyButton');

    if (password) {
        copyButton.removeAttribute('disabled');
    } else {
        copyButton.setAttribute('disabled', 'true');
    }
}
function copyPasswordToClipboard() {
    const passwordElement = document.getElementById('password');
    const password = passwordElement.textContent;

    if (password) {
        const tempInput = document.createElement('textarea');
        tempInput.value = password;
        document.body.appendChild(tempInput);
        tempInput.select();
        document.execCommand('copy');
        document.body.removeChild(tempInput);
        alert('密码已复制到剪贴板');
    } else {
        alert('密码尚未生成，请点击"生成密码"按钮生成密码。');
    }
}