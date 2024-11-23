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
            // Если устройство не мобильное и видео во вьюпорте, запускаем
            entry.target.play();
        } else {
            // Ставим на паузу в любом случае, если видео выходит из вьюпорта
            entry.target.pause();
        }
    });
});

// Подключаем observer к каждому видео
videos.forEach((video) => {
    if (isMobileDevice()) {
        // На мобильных устройствах убираем autoplay и loop
        video.removeAttribute('autoplay');
        video.removeAttribute('loop');
        video.pause();
    } else {
        // На десктопах наблюдаем за видео
        observer.observe(video);
    }
});
