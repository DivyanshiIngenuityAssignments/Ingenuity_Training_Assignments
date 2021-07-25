const music = document.querySelector("audio");
const play:HTMLElement = document.getElementById("play");
const img = document.querySelector('img');

const songName: HTMLElement = document.getElementById("songName");
const artistName: HTMLElement = document.getElementById("artistName");
const prev: HTMLElement = document.getElementById("prev");
const next: HTMLElement = document.getElementById("next");

const songs = [
    {
        id: 'song1',
        songName: 'Permission To Dance',
        artistName:'BTS'
    },
    {
        id: 'song2',
        songName: 'Love Yourself',
        artistName:'JK'
    },
    {
        id: 'song3',
        songName: 'Map Of The Soul-7',
        artistName:'Jin'
    },
    
]

//functions for playing and pausing

let isAudioPlaying = false;

const playTheMusic = ()=>{
    isAudioPlaying = true;
    music.play();
    play.classList.replace("fa-play", "fa-pause");
    img.classList.add("rotateAnime");
};

//pause function
const pauseTheMusic = ()=>{
    isAudioPlaying = false;
    music.pause();
    play.classList.replace("fa-pause", "fa-play");
    img.classList.remove("rotateAnime");
};

//event is firing on clikcing play button
play.addEventListener("click", ()=>{
  
    isAudioPlaying ? pauseTheMusic() : playTheMusic();

});


//changing the songs

const loadTheSong = (songs)=>{
    songName.textContent = songs.songName;
    artistName.textContent = songs.artistName;
    music.src = "music/" + songs.id + ".mpeg";
    img.src = "img/" + songs.id + ".jpg";
}

var songIndex: number = 0;
const nextSong = ()=>{
    songIndex = (songIndex + 1) % songs.length;
    loadTheSong(songs[songIndex]);
    playTheMusic();
};

const prevSong = ()=>{
    songIndex = (songIndex - 1 + songs.length) % songs.length;
    loadTheSong(songs[songIndex]);
    playTheMusic();
}

next.addEventListener("click", nextSong);
prev.addEventListener("click", prevSong);

//"start": "webpack serve --mode development",
  //      "build": "webpack --mode development",
    //    "release": "webpack --mode production"