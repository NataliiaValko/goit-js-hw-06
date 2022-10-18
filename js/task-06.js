const inputRef = document.querySelector('#validation-input')

const requiredLengthValue = Number(inputRef.dataset.length)

const onValidationValue = (event) => {
  const value = event.target.value

  inputRef.classList.add('invalid')

  value.trim().length === requiredLengthValue && value.trim() !== ''
    ? inputRef.classList.replace('invalid', 'valid')
    : inputRef.classList.replace('valid', 'invalid')
}

inputRef.addEventListener('blur', onValidationValue)
