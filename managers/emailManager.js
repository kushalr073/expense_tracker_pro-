const nodemailer = require("nodemailer");

const emailManager = async (to, text, html, subject) => {
var transport = nodemailer.createTransport({
    host: "sandbox.smtp.mailtrap.io",
    port: 2525,
    auth: {
      user: "0965216d328ca0",
      pass: "217b427731e31f"
    }
  });

  await transport.sendMail({
    to: to,
    from: "info@expensetracker.com",
    text: text,
    html: html,
    subject: subject,
  });
};

module.exports = emailManager;