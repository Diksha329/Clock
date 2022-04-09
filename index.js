
setInterval(function () {
    var date = new Date(),
        positions = [
            date.getHours() / 24,
            date.getMinutes() / 60,
            date.getSeconds() / 60
        ],
        clock = document.querySelector('.clock');

    positions.forEach(function (rotation, index) {
        clock.children[index].style.transform = 'rotate(' + rotation + 'turn)';
    });

}, 1000);