const getRandomHexColor = () => {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`
}

const inputRef = document.querySelector('input[type="number"]')
const renderBtnRef = document.querySelector('[data-create]')
const destroyBtnRef = document.querySelector('[data-destroy]')
const boxesRef = document.querySelector('#boxes')

let counter = 0

const createBoxes = (amount) => {
  const initialWidth = 30
  const initialHeight = 30
  const step = 10
  const initialArray = new Array(amount).fill('')

  return initialArray
    .map((el, index) => {
      return `<div style="width:${
        initialWidth + step * (counter + index + 1)
      }px; height:${
        initialHeight + step * (counter + index + 1)
      }px; background-color: ${getRandomHexColor()}"></div>`
    })
    .join('')
}

const onClickCreateBtnHandler = () => {
  const amount = Number(inputRef.value)
  boxesRef.innerHTML += createBoxes(amount)
  counter += amount
}

const onClickDestroyBtnHandler = () => {
  boxesRef.innerHTML = ''
  inputRef.value = 0
  counter = 0
}

renderBtnRef.addEventListener('click', onClickCreateBtnHandler)
destroyBtnRef.addEventListener('click', onClickDestroyBtnHandler)
