const nodemailer = require("nodemailer");

module.exports = {
  sendForgot: async (email, token) => {
    const nodemailer = require("nodemailer");
    const transporter = nodemailer.createTransport({
      host: process.env.MAIL_HOST,
      port: process.env.MAIL_PORT,
      secure: process.env.MAIL_SECURE,
      auth: {
        user: process.env.MAIL_USER,
        pass: process.env.MAIL_PASSWORD,
      },
    });

    const info = await transporter.sendMail({
      from: `<${process.env.MAIL_FROM}>`, // sender address
      to: email,
      subject: `Xac minh OTP`, // Subject line
      html: `<p>
          Click
          <a href="http://localhost:3000/auth/verify/${token}">
            here
          </a>
          to reset password
        </p>`,
    });
    console.log(info);
  },
};
