const contactForm = document.querySelector('.contact-form')
const name = document.getElementById('name')
const email = document.getElementById('email')
const subject = document.getElementById('subject')
const message = document.getElementById('message')

contactForm.addEventListener('submit', (e) =>{
  e.preventDefault();

  let formData = {
    name: name.value,
    email: email.value,
    subject: subject.value,
    message: message.value
  }
  
  let xhr = new XMLHttpRequest()
  xhr.open('POST','/')
  xhr.setRequestHeader('content-type', 'application/json')
  xhr.onload = () => {
    console.log(xhr.responseText)
    if(xhr.responseText == 'success'){
      alert('email enviado')
      name.value =''
      email.value =''
      subject.value =''
      message.value =''
    }else{
      alert('email não enviado')
    }
  }

  xhr.send(JSON.stringify(formData))
})