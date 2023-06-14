const truck = document.getElementById("truck")
const cactus = document.getElementById("cactus")

document.addEventListener("keydown", function(event){
    jump()
})

function jump() {
    if(truck.classList != "jump"){
        truck.classList.add("jump")
    }
    setTimeout (function() {
        truck.classList.remove("jump")
    }, 500)
}

let crushed = setInterval (function(){
    let trucktop = parseInt(window.getComputedStyle(truck).getPropertyValue("top"))
    let cactusleft = parseInt(window.getComputedStyle(cactus).getPropertyValue("left"))

    if(cactusleft < 50 && cactusleft > 0 && trucktop>=140) {
        alert("GAME OVER")
    }
}, 10)