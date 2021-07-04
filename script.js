let container =  document.querySelector('.container')
let resetBtn = document.querySelector('.reset')

resetStyle(2)
insertChildrenDiv(2)

resetBtn.addEventListener('click',() => {
  container.innerHTML = ''

  let userInput = parseInt(window.prompt('How many rows/columns ?'))

  if( !validateAns(userInput) ) {
    window.alert('Maximum limit is 20')
    userInput = 20
  }

  resetStyle(userInput)
  insertChildrenDiv(userInput)

})
container.addEventListener('mouseover',(e) => {

  let cell = e.target
  const r = Math.floor(Math.random()*256)
  const g = Math.floor(Math.random()*256)
  const b = Math.floor(Math.random()*256)
  cell.style.background = `rgb(${r},${g},${b})`

})

function resetStyle(cells) {

  container.style.width='960px'
  container.style.height='560px'
  container.style.display='grid'
  container.style.gridTemplateColumns = `repeat(${cells},1fr)`
  container.style.gridTemplateRows = `repeat(${cells},1fr)`

}
function insertChildrenDiv(cells) {

  for( let i = 0; i < cells; i++ ) {
    for( let j = 0; j < cells; j++) {

      let div = document.createElement('div')
      div.id = `${i}${j}`
      div.style.background = 'black'
      container.appendChild(div)

    }
  }
}
function validateAns(answer) {
  return (answer > 20 || !answer) ? false : true
}
