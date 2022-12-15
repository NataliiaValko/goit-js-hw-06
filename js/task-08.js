const formRef = document.querySelector('.login-form')

const formSubmitHandler = (event) => {
  event.preventDefault()
  const {
    email: { value: emailValue },
    password: { value: passwordValue },
  } = event.currentTarget.elements

  if (emailValue.trim() === '' || passwordValue.trim() === '') {
    alert(`All the fields should be completed ;-)`)
    return
  }
  const dataForm = { name: emailValue, password: passwordValue }
  console.log(dataForm)
  formRef.reset()
}

formRef.addEventListener('submit', formSubmitHandler)
