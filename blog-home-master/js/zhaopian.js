// 为所有的 panel 注册点击事件
const panels = document.querySelectorAll('.panel')
panels.forEach(panel => {
    panel.addEventListener('click', () => {
    	// 清空所有 active 样式
        removeActiveClasses()
        // 激活被点击 panel 的 active样式
        panel.classList.add('active')
    })
})

function removeActiveClasses() {
    panels.forEach(panel => {
        panel.classList.remove('active')
    })
}
