const truck = document.getElementById("truck");
const cactus = document.getElementById("cactus");

let score = 0
const container = document.querySelector('h2')

document.addEventListener("keydown", function (event) {
  document.addEventListener("keydown", function (event) {
    jump();
  });

  function jump() {
    if (truck.classList != "jump") {
      truck.classList.add("jump");
    }

    setTimeout(function () {
      truck.classList.remove("jump");
      container.innerText = "Очки: "  + score
    }, 500);
  }

  setTimeout(function(){
    score++
  }, 500)

  let crushed = setInterval(function () {
    let trucktop = parseInt(
      window.getComputedStyle(truck).getPropertyValue("top")
    );
    let cactusleft = parseInt(
      window.getComputedStyle(cactus).getPropertyValue("left")
    );

    if (cactusleft < 50 && cactusleft > 0 && trucktop >= 140) {
      alert("GAME OVER");
      score = 0
    }
  }, 10);
});
