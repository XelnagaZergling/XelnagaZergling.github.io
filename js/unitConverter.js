function convertUnits() {
    const value = parseFloat(document.getElementById('value').value);
    const unit = document.getElementById('unit').value;

    if (isNaN(value)) {
        alert('请输入有效的数值。');
        return;
    }

    let result = '';

    switch (unit) {
        case 'feet':
            const meters = value * 0.3048;
            result = `${value} 英尺 (ft) = ${meters.toFixed(2)} 米`;
            break;
        case 'inches':
            const centimeters = value * 2.54;
            result = `${value} 英寸 (in) = ${centimeters.toFixed(2)} 厘米`;
            break;
        case 'pounds':
            const kilograms = value * 0.453592;
            result = `${value} 磅 (lb) = ${kilograms.toFixed(2)} 千克`;
            break;
        case 'gallons':
            const liters = value * 3.78541;
            result = `${value} 加仑 (gal) = ${liters.toFixed(2)} 升`;
            break;
        case 'bushels':
            const litersBushel = value * 35.2391;
            result = `${value} 蒲式耳 (bu) = ${litersBushel.toFixed(2)} 升`;
            break;
        case 'ounces':
            const grams = value * 28.3495;
            result = `${value} 盎司 (oz) = ${grams.toFixed(2)} 克`;
            break;
        case 'fluid_ounces':
            const milliliters = value * 29.5735;
            result = `${value} 液盎司 (fl oz) = ${milliliters.toFixed(2)} 毫升`;
            break;
        case 'fahrenheit':
            const celsius = (value - 32) * 5/9;
            result = `${value} 华氏度 (°F) = ${celsius.toFixed(2)} 摄氏度 (°C)`;
            break;
        default:
            result = '请选择有效的单位。';
            break;
    }

    const resultElement = document.getElementById('result');
    resultElement.textContent = result;
}