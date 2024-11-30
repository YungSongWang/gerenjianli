// 定义翻译对象
const translations = {
    'en': {
        'title': 'Recent Project',
        'description': 'Explore my portfolio showcasing innovative full-stack projects that blend cutting-edge technology with seamless user experiences, demonstrating my passion for creating impactful digital solutions.',
        'viewAll': 'View All',
        'project1': 'Widdizy smart home app development',
        'project2': 'Jombee web app Figma design',
        'project3': 'Kneew-Show business & data analysis',
        'switchLang': 'Switch to Chinese'
    },
    'zh': {
        'title': '近期项目',
        'description': '探索我的项目作品集，展示我在全栈开发领域的专业技能，以及将创新技术与卓越用户体验相结合的能力。',
        'viewAll': '查看全部',
        'project1': 'Widdizy智能家居应用开发',
        'project2': 'Jombee网页应用Figma设计',
        'project3': 'Kneew-Show业务与数据分析',
        'switchLang': '切换为英文'
    }
};

// 当前语言
let currentLang = 'en';

// 切换语言函数
function switchLanguage() {
    currentLang = currentLang === 'en' ? 'zh' : 'en';
    updateContent();
    document.getElementById('langSwitch').textContent = translations[currentLang]['switchLang'];
}

// 更新页面内容
function updateContent() {
    document.querySelectorAll('[data-translate]').forEach(element => {
        const key = element.getAttribute('data-translate');
        element.textContent = translations[currentLang][key];
    });
}

// 初始化函数
function initializeLanguageSwitcher() {
    const switchButton = document.createElement('button');
    switchButton.id = 'langSwitch';
    switchButton.textContent = translations[currentLang]['switchLang'];
    switchButton.onclick = switchLanguage;
    document.body.prepend(switchButton);
    updateContent();
}

// 当DOM加载完成时初始化语言切换器
document.addEventListener('DOMContentLoaded', initializeLanguageSwitcher);