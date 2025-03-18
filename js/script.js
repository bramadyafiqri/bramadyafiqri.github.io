const currentYear = new Date().getFullYear();
const experienceYears = currentYear - 2021;

const texts = [
    `${experienceYears} Tahun Pengalaman!!`,
    "Saya seorang Developer Teknologi dan Penggemar Pembelajaran Mesin",
    "Saya mengkhususkan diri dalam Pengembangan Web, AI, dan Pengembangan Game",
    `${experienceYears} Years experience!!`,
    "I'm a Tech Developer and Machine Learning Enthusiast",
    "I specialize in Web Development, AI, and Game Development"
];

let currentTextIndex = 0;
let currentCharIndex = 0;
const textElement = document.getElementById("dynamicText");

let typingInterval;
let pauseDuration = 2500;

function typeText() {
    const textToType = texts[currentTextIndex];
    textElement.textContent = textToType.slice(0, currentCharIndex);
    currentCharIndex++;

    if (currentCharIndex > textToType.length) {
        clearInterval(typingInterval);

        setTimeout(() => {
            currentCharIndex = 0;
            currentTextIndex = (currentTextIndex + 1) % texts.length;
            typingInterval = setInterval(typeText, 100);
        }, pauseDuration);
    }
}

typingInterval = setInterval(typeText, 100);
