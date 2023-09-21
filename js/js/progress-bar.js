document.addEventListener("DOMContentLoaded", function() {
  window.addEventListener("scroll", function() {
    const scrollableHeight = document.documentElement.scrollHeight - window.innerHeight;
    const scrolledPercentage = (window.scrollY / scrollableHeight) * 100;

    // 更新进度条高度
    document.getElementById("progress-bar").style.height = scrolledPercentage + "%";

    // 更新百分比文本
    document.getElementById("progress-text").textContent = `${Math.round(scrolledPercentage)}%`;
  });
});