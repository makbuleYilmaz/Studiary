let countdownInterval;
let totalTime = 0;  

function startTimer() {
    let minutes = parseInt(document.getElementById("minutesInput").value);
    let seconds = parseInt(document.getElementById("secondsInput").value);

    if (isNaN(minutes) || isNaN(seconds) || minutes < 0 || seconds < 0 || seconds >= 60 || minutes >= 60) {
        alert("please enter valid minutes and seconds");
        return;
    }

    totalTime = minutes * 60 + seconds; 

    clearInterval(countdownInterval);

    countdownInterval = setInterval(function() {
        let remainingMinutes = Math.floor(totalTime / 60); 
        let remainingSeconds = totalTime % 60; 

        // Sayacı güncelle
        document.getElementById("minutes").textContent = String(remainingMinutes).padStart(2, '0');
        document.getElementById("seconds").textContent = String(remainingSeconds).padStart(2, '0');

        if (totalTime <= 0) {
            clearInterval(countdownInterval);
            document.getElementById("minutes").textContent = "00";
            document.getElementById("seconds").textContent = "00";
            alert("time is over!");
        }

        totalTime--; 
    }, 1000); 
}

function stopTimer() {
    clearInterval(countdownInterval);
}

function resetTimer() {
    clearInterval(countdownInterval);
    document.getElementById("minutes").textContent = "00";
    document.getElementById("seconds").textContent = "00";
    document.getElementById("minutesInput").value = '';
    document.getElementById("secondsInput").value = '';
   
}

let audioElement = document.getElementById("background-music");
function showMusicOptions() {
    const musicOptions = document.getElementById('music-options');
    musicOptions.classList.toggle('show');
}

function playMusic(musicFile) {
    audioElement.src = musicFile;  
    audioElement.play();  
}

function stopMusic() {
    audioElement.pause();  
    audioElement.currentTime = 0;  
}
