window.addEventListener("load", () => {
  const sounds = document.querySelectorAll(".sound");
  const pads = document.querySelectorAll(".pads div");
  const visual = document.querySelector('.visual');
  const colors = [
    "#0f4628",
    "#d36060",
    "#c060d3",
    "#d3d160",
    "#6860d3",
    "#60b2d3"
  ];

  // console.log(sounds[0]);

  // lets get going with the sound here :

  pads.forEach((pad, index) => {
    pad.addEventListener('click', function(){
      sounds[index].currentTime = 0;
     // sounds[4]
     sounds[index].play();

     createBubbles(index);
    });
  });

  // create a function that makes bubbles

  const createBubbles = (index) => {
    const bubble = document.createElement("div");
    visual .appendChild(bubble);
    bubble.style.backgroundColor = colors[index];
    bubble.style.animation = 'jump 1s ease';
    bubble.addEventListener('animationend', function(){
      visual.removeChild(this);
    })
  };
});

// console.log(sounds);
