started = false
first = true
function startGame(){
    started = true; 
}
function checkGameStatus(){
    if (started){
        if (first){
            Game()
            first = false
        }
    }
}
function Game(){
        if (document.getElementsByClassName("GamePlay")[0].style.display = "none"){
            document.getElementsByClassName("GamePlay")[0].style.display = "block";
            document.getElementById("startButton").style.display = "none";
        }
         document.addEventListener('keydown', function(e) {
             if (e.key == 'ArrowLeft') {
                 MoveLeft()
             }
             if (e.key == 'ArrowRight') {
                 MoveRight()
             }
         })

         function MoveLeft() {
             hero = document.querySelector('#hero')
             leftPos = parseInt(window.getComputedStyle(hero).getPropertyValue('left'))
             leftPos -= 100;
             if (leftPos >= 0) {
                 hero.style.left = leftPos + 'px';
             }

         }



         function MoveRight() {
             hero = document.querySelector('#hero')
             rightPos = parseInt(window.getComputedStyle(hero).getPropertyValue('left'))
             rightPos += 100;
             if (rightPos < 300) {

                 hero.style.left = rightPos + 'px';
             }

         }
         road = document.querySelector('#road')
         villian = document.querySelector('#villian')
         document.addEventListener('animationiteration', function() {
             randomNumber = Math.floor(Math.random() * 3) * 100
             villian.style.left = randomNumber + 'px';
         })
         score = 0;
         dummyScore = 10;
         checkDead = setInterval(function() {
             heroLeft = parseInt(window.getComputedStyle(hero).getPropertyValue('left'))
             villianLeft = parseInt(window.getComputedStyle(villian).getPropertyValue('left'))
             villiantop = parseInt(window.getComputedStyle(villian).getPropertyValue('top'))
             document.querySelector('#score').innerHTML = 'Score: ' + score
             if (heroLeft == villianLeft && villiantop >= 400) {
                 alert('game over! You Score Is ' + score)
                 villian.style.animation = 'none';
                 road.style.animation = 'none';
                 villian.style.top = villiantop + 'px'
                 clearTimeout(checkDead)
                 location.reload();
             }
            if (villiantop > 480){
                score++
            }
            console.log(villiantop)
         }, 100)
    }
document.addEventListener('DOMContentLoaded', function() {
    var GameVar = setInterval(checkGameStatus, 10)

 })