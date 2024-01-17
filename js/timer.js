(() => {
    let time = 394;
    const countDownEl = document.getElementById('countdown');

    let timer = setInterval(updateCountdown, 1000);

    function updateCountdown() {
        let hours = Math.floor((time / (1000 * 60 * 60)) % 24);
        let minutes = Math.floor(time / 60);
        let seconds = time % 60;
        seconds = seconds < 10 ? "0" + seconds : seconds;
        hours = hours < 10 ? "0" + hours : hours;
        minutes = minutes < 10 ? "0" + minutes : minutes;
        countDownEl.innerHTML = `${hours}  ${minutes}  ${seconds}`;
        time--;

        if (time === 0) clearInterval(timer);
    }
})();