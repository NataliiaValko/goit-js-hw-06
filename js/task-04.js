const decrementBtnRef = document.querySelector('[data-action="decrement"]')
const incrementBtnRef = document.querySelector('[data-action="increment"]')
const valueRef = document.querySelector('#value')

let counterValue = 0

const updateValueUI = () => (valueRef.textContent = counterInitialValue)

const incrementBtnHandler = () => {
  counterValue += 1
  valueRef.textContent = counterValue
}

const decrementBtnHandler = () => {
  counterValue -= 1
  valueRef.textContent = counterValue
}

incrementBtnRef.addEventListener('click', incrementBtnHandler)

decrementBtnRef.addEventListener('click', decrementBtnHandler)
