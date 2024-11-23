// Функция для проверки мобильного устройства
function isMobileDevice() {
    return /Android|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
}

// Получаем все видео
const videos = document.querySelectorAll('video');

// Настраиваем IntersectionObserver
const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting && !isMobileDevice()) {
            entry.target.play();
        } else {
            entry.target.pause();
        }
    });
});

// Подключаем observer к каждому видео
videos.forEach((video) => {
    if (isMobileDevice()) {
        // Оставляем видео видимым, но без autoplay
        video.removeAttribute('autoplay');
        video.pause();
    } else {
        observer.observe(video);
    }
});
