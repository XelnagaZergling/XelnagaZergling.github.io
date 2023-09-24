const allCards = [
    { image: '../images/tool/arcanaDivination/spire_front.png', meaning: '建筑相关的事情/创造的成功与灵感的乍现。', name: '建筑神之塔 [正位] 建筑与工艺之神比尔格', position: 1 },
    { image: '../images/tool/arcanaDivination/ewer_front.png', meaning: '学术相关的事情/知识与情感的流动。', name: '河流神之瓶 [正位] 河流与知识之神沙利亚克', position: 2 },
    { image: '../images/tool/arcanaDivination/bole_front.png', meaning: '大地、农业相关的事情/稳固和丰饶的生命力。', name: '世界树之干 [正位] 大地与丰饶女神诺菲卡', position: 3 },
    { image: '../images/tool/arcanaDivination/arrow_front.png', meaning: '水、海、船相关的事情/未来的探索和新的冒险。', name: '放浪神之箭 [正位] 海洋与航海女神利姆莱茵', position: 4 },
    { image: '../images/tool/arcanaDivination/balance_front.png', meaning: '法律、审判相关的事情/光明和公正的审判。', name: '太阳神之衡 [正位] 太阳与审理女神阿泽玛', position: 5 },
    { image: '../images/tool/arcanaDivination/spear_front.png', meaning: '战斗相关的事情/战斗的胜利和决心。', name: '战争神之枪 [正位] 冰河与战争女神哈罗妮', position: 6 },
    { image: '../images/tool/arcanaDivination/spire_back.png', meaning: '挑战与苦难的考验。', name: '建筑神之塔 [逆位] 彗星与破坏之神拉尔戈', position: -1 },
    { image: '../images/tool/arcanaDivination/ewer_back.png', meaning: '情感与知识的阻滞与混乱。', name: '河流神之瓶 [逆位] 行星与命运女神妮美雅', position: -2 },
    { image: '../images/tool/arcanaDivination/bole_back.png', meaning: '时间的紧迫和自身的不稳定。', name: '世界树之干 [逆位] 重力与光阴之神阿尔基克', position: -3 },
    { image: '../images/tool/arcanaDivination/arrow_back.png', meaning: '迷失与不安的方向。', name: '放浪神之箭 [逆位] 山岳与放浪之神奥修昂', position: -4 },
    { image: '../images/tool/arcanaDivination/balance_back.png', meaning: '商业交易的损失和未知的挑战。', name: '太阳神之衡 [逆位] 地底与商贸之神纳尔札尔', position: -5 },
    { image: '../images/tool/arcanaDivination/spear_back.png', meaning: '冲突的结束和和平的重返。', name: '战争神之枪 [逆位] 双月与慈爱女神梅茵菲娜', position: -6 }
];

function drawCards() {
    const cardContainer = document.getElementById('cardContainer');
    cardContainer.innerHTML = '';

    const drawnCards = [];
    const availableCards = [...allCards];

    for (let i = 0; i < 3; i++) {
        const randomIndex = Math.floor(Math.random() * availableCards.length);
        const randomCard = availableCards.splice(randomIndex, 1)[0];

        drawnCards.push(randomCard);
        

        const positionP = document.createElement('p');
        if (i === 0) {
            positionP.textContent = '过去';
        } else if (i === 1) {
            positionP.textContent = '现在';
        } else {
            positionP.textContent = '未来';
        }
        cardContainer.appendChild(positionP);

        const cardImage = document.createElement('img');
        cardImage.src = randomCard.image;
        cardImage.alt = '卡片';
        cardContainer.appendChild(cardImage);


        const nameP = document.createElement('p');
        nameP.textContent = randomCard.name;
        cardContainer.appendChild(nameP);

        const meaningP = document.createElement('p');
        meaningP.textContent = '意义：' + randomCard.meaning;
        cardContainer.appendChild(meaningP);

        // 移除相应的逆位或正位卡
        const positionToRemove = randomCard.position > 0 ? -randomCard.position : Math.abs(randomCard.position);
        const indexToRemove = availableCards.findIndex(card => card.position === positionToRemove);
        if (indexToRemove !== -1) {
            availableCards.splice(indexToRemove, 1);
        }
    }
}

const drawnCards = [
    { image: '../images/tool/arcanaDivination/spire_front.png', name: '[正位] 建筑与工艺之神比尔格', meaning: '第一张卡的正面意义' },
    { image: '../images/tool/arcanaDivination/ewer_front.png', name: '[正位] 河流与知识之神沙利亚克', meaning: '第二张卡的正面意义' },
    { image: '../images/tool/arcanaDivination/bole_front.png', name: '[正位] 大地与丰饶女神诺菲卡', meaning: '第三张卡的正面意义' },
];

const cardContainer = document.getElementById('cardContainer');

drawnCards.forEach(card => {
    const cardDiv = document.createElement('div');
    cardDiv.className = 'card';
    cardDiv.innerHTML = `
        <img src="${card.image}" alt="卡片">
        <p>卡片名字：${card.name}</p>
        <p>卡片意义：${card.meaning}</p>
    `;
    cardContainer.appendChild(cardDiv);
});
document.addEventListener('DOMContentLoaded', () => {
    const cardContainer = document.getElementById('cardContainer');
    cardContainer.innerHTML = '';
});