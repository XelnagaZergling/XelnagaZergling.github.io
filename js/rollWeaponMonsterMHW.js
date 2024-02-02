function generateNumbers() {
    const excludeNumbers = [];
    if (document.getElementById('exclude18').checked) excludeNumbers.push(18);
    if (document.getElementById('exclude32').checked) excludeNumbers.push(32);
    if (document.getElementById('exclude63').checked) excludeNumbers.push(63);
    if (document.getElementById('exclude69').checked) excludeNumbers.push(69);
    if (document.getElementById('exclude70').checked) excludeNumbers.push(70);
    if (document.getElementById('exclude71').checked) excludeNumbers.push(71);

    const firstGroupMin = 1;
    const firstGroupMax = 14;
    const secondGroupMin = 1;
    const secondGroupMax = 71;

    const selectedGroup = document.getElementById('selectGroup').value;

    let resultHTML = '';

    if (selectedGroup === 'firstGroup' || selectedGroup === 'bothGroups') {
      const randomNum1 = Math.floor(Math.random() * (firstGroupMax - firstGroupMin + 1)) + firstGroupMin;
      resultHTML += `<p>  ${randomNum1} - ${getFirstGroupText(randomNum1)}</p>`;
    }

    if (selectedGroup === 'secondGroup' || selectedGroup === 'bothGroups') {
      let randomNum2;
      do {
        randomNum2 = Math.floor(Math.random() * (secondGroupMax - secondGroupMin + 1)) + secondGroupMin;
      } while (excludeNumbers.includes(randomNum2));

      resultHTML += `<p>  ${randomNum2} - ${getSecondGroupText(randomNum2)}</p>`;
    }

    document.getElementById('result').innerHTML = resultHTML;
  }

  function getFirstGroupText(number) {
    // 根据第一组数字的值返回相应文本
    switch (number) {
      case 1:
        return '大剑';
      case 2:
        return '太刀';
      case 3:
        return '单手剑';
      case 4:
        return '双刀';
      case 5:
        return '大锤';
      case 6:
        return '狩猎笛';
      case 7:
        return '长枪';
      case 8:
        return '铳枪';
      case 9:
        return '斩击斧';
      case 10:
        return '充能斧';
      case 11:
        return '操虫棍';
      case 12:
        return '轻弩枪';
      case 13:
        return '重弩枪';
      case 14:
        return '弓箭';
      default:
        return `武器 ${number}`;
    }
  }

  function getSecondGroupText(number) {
    // 根据第二组数字的值返回相应文本
    switch (number) {
      case 1:
        return '大贼龙';
      case 2:
        return '搔鸟';
      case 3:
        return '毒妖鸟';
      case 4:
        return '土砂龙';
      case 5:
        return '泥鱼龙';
      case 6:
        return '飞雷龙';
      case 7:
        return '蛮颚龙';
      case 8:
        return '雌火龙';
      case 9:
        return '眩鸟';
      case 10:
        return '浮空龙';
      case 11:
        return '大痹贼龙';
      case 12:
        return '骨槌龙';
      case 13:
        return '风飘龙';
      case 14:
        return '惨爪龙';
      case 15:
        return '火龙';
      case 16:
        return '角龙';
      case 17:
        return '麒麟';
      case 18:
        return '熔山龙';
      case 19:
        return '岩贼龙';
      case 20:
        return '樱火龙';
      case 21:
        return '爆鳞龙';
      case 22:
        return '恐暴龙';
      case 23:
        return '熔岩龙';
      case 24:
        return '爆槌龙';
      case 25:
        return '苍火龙';
      case 26:
        return '黑角龙';
      case 27:
        return '灭尽龙';
      case 28:
        return '炎王龙';
      case 29:
        return '炎妃龙';
      case 30:
        return '钢龙';
      case 31:
        return '尸套龙';
      case 32:
        return '绚辉龙';
      case 33:
        return '冥灯龙';
      case 34:
        return '冰鱼龙';
      case 35:
        return '猛牛龙';
      case 36:
        return '痹毒龙';
      case 37:
        return '浮眠龙';
      case 38:
        return '水妖鸟';
      case 39:
        return '冰牙龙';
      case 40:
        return '迅龙';
      case 41:
        return '斩龙';
      case 42:
        return '轰龙';
      case 43:
        return '碎龙';
      case 44:
        return '硫斩龙';
      case 45:
        return '霜翼风飘龙';
      case 46:
        return '雷颚龙';
      case 47:
        return '凶爪龙';
      case 48:
        return '冰呪龙';
      case 49:
        return '红莲爆鳞龙';
      case 50:
        return '雾瘴尸套龙';
      case 51:
        return '溟波龙';
      case 52:
        return '惶怒恐暴龙';
      case 53:
        return '歼世灭尽龙';
      case 54:
        return '天地煌啼龙';
      case 55:
        return '雷狼龙';
      case 56:
        return '黑狼鸟';
      case 57:
        return '战痕黑狼鸟';
      case 58:
        return '黑轰龙';
      case 59:
        return '金火龙';
      case 60:
        return '银火龙';
      case 61:
        return '金狮子';
      case 62:
        return '狱狼龙';
      case 63:
        return '冥赤龙';
      case 64:
        return '激昂金狮子';
      case 65:
        return '猛爆碎龙';
      case 66:
        return '霜刃冰牙龙';
      case 67:
        return '煌黑龙';
      case 68:
        return '黑龙';
      case 69:
        return '贝希摩斯';
      case 70:
        return '鹿首精';
      case 71:
        return '古代鹿首精';
      default:
        return `怪物 ${number}`;
    }
    return `怪物 ${number}`;
  }