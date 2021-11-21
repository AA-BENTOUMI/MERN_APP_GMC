const express = require("express");
const nodemailer = require('nodemailer');
const router = express.Router()


router.post('/send', (req, res) => {
  try {
  const output = `
    <p>You have a new contact request</p>
    <h3>Contact Details</h3>
    <ul>  
      <li>Name: ${req.body.name}</li>
      <li>Email: ${req.body.email}</li>
    </ul>
    <h3>Message</h3>
    <p>${req.body.message}</p>
  `;

  // create reusable transporter object using the default SMTP transport
  const transporter = nodemailer.createTransport({
        service: "gmail",
        auth: {
          user: process.env.NODEMAILER_USER,
          pass: process.env.NODEMAILER_PASS
        },
        tls: {
          rejectUnauthorized: false,
        },
      });

  // setup email data with unicode symbols
  let mailOptions = {
      from: req.body.name, // sender address
      to: 'amenbentoumi@gmail.com', // list of receivers
      subject: 'Node Contact Request', // Subject line
      text: 'Hello world?', // plain text body
      html: output // html body
  };

  // send mail with defined transport object
  transporter.sendMail(mailOptions, (error, info) => {
      if (error) {
          return console.log(error);
      }
      console.log('Message sent: %s', info.messageId);   
      console.log('Preview URL: %s', nodemailer.getTestMessageUrl(info));

      res.send({msg:"mail is sent"})
  });
  } catch (error) {
           res.send({errors:[{msg:"failed send mail"}]}) 
      
  }
  });
  module.exports = router