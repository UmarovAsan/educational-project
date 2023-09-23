const player = document.querySelector('.player-wrapper');
const playerBackgroundFon = document.querySelector('.player-background-fon');
const playerFon = document.querySelector('.player-fon')
const audio = document.querySelector('.audio');
const playerArtist = document.querySelector('.player-artist');
const playerSong = document.querySelector('.player-song');
const audioTrack = document.querySelector('.audio-track');
const progress = document.querySelector('.audio-track-progress');
const timeStart = document.querySelector('.time-start');
const timeEnd = document.querySelector('.time-end');
const prevBtn = document.querySelector('.prev-btn');
const playBtnWrapper = document.querySelector('.play-btn-wrapper');
const playBtn = document.querySelector('.play-btn');
const pauseBtn = document.querySelector('.pause-btn');
const nextBtn = document.querySelector('.next-btn');


const songs = [
    { artist: "Beyonce", song: "Don't hurt ourself" },
    { artist: "Dua Lipa", song: "Don't start now" }
];

let songIndex = 0;

function loadSong(song) {
    playerArtist.innerHTML = song.artist;
    playerSong.innerHTML = song.song;
    audio.src = `audio/${song.artist}.mp3`;
    playerBackgroundFon.src = `img/audiofon${songIndex + 1}.png`;
    playerFon.src = `img/audiofon${songIndex + 1}.png`;
}

loadSong(songs[songIndex]);

function audioPlay () {
    player.classList.add('play');
    playerFon.classList.add('active');
    playBtn.src = '/audio-player/svg/pause.png'
    audio.play();
}

function audioPause () {
    player.classList.remove('play');
    playerFon.classList.remove('active');
    playBtn.src = '/audio-player/svg/play.png'
    audio.pause();
}

playBtnWrapper.addEventListener('click', () => {
    const isPlaying = player.classList.contains('play');
    if (isPlaying) {
        audioPause();
    } else {
        audioPlay();
    }
    player.classList.toggle('play', !isPlaying);
});

nextBtn.addEventListener('click', () => {
    songIndex = (songIndex + 1) % songs.length;
    loadSong(songs[songIndex]);
    audioPlay();
});

prevBtn.addEventListener('click', () => {
    songIndex = (songIndex - 1 + songs.length) % songs.length;
    loadSong(songs[songIndex]);
    audioPlay();
});

function updateProgress(e) {
    const { duration, currentTime } = e.srcElement;
    const progressPercent = (currentTime / duration) * 100;
    progress.style.width = `${progressPercent}%`;
}
audio.addEventListener('timeupdate', updateProgress)


function setProgress (e) {
    const width = this.clientWidth;
    const clickX = e.offsetX;
    const duration = audio.duration;

    audio.currentTime = (clickX / width) * duration;
};

audioTrack.addEventListener('click', setProgress);

audio.addEventListener('timeupdate', () => {
    const { duration, currentTime } = audio;
    const progressPercent = (currentTime / duration) * 100;
    progress.style.width = `${progressPercent}%`;

    // Update the time display
    const minutesCurrent = Math.floor(currentTime / 60);
    const secondsCurrent = Math.floor(currentTime % 60);
    const minutesTotal = Math.floor(duration / 60);
    const secondsTotal = Math.floor(duration % 60);
    timeStart.innerHTML = `${minutesCurrent}:${secondsCurrent}`;
    timeEnd.innerHTML = `${minutesTotal}:${secondsTotal}`;
});

audio.addEventListener('loadedmetadata', () => {
    const { duration } = audio;
    const minutesTotal = Math.floor(duration / 60);
    const secondsTotal = Math.floor(duration % 60);
    timeEnd.innerHTML = `${minutesTotal}:${secondsTotal}`;
});

audio.addEventListener('ended', () => {
    songIndex = (songIndex + 1) % songs.length;
    loadSong(songs[songIndex]);
    audioPlay();
});