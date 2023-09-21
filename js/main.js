// 禁止页面中的文字被选中
function disableTextSelection() {
    document.body.style.userSelect = 'none';
    document.body.style.webkitUserSelect = 'none';
    document.body.style.mozUserSelect = 'none';
    document.body.style.msUserSelect = 'none';
}

// 启用文字选中（如果需要的话）
function enableTextSelection() {
    document.body.style.userSelect = 'auto';
    document.body.style.webkitUserSelect = 'auto';
    document.body.style.mozUserSelect = 'auto';
    document.body.style.msUserSelect = 'auto';
}
// 调用禁止文字选中函数
disableTextSelection();
// 阻止复制操作
document.addEventListener('copy', function(event) {
    event.preventDefault();
    
    // 创建一个提示文本元素
    var tooltip = document.createElement('div');
    tooltip.textContent = '不可复制！';
    
    // 设置提示文本的样式
    tooltip.style.position = 'fixed';
    tooltip.style.top = '50%';
    tooltip.style.left = '50%';
    tooltip.style.transform = 'translate(-50%, -50%)';
    tooltip.style.backgroundColor = 'black';
    tooltip.style.color = 'white';
    tooltip.style.padding = '10px';
    tooltip.style.borderRadius = '5px';
    tooltip.style.zIndex = '9999'; // 确保在顶层显示
    tooltip.style.pointerEvents = 'none'; // 防止干扰用户操作
    
    // 将提示文本添加到文档中
    document.body.appendChild(tooltip);
    
    // 设置定时器，在一定时间后移除提示文本
    setTimeout(function() {
        document.body.removeChild(tooltip);
    }, 2000); // 2秒后移除提示文本
});


// 生成随机颜色
function getRandomColor() {
    var letters = '0123456789ABCDEF';
    var color = '#';
    for (var i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}

// 生成随机大小
function getRandomSize(minSize, maxSize) {
    return Math.floor(Math.random() * (maxSize - minSize + 1)) + minSize;
}

// 添加点击事件监听器
document.addEventListener('click', function(event) {
    // 检查是否是左键点击（左键的事件代码为1）
    if (event.button === 0) {
        // 创建一个提示文本元素
        var tooltip = document.createElement('div');
        
        // 根据不同的几率生成不同的文本
        var randomNumber = Math.random();
        var tooltipText = '';
        
        if (randomNumber < 0.20) {
            tooltipText = '功德+2 *直*';
        } else if (randomNumber < 0.40) {
            tooltipText = '功德+3! *暴*';
        } else if (randomNumber < 0.44) {
            tooltipText = '功德+5!! *直暴*';
        } else {
            tooltipText = '功德+1'; // 默认情况
        }
        
        tooltip.textContent = tooltipText;
        
        // 设置随机颜色
        var randomColor = getRandomColor();
        tooltip.style.color = randomColor;
        
        // 设置随机字体大小（范围从10px到15px）
        var randomSize = getRandomSize(10, 15);
        tooltip.style.fontSize = randomSize + 'px';
        
        // 设置提示文本的样式
        tooltip.style.position = 'fixed';
        tooltip.style.top = event.clientY + 'px';
        tooltip.style.left = event.clientX + 'px';
        tooltip.style.fontWeight = 'bold';
        tooltip.style.opacity = '0.7';
        tooltip.style.pointerEvents = 'none'; // 防止提示文本干扰后续点击事件
        
        // 将提示文本添加到文档中
        document.body.appendChild(tooltip);
        
        // 使用动画让文本向上飘动
        var initialTop = event.clientY;
        var animationDuration = 1000; // 1秒的动画时间
        
        requestAnimationFrame(function animate() {
            var currentTime = performance.now();
            var progress = (currentTime - startTime) / animationDuration;
            if (progress < 1) {
                // 在动画期间将文本向上移动
                tooltip.style.top = initialTop - progress * 100 + 'px'; // 向上移动100px
                requestAnimationFrame(animate);
            } else {
                // 动画结束后移除文本
                document.body.removeChild(tooltip);
            }
        });

        // 记录动画开始时间
        var startTime = performance.now();
    }
});
