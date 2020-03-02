window.addEventListener("load", () => {
  const sounds = document.querySelectorAll(".sound");
  const pads = document.querySelectorAll(".pads div");

  console.log(sounds);

  // lets get going with the sound here :

  pads.forEach(pad => {
    pad.addEventListener('click', function(){
     sounds[4]
    });
  });
});

// console.log(sounds);
