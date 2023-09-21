// 获取按钮元素
const modeToggleBtn = document.getElementById("modeToggle");
// 获取白天和夜间模式的样式表
const dayModeStyle = document.getElementById("day-mode-style");
const nightModeStyle = document.getElementById("night-mode-style");
// 添加按钮点击事件监听器
modeToggleBtn.addEventListener("click", toggleMode);
// 切换模式的函数
function toggleMode() {
    // 检查当前是哪个模式，并根据模式切换样式表的 `disabled` 属性
    if (dayModeStyle.disabled) {
        dayModeStyle.disabled = false; // 启用白天模式样式表
        nightModeStyle.disabled = true; // 禁用夜间模式样式表
        // 保存用户的首选模式到 localStorage
        saveModePreference("day");
    } else {
        dayModeStyle.disabled = true; // 禁用白天模式样式表
        nightModeStyle.disabled = false; // 启用夜间模式样式表
        // 保存用户的首选模式到 localStorage
        saveModePreference("night");
    }
}
// 存储用户的模式首选项到 localStorage
function saveModePreference(mode) {
    localStorage.setItem('modePreference', mode);
}
// 获取用户的模式首选项
function getModePreference() {
    return localStorage.getItem('modePreference');
}
// 在页面加载时应用用户的首选模式
const userModePreference = getModePreference();
if (userModePreference === 'night') {
    nightModeStyle.disabled = false; // 启用夜间模式样式表
} else {
    dayModeStyle.disabled = false; // 启用白天模式样式表
}
