// Получаем все видео на странице
const videos = document.querySelectorAll('video');

// Настраиваем IntersectionObserver
const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            // Видео во вьюпорте — запускаем
            entry.target.play();
        } else {
            // Видео вне вьюпорта — ставим на паузу
            entry.target.pause();
        }
    });
});

// Подключаем observer к каждому видео
videos.forEach((video) => {
    observer.observe(video);
});
