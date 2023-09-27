// 获取回到顶部按钮元素
var scrollTopButton = document.getElementById('scrollTopBtn');

// 添加滚动事件监听器
window.addEventListener('scroll', function() {
    // 如果页面滚动位置大于或等于 100 像素，则显示回到顶部按钮，否则隐藏它
    if (document.documentElement.scrollTop > 100) {
        scrollTopButton.style.display = 'block';
    } else {
        scrollTopButton.style.display = 'none';
    }
});

// 添加点击事件监听器
scrollTopButton.addEventListener('click', function() {
    // 平滑滚动到页面顶部
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});