async function getAudioList() {
  const url = `https://aaron-blackjack-doubt-libraries.trycloudflare.com/audioslist`;
  const newUrl = `https://aaron-blackjack-doubt-libraries.trycloudflare.com`;

  try {
    const response = await fetch(url);
    const data = await response.json();
    
    let b = data.files.length - 1;

    data.files.forEach((el) => {
      let gaana = document.createElement(`li`);
      gaana.textContent = el.name;
      gaana.dataset.name = el.name;
      document.querySelector("ol").appendChild(gaana);
    });
    let audio;
    let a = 0;
    audio = document.createElement(`audio`);
    audio.src = data.files[a].url.replace(
    "https://singles-son-typical-spread.trycloudflare.com",
    newUrl
);
    document.body.appendChild(audio);
    console.log(data.files[a]);
    console.log(audio.src);
   



    if (!audio) {
      document.getElementById("song-name").innerText = data.files[a].name;
      document.getElementById("song-name-copy").innerText = data.files[a].name;
    }

    document.querySelector(".fa-play").addEventListener("click", function () {
      if(audio.paused){
        audio.play();
         document.querySelector(".fa-play").style.display = "none";
      document.querySelector(".fa-pause").style.display = "flex";
      }else{
        play();
      }
    });

    document.querySelector(".fa-pause").addEventListener("click", function () {
      document.querySelector(".fa-play").style.display = "flex";
      document.querySelector(".fa-pause").style.display = "none";
      if (audio) {
        audio.pause();
      }
    });

    document
      .querySelector(".fa-forward")
      .addEventListener("click", function () {
        if (a < data.files.length - 1) {
          a += 1;
          play();
        } else {
          a = 0;
          play();
        }
      });
    document
      .querySelector(".fa-backward")
      .addEventListener("click", function () {
        if (a > 0) {
          a -= 1;
          play();
        } else if ((a = 0)) {
          play();
        } else {
          a = b;
          play();
        }
      });

    function audioName() {
      let songList = document.getElementById("song-list");
      songList.addEventListener("click", (e) => {
        try {
          let hero = data.files;

          let clickedSong = hero.find(
            (song) => song.name === e.target.dataset.name
          );
          document.getElementById("song-name").innerText = clickedSong.name;
          audio.src = clickedSong.url.replace(
    "https://singles-son-typical-spread.trycloudflare.com",
    newUrl
);
          audio.play();

          document.querySelector(".fa-play").style.display = "none";
          document.querySelector(".fa-pause").style.display = "flex";
        } catch (err) {
          console.error("Failed to fetch  list:", err);
        }
      });
    }
    audioName();
    function play() {
      let currentSrc = data.files[a].url.replace("https://singles-son-typical-spread.trycloudflare.com",
    newUrl);
      if(audio.src !== currentSrc)
  audio.src = data.files[a].url.replace(
    "https://singles-son-typical-spread.trycloudflare.com",
    newUrl
);
  document.getElementById("song-name").innerText = data.files[a].name;
  audio.play();

  document.querySelector(".fa-play").style.display = "none";
  document.querySelector(".fa-pause").style.display = "flex";
};

function formatTime(timeInSeconds) {
            let minutes = Math.floor(timeInSeconds / 60);
            let seconds = Math.floor(timeInSeconds % 60);
            return `${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
        }
        let duration_song = document.querySelector(".duration");
        
         audio.addEventListener('loadedmetadata', () => {
    
    duration_song.innerText=formatTime(audio.duration);
});
        
          audio.addEventListener('timeupdate', () => {
            let remaining = audio.duration - audio.currentTime;
            duration_song.innerText = formatTime(remaining);
    
});


  } catch (err) {
    console.error("Failed to fetch audio list:", err);
  }
}

getAudioList();

