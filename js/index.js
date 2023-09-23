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

document.addEventListener('contextmenu', function(event) {
    // 检查事件目标是否是图片元素
    if (event.target.tagName === 'IMG') {
        event.preventDefault(); // 阻止右键菜单的默认行为
    }
});

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

// 添加点击事件监听器
document.addEventListener('click', function(event) {
    // 检查是否是左键点击（左键的事件代码为1）
    if (event.button === 0) {
        // 检查事件目标是否是 <a> 标签、图片或 <button> 元素
        var tagName = event.target.tagName.toLowerCase();
        if (tagName === 'a' || tagName === 'img' || tagName === 'button') {
            return; // 如果是 <a> 标签、图片或 <button> 元素，则不执行后续操作
        }
        
        // 创建一个提示文本元素
        var tooltip = document.createElement('div');
        
        // 根据不同的几率生成不同的文本和字体大小
        var randomNumber = Math.random();
        var tooltipText = '';
        var fontSize = '10px'; // 默认字体大小
        
        if (randomNumber < 0.20) {
            tooltipText = '功德+2 *直*';
            fontSize = '12px'; // 修改字体大小为12px
        } else if (randomNumber < 0.40) {
            tooltipText = '功德+3! *暴*';
            fontSize = '12px'; // 修改字体大小为12px
        } else if (randomNumber < 0.44) {
            tooltipText = '功德+5!! *直暴*';
            fontSize = '15px'; // 修改字体大小为15px
        } else if (randomNumber < 0.45) {
            tooltipText = '功德+10!! *大技能直暴*';
            fontSize = '18px'; // 修改字体大小为15px
        } else {
            tooltipText = '功德+1'; // 默认情况，字体大小已设置为10px
        }
        
        tooltip.textContent = tooltipText;
        
        // 设置随机颜色
        var randomColor = getRandomColor();
        tooltip.style.color = randomColor;
        
        // 设置字体大小
        tooltip.style.fontSize = fontSize;
        
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

// 获取年
document.addEventListener("DOMContentLoaded", function() {
    var spanElement = document.getElementById("currentYear");
    if (spanElement) {
        var currentDate = new Date();
        var currentYear = currentDate.getFullYear();
        spanElement.textContent = currentYear;
    }
});

// 获取显示时间的元素
var currentTimeElement = document.getElementById("currentTime");

// 更新时间的函数
function updateTime() {
    var now = new Date();
    var hours = now.getHours();
    var minutes = now.getMinutes();
    var seconds = now.getSeconds();
    var formattedTime = hours + ":" + (minutes < 10 ? "0" : "") + minutes + ":" + (seconds < 10 ? "0" : "") + seconds;
    
    // 将时间显示在元素中
    currentTimeElement.textContent = "本地时间: " + formattedTime;
}

// 每秒更新一次时间
setInterval(updateTime, 1000);

// 初始加载时间
updateTime();