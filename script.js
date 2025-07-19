async function getAudioList() {
  const url = `https://raw.githubusercontent.com/wbhydra/audio/refs/heads/main/Water%20Drop%20Sound%20Effect%20-%20Royalty%20Free_01.mp3
`;

  try {
    // const response = await fetch(url);
    // const data = await response.json();

    // data.forEach((el) => {
    //   let gaana = document.createElement(`li`);
    //   gaana.textContent = el.name;
    //   document.querySelector("ol").appendChild(gaana);
    // });
    document.querySelector(".play").addEventListener("click", function () {
      const audio = document.createElement(`audio`);
      audio.src = `https://raw.githubusercontent.com/wbhydra/audio/refs/heads/main/Water%20Drop%20Sound%20Effect%20-%20Royalty%20Free_01.mp3`;
      audio.controls = true;
      document.body.appendChild(audio);
      audio
        .play()
        .then(() => console.log("Audio is playing"))
        .catch((err) => console.error("Play error:", err));

      console.log(audio.src);
      console.log(`btn clicked`);
    });
  } catch (err) {
    console.error("Failed to fetch audio list:", err);
  }
}

getAudioList();
