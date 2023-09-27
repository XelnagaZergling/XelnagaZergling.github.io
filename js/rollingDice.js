const numOfSidesInput = document.getElementById("numOfSides");
const numOfDiceInput = document.getElementById("numOfDice");
const modifierInput = document.getElementById("modifier");
const addRadio = document.getElementById("add");
const subtractRadio = document.getElementById("subtract");
const rangeSpan = document.getElementById("range");

function displayRange() {
    const numOfSides = parseInt(numOfSidesInput.value);
    const numOfDice = parseInt(numOfDiceInput.value);
    const modifierValue = modifierInput.value.trim() === '' ? 0 : parseInt(modifierInput.value);
    const operation = addRadio.checked ? 1 : -1;

    if (numOfSides <= 0 || numOfDice <= 0) {
        alert("骰子的面数和数量必须大于0，请重新输入。");
        // 清空输入框
        numOfSidesInput.value = "";
        numOfDiceInput.value = "";
        modifierInput.value = "";
        rangeSpan.textContent = "";
        return;
    }

    if (modifierValue < 0) {
        alert("修正值必须大于等于0，请重新输入。");
        // 清空输入框
        modifierInput.value = "";
        rangeSpan.textContent = "";
        return;
    }

    let minResult = numOfDice;
    let maxResult = numOfDice;

    if (numOfSides > 1) {
        minResult *= 1;
        maxResult *= numOfSides;
    }

    minResult += modifierValue * operation;
    maxResult += modifierValue * operation;

    if (minResult < 0 || maxResult < 0) {
        alert("范围不能包含负数，请重新输入。");
        // 清空输入框
        modifierInput.value = "";
        rangeSpan.textContent = "";
        return;
    }

    rangeSpan.textContent = `${minResult} - ${maxResult}`;
}

numOfSidesInput.addEventListener("input", displayRange);
numOfDiceInput.addEventListener("input", displayRange);
modifierInput.addEventListener("input", displayRange);
addRadio.addEventListener("change", displayRange);
subtractRadio.addEventListener("change", displayRange);


// 投骰子
function rollDice() {
    const numOfSides = parseInt(document.getElementById("numOfSides").value);
    const numOfDice = parseInt(document.getElementById("numOfDice").value);
    const modifierValue = modifierInput.value.trim() === '' ? 0 : parseInt(modifierInput.value);
    const operation = addRadio.checked ? 1 : -1;

    const results = [];

    for (let i = 0; i < numOfDice; i++) {
        const roll = Math.floor(Math.random() * numOfSides) + 1;
        results.push(roll);
    }

    const totalResult = results.reduce((a, b) => a + b, 0) + modifierValue * operation;
    document.getElementById("result").textContent = results.join(" + ") + ` ${addRadio.checked ? '+' : '-'} ${modifierValue} = ${totalResult}`;
}