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

// 禁止右键点击
window.addEventListener('contextmenu', function (e) {
    e.preventDefault();
});

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
// 获取用户的浏览器语言
var userLanguage = window.navigator.language;

// 根据用户语言设置显示对应的div
if (userLanguage === 'ja') {
    document.querySelector('div[lang="ja"]').style.display = 'block';
} else if (userLanguage === 'zh-CN') {
    document.querySelector('div[lang="zh-CN"]').style.display = 'block';
} else if (userLanguage === 'zh-TW') {
    document.querySelector('div[lang="zh-TW"]').style.display = 'block';
} else if (userLanguage === 'fr') {
    document.querySelector('div[lang="fr"]').style.display = 'block';
} else if (userLanguage === 'ru') {
    document.querySelector('div[lang="ru"]').style.display = 'block';
} else if (userLanguage === 'es') {
    document.querySelector('div[lang="es"]').style.display = 'block';
} else if (userLanguage === 'ar') {
    document.querySelector('div[lang="ar"]').style.display = 'block';
} else if (userLanguage === 'de') {
    document.querySelector('div[lang="de"]').style.display = 'block';
} else {
    // 默认显示英文
    document.querySelector('div[lang="en"]').style.display = 'block';
}