async function getAudioList() {
  const url = `https://singles-son-typical-spread.trycloudflare.com/audioslist`;

  try {
    const response = await fetch(url);
    const data = await response.json();
    let b = data.files.length - 1 ;
    
    data.files.forEach((el) => {
      let gaana = document.createElement(`li`);
      gaana.textContent = el.name;
      document.querySelector("ol").appendChild(gaana);
    });
    let audio;
    let a = 0;
    audio = document.createElement(`audio`);
    audio.src = data.files[a].url;
    document.getElementById("song-name").innerText = data.files[a].name;
    document.getElementById("song-name-copy").innerText = data.files[a].name;
    document.body.appendChild(audio);
    document.querySelector(".fa-play").addEventListener("click", function () {
      document.querySelector(".fa-play").style.display = "none";
      document.querySelector(".fa-pause").style.display = "flex";
      document.getElementById("song-name").innerText = data.files[a].name;
      audio
        .play()
        .then(() => console.log("Audio is playing"))
        .catch((err) => console.error("Play error:", err));
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

          audio.src = data.files[a].url;
          document.getElementById("song-name").innerText = data.files[a].name;
          audio
            .play()
            .then(() => console.log("Audio is playing"))
            .catch((err) => console.error("Play error:", err));
          document.querySelector(".fa-play").style.display = "none";
          document.querySelector(".fa-pause").style.display = "flex";
        } else {
          a = 0;
          audio.src = data.files[a].url;
          document.getElementById("song-name").innerText = data.files[a].name;
          audio
            .play()
            .then(() => console.log("Audio is playing"))
            .catch((err) => console.error("Play error:", err));
          document.querySelector(".fa-play").style.display = "none";
          document.querySelector(".fa-pause").style.display = "flex";
        }
      });
    document
      .querySelector(".fa-backward")
      .addEventListener("click", function () {
        if (a > 0) {
          a -= 1;

          audio.src = data.files[a].url;
          document.getElementById("song-name").innerText = data.files[a].name;
          audio
            .play()
            .then(() => console.log("Audio is playing"))
            .catch((err) => console.error("Play error:", err));
        } else if ((a = 0)) {
          audio.src = data.files[a].url;
          document.getElementById("song-name").innerText = data.files[a].name;
          audio
            .play()
            .then(() => console.log("Audio is playing"))
            .catch((err) => console.error("Play error:", err));
        } else {
          a = b;
          audio.src = data.files[a].url;
          document.getElementById("song-name").innerText = data.files[a].name;
          audio.play();
        }
      });
  } catch (err) {
    console.error("Failed to fetch audio list:", err);
  }
  
}

getAudioList();
