// 在切换到新页面时继续播放音乐
window.addEventListener("beforeunload", function() {
    document.querySelector("audio").play();
  });