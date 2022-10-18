const formRef = document.querySelector('.login-form')

class Form {
  constructor(name, password) {
    this.name = name
    this.password = password
  }
}

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
  const dataForm = new Form(emailValue, passwordValue)
  console.log(dataForm)
  formRef.reset()
}

formRef.addEventListener('submit', formSubmitHandler)
