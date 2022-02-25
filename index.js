const express = require('express')
const nodemailer = require('nodemailer')
const app = express()

const PORT = process.env.PORT || 8080

app.use(express.static('public'))
app.use(express.json())

app.get('/', (request, response) =>{
  return response.sendFile(__dirname + '/public/form.html')
})

app.post('/', (request, response) =>{
  console.log(request.body)

  const transporter = nodemailer.createTransport({
    service:'gmail',
    auth: {
      user:'joaopedrolima.dev@gmail.com',
      pass:'password'
    }
  })

  const mailOptions = {
    from: request.body.email,
    to:'joaopedrolima.dev@gmail.com',
    subject:`Mensagem from ${request.body.email} to ${request.body.subject}`,
    text: request.body.message
  }

  transporter.sendMail(mailOptions, (error, info) => {
    if(error) {
      console.log(error);
      response.send('error');
    }else{
      console.log('email enviado para: ' + info.response);
      response.send('success');
    }
  })
})

app.listen(PORT)