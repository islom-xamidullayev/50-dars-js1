const display = document.querySelector(".stop-watch＿display > p");
const startBtn = document.getElementById("btn-start");
const stopBtn = document.getElementById("btn-stop");
const resetBtn = document.getElementById("btn-restart");

let interId;
let int = null

startBtn.addEventListener("click", () => {
  interId = setInterval(() => {
    display.innerText++
  }, 1000);
});

stopBtn.addEventListener("click", () => {
  clearInterval(interId);
});


resetBtn.addEventListener("click", () => {
       
    clearInterval(interId); 
    interId = null; 
    counter = 0; 
    display.innerText = counter; 

})