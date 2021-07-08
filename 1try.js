const diceElement = document.querySelector(".dice");
const diceRolling = document.querySelector(".btn--roll");
const player0 = document.querySelector(".player--0");
const player1 = document.querySelector(".player--1");
const player0Active = player0.classList.contains("player--active");
const score0 = document.querySelector("#score--0");
const score1 = document.querySelector("#score--1");
const hold = document.querySelector(".btn--hold");
let current0 = document.querySelector("#current--0");
let current1 = document.querySelector("#current--1");
let scoreAdd0 = 0
let scoreAdd1 = 0

// const newGame = function(){
//     diceElement.classList.add("hidden");
//     current0.textContent = 0
// }

// YO QUIERO HACER ESTO PERO NO SE PUEDE POR QUE EL SCRIPT SE EJECUTA SOLO UNA VEZ
// EN LOS CONDICIONALES, EN LOS EVENTOS PUEDE IR DE  ARRIBA A ABAJO POR QUE SON EVENTOS
// PERO LOS CONDICIONALES SE EJECUTAN SOLO 1 VEZ, DE ESTA MANERA AUNQUE CAMBIE EL PLAYERACTIVE
// NUNCA SE VUELVE A EJECUTAR EL CONDICIONAL
if(player0Active){
    diceRolling.addEventListener("click",function(){
        diceElement.classList.remove("hidden");
        let randomNumber = Math.trunc(Math.random()*6)+1;
        diceElement.src = `dice-${randomNumber}.png`;
        scoreAdd0 += randomNumber
        current0.textContent = scoreAdd0
    })
    hold.addEventListener("click",function(){
        if(player0Active){
            player0.classList.remove("player--active")
            player1.classList.add("player--active")
        } else{
            player1.classList.remove("player--active")
            player0.classList.add("player--active")
        }
        current0
    })
}







