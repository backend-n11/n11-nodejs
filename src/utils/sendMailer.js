import nodemailer from "nodemailer"


const transporter = nodemailer.createTransport({
  host: "smtp.gmail.com",
  port: 465,
  secure: true,
  auth: {
    user: process.env.EMAIL, // sizning email bo'lishi kerak
    pass: process.env.EMAIL_PASS  // google acountizdan olgan app password bo'ladi
  }
})

async function sendMail(email, otp) {

  const info = await transporter.sendMail({
    to: email,
    subject: "OTP VERIFY",
    html: `<h1>  Assalomu alaykym ${email}  <br> Sizning OTP :${otp}  </h1>`
  })

  console.log("Message sent: %s", info.messageId);
  return info.messageId
}

export default sendMail
