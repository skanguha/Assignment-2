const button5 = document.querySelector("#plusFive")
const indicator = document.querySelector("#number-indicator")
const disp = document.querySelector("#display-heading")

button5.addEventListener('click', () => {
  disp.textContent = "added 5"
  indicator.textContent = (parseInt(indicator.textContent) + 5).toString()
})

function add10(){
  disp.textContent = "added 10"
  indicator.textContent = (parseInt(indicator.textContent) +10).toString()
}
// Add 15 function
function add15(){
  disp.textContent = "added 15"
  indicator.textContent = (parseInt(indicator.textContent) +15).toString()
}

function add20(){
  disp.textContent = "added 20"
  indicator.textContent = (parseInt(indicator.textContent) +20).toString()
}