const nodemailer = require('nodemailer');
const sendGridtranporter = require('nodemailer-sendgrid-transport');
const transporter = nodemailer.createTransport(
  sendGridtranporter({
    auth: {
      api_key: process.env.MAIL_API_KEY,
    },
  })
);

exports.sendMailHandler = (email, password, to, phone) => {
  // send mail
  const sendedEmail = transporter.sendMail({
    from: 'liemhup@gmail.com',
    to,
    subject: 'Thông tin đăng nhập trên trang web dalatFarm ',
    html: `<body>
    <h1>Xin chao ${email}</h1>       
    <p>Tài khoản của bạn đã được tạo trên Dalat Farm.</p>
    <p>Thông tin đăng nhập</p>
    <ul>
    <li> Email đăng nhập: ${email}</li>
    <li> Mật khẩu: ${password}</li>
    Mọi thắc mắc xin liên hệ: ${phone}
  </body>`,
  });
};
