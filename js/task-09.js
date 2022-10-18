const bodyRef = document.querySelector('body')
const spanRef = document.querySelector('.color')
const changeColorBtnRef = document.querySelector('.change-color')

const getRandomHexColor = () =>
  `#${Math.floor(Math.random() * 16777215).toString(16)}`

const onClickButtonHandler = () => {
  let currentColor = getRandomHexColor()
  bodyRef.style.backgroundColor = currentColor
  spanRef.textContent = currentColor
}

changeColorBtnRef.addEventListener('click', onClickButtonHandler)
