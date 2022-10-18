const inputRef = document.querySelector('#name-input')
const nameRef = document.querySelector('#name-output')

const inputHandler = (event) => {
  nameRef.textContent =
    event.currentTarget.value.trim() !== ''
      ? event.currentTarget.value
      : 'Anonymous'
}

inputRef.addEventListener('input', inputHandler)
