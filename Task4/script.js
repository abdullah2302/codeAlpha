const audio = document.getElementById('audio');
const playPauseBtn = document.getElementById('play-pause');
const prevBtn = document.getElementById('prev');
const nextBtn = document.getElementById('next');
const title = document.getElementById('title');
const artist = document.getElementById('artist');
const progress = document.getElementById('progress');
const progressContainer = document.querySelector('.progress-container');

let songIndex = 0;


const songs = [
    {
       name: 'Musics/night-detective-226857.mp3',
       title: 'Song 1',
       artist: 'Artist 1'
    },
    {
       name: 'Musics/nightfall-future-bass-music-228100.mp3',
       title: 'Song 2',
       artist: 'Artist 2'
    },
    {
       name: 'Musics/song3.mp3',
       title: 'Song 3',
       artist: 'Artist 3'
    }
 ];

// Load song
function loadSong(song) {
   title.textContent = song.title;
   artist.textContent = song.artist;
   audio.src = song.name;
}

loadSong(songs[songIndex]);

// Play or pause music
function playPauseMusic() {
   if (audio.paused) {
      audio.play();
      playPauseBtn.textContent = 'Pause';
   } else {
      audio.pause();
      playPauseBtn.textContent = 'Play';
   }
}

// Update progress bar
function updateProgress() {
   const progressPercent = (audio.currentTime / audio.duration) * 100;
   progress.style.width = `${progressPercent}%`;
}

// Set progress on click
function setProgress(e) {
   const width = progressContainer.clientWidth;
   const clickX = e.offsetX;
   const duration = audio.duration;
   audio.currentTime = (clickX / width) * duration;
}

// Next song
function nextSong() {
   songIndex = (songIndex + 1) % songs.length;
   loadSong(songs[songIndex]);
   audio.play();
   playPauseBtn.textContent = 'Pause';
}

// Previous song
function prevSong() {
   songIndex = (songIndex - 1 + songs.length) % songs.length;
   loadSong(songs[songIndex]);
   audio.play();
   playPauseBtn.textContent = 'Pause';
}

// Event listeners
playPauseBtn.addEventListener('click', playPauseMusic);
prevBtn.addEventListener('click', prevSong);
nextBtn.addEventListener('click', nextSong);
audio.addEventListener('timeupdate', updateProgress);
progressContainer.addEventListener('click', setProgress);
