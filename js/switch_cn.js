const engLink = document.getElementById('engLink');
const cnLink = document.getElementById('cnLink');

function switchLanguage(lang) {
    document.querySelectorAll('[data-cn]').forEach(element => {
        if (lang === 'cn') {
            element.textContent = element.getAttribute('data-cn');
        } else {
            // 恢复英文文本
            element.textContent = element.getAttribute('data-original') || element.textContent;
        }
    });

    engLink.classList.toggle('active', lang === 'en');
    cnLink.classList.toggle('active', lang === 'cn');
}



// 存储原始英文文本
document.querySelectorAll('[data-cn]').forEach(element => {
    element.setAttribute('data-original', element.textContent);
});

engLink.addEventListener('click', (e) => {
    e.preventDefault();
    console.log("engLink clicked");
    switchLanguage('en');
});

cnLink.addEventListener('click', (e) => {
    e.preventDefault();
    console.log("cnLink clicked");
    switchLanguage('cn');
});
