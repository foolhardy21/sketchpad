let container =  document.querySelector('.container')
// container.style.width = '80vw'
// container.style.height = '80vh'
container.style.background = 'brown'
container.style.display='grid'
container.style.gridTemplateColumns = 'repeat(16,1fr)'
container.style.gridTemplateRows = 'repeat(16,1fr)'
container.style.columnGap = '2px'
container.style.rowGap = '2px'

for( let i = 0; i < 16; i++ ) {
  for( let j = 0; j < 16; j++) {
    let div = document.createElement('div')
    div.style.background = 'green'
    div.innerHTML = `<p>${i}${j}</p>`
    container.appendChild(div)
  }
}
console.log(container)
