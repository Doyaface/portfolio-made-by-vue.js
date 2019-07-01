const functions = require('firebase-functions')
const nodemailer = require('nodemailer')
const gmailEmail = functions.config().gmail.email
const gmailPassword = functions.config().gmail.password
const adminEmail = functions.config().admin.email

const mailTransport = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: gmailEmail,
    pass: gmailPassword
  }
})

const adminContents = data => {
  return `以下内容でホームページよりお問い合わせ受けました
  
  お名前:
  ${data.name}

  メールアドレス:
  ${data.email}

  内容:
  ${data.contents}
  `
}

exports.sendMail = functions.https.onCall((data, context) => {
  let adminMail = {
    from: gmailEmail,
    to: adminEmail,
    subject: 'ホームページお問い合わせ',
    text: adminContents(data)
  }

  mailTransport.sendMail(adminMail, (err, info) => {
    if (err) {
      return console.error(`send failed. ${err}`)
    }
    return console.log('send success.')
  })
})
// // Create and Deploy Your First Cloud Functions
// // https://firebase.google.com/docs/functions/write-firebase-functions
//
// exports.helloWorld = functions.https.onRequest((request, response) => {
//  response.send("Hello from Firebase!");
// });
