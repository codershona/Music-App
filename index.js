window.addEventListener("load", () => {
  const sounds = document.querySelectorAll(".sound");
  const pads = document.querySelectorAll(".pads div");

  // console.log(sounds[0]);

  // lets get going with the sound here :

  pads.forEach((pad, index) => {
    pad.addEventListener('click', function(){
     // sounds[4]
     sounds[index].play();
    });
  });
});

// console.log(sounds);
