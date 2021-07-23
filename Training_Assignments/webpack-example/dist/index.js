/******/ (() => { // webpackBootstrap
var __webpack_exports__ = {};
/*!*********************!*\
  !*** ./ts/index.ts ***!
  \*********************/
var music = document.querySelector("audio");
var play = document.getElementById("play");
var img = document.querySelector('img');
var songName = document.getElementById("songName");
var artistName = document.getElementById("artistName");
var prev = document.getElementById("prev");
var next = document.getElementById("next");
var songs = [
    {
        id: 'song1',
        songName: 'Permission To Dance',
        artistName: 'BTS'
    },
    {
        id: 'song2',
        songName: 'Love Yourself',
        artistName: 'JK'
    },
    {
        id: 'song3',
        songName: 'Map Of The Soul-7',
        artistName: 'Jin'
    },
];
//functions for playing and pausing
var isAudioPlaying = false;
var playTheMusic = function () {
    isAudioPlaying = true;
    music.play();
    play.classList.replace("fa-play", "fa-pause");
    img.classList.add("rotateAnime");
};
//pause function
var pauseTheMusic = function () {
    isAudioPlaying = false;
    music.pause();
    play.classList.replace("fa-pause", "fa-play");
    img.classList.remove("rotateAnime");
};
//event is firing on clikcing play button
play.addEventListener("click", function () {
    isAudioPlaying ? pauseTheMusic() : playTheMusic();
});
//changing the songs
var loadTheSong = function (songs) {
    songName.textContent = songs.songName;
    artistName.textContent = songs.artistName;
    music.src = "music/" + songs.id + ".mpeg";
    img.src = "img/" + songs.id + ".jpg";
};
var songIndex = 0;
var nextSong = function () {
    songIndex = (songIndex + 1) % songs.length;
    loadTheSong(songs[songIndex]);
    playTheMusic();
};
var prevSong = function () {
    songIndex = (songIndex - 1 + songs.length) % songs.length;
    loadTheSong(songs[songIndex]);
    playTheMusic();
};
next.addEventListener("click", nextSong);
prev.addEventListener("click", prevSong);

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly93ZWJwYWNrLWV4YW1wbGUvLi90cy9pbmRleC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFDRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwiZmlsZSI6ImluZGV4LmpzIiwic291cmNlc0NvbnRlbnQiOlsidmFyIG11c2ljID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcImF1ZGlvXCIpO1xyXG52YXIgcGxheSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwicGxheVwiKTtcclxudmFyIGltZyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2ltZycpO1xyXG52YXIgc29uZ05hbWUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInNvbmdOYW1lXCIpO1xyXG52YXIgYXJ0aXN0TmFtZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiYXJ0aXN0TmFtZVwiKTtcclxudmFyIHByZXYgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInByZXZcIik7XHJcbnZhciBuZXh0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJuZXh0XCIpO1xyXG52YXIgc29uZ3MgPSBbXHJcbiAgICB7XHJcbiAgICAgICAgaWQ6ICdzb25nMScsXHJcbiAgICAgICAgc29uZ05hbWU6ICdQZXJtaXNzaW9uIFRvIERhbmNlJyxcclxuICAgICAgICBhcnRpc3ROYW1lOiAnQlRTJ1xyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgICBpZDogJ3NvbmcyJyxcclxuICAgICAgICBzb25nTmFtZTogJ0xvdmUgWW91cnNlbGYnLFxyXG4gICAgICAgIGFydGlzdE5hbWU6ICdKSydcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgICAgaWQ6ICdzb25nMycsXHJcbiAgICAgICAgc29uZ05hbWU6ICdNYXAgT2YgVGhlIFNvdWwtNycsXHJcbiAgICAgICAgYXJ0aXN0TmFtZTogJ0ppbidcclxuICAgIH0sXHJcbl07XHJcbi8vZnVuY3Rpb25zIGZvciBwbGF5aW5nIGFuZCBwYXVzaW5nXHJcbnZhciBpc0F1ZGlvUGxheWluZyA9IGZhbHNlO1xyXG52YXIgcGxheVRoZU11c2ljID0gZnVuY3Rpb24gKCkge1xyXG4gICAgaXNBdWRpb1BsYXlpbmcgPSB0cnVlO1xyXG4gICAgbXVzaWMucGxheSgpO1xyXG4gICAgcGxheS5jbGFzc0xpc3QucmVwbGFjZShcImZhLXBsYXlcIiwgXCJmYS1wYXVzZVwiKTtcclxuICAgIGltZy5jbGFzc0xpc3QuYWRkKFwicm90YXRlQW5pbWVcIik7XHJcbn07XHJcbi8vcGF1c2UgZnVuY3Rpb25cclxudmFyIHBhdXNlVGhlTXVzaWMgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICBpc0F1ZGlvUGxheWluZyA9IGZhbHNlO1xyXG4gICAgbXVzaWMucGF1c2UoKTtcclxuICAgIHBsYXkuY2xhc3NMaXN0LnJlcGxhY2UoXCJmYS1wYXVzZVwiLCBcImZhLXBsYXlcIik7XHJcbiAgICBpbWcuY2xhc3NMaXN0LnJlbW92ZShcInJvdGF0ZUFuaW1lXCIpO1xyXG59O1xyXG4vL2V2ZW50IGlzIGZpcmluZyBvbiBjbGlrY2luZyBwbGF5IGJ1dHRvblxyXG5wbGF5LmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBmdW5jdGlvbiAoKSB7XHJcbiAgICBpc0F1ZGlvUGxheWluZyA/IHBhdXNlVGhlTXVzaWMoKSA6IHBsYXlUaGVNdXNpYygpO1xyXG59KTtcclxuLy9jaGFuZ2luZyB0aGUgc29uZ3NcclxudmFyIGxvYWRUaGVTb25nID0gZnVuY3Rpb24gKHNvbmdzKSB7XHJcbiAgICBzb25nTmFtZS50ZXh0Q29udGVudCA9IHNvbmdzLnNvbmdOYW1lO1xyXG4gICAgYXJ0aXN0TmFtZS50ZXh0Q29udGVudCA9IHNvbmdzLmFydGlzdE5hbWU7XHJcbiAgICBtdXNpYy5zcmMgPSBcIm11c2ljL1wiICsgc29uZ3MuaWQgKyBcIi5tcGVnXCI7XHJcbiAgICBpbWcuc3JjID0gXCJpbWcvXCIgKyBzb25ncy5pZCArIFwiLmpwZ1wiO1xyXG59O1xyXG52YXIgc29uZ0luZGV4ID0gMDtcclxudmFyIG5leHRTb25nID0gZnVuY3Rpb24gKCkge1xyXG4gICAgc29uZ0luZGV4ID0gKHNvbmdJbmRleCArIDEpICUgc29uZ3MubGVuZ3RoO1xyXG4gICAgbG9hZFRoZVNvbmcoc29uZ3Nbc29uZ0luZGV4XSk7XHJcbiAgICBwbGF5VGhlTXVzaWMoKTtcclxufTtcclxudmFyIHByZXZTb25nID0gZnVuY3Rpb24gKCkge1xyXG4gICAgc29uZ0luZGV4ID0gKHNvbmdJbmRleCAtIDEgKyBzb25ncy5sZW5ndGgpICUgc29uZ3MubGVuZ3RoO1xyXG4gICAgbG9hZFRoZVNvbmcoc29uZ3Nbc29uZ0luZGV4XSk7XHJcbiAgICBwbGF5VGhlTXVzaWMoKTtcclxufTtcclxubmV4dC5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgbmV4dFNvbmcpO1xyXG5wcmV2LmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBwcmV2U29uZyk7XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=