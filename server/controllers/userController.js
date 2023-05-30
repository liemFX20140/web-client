const userModel = require('../models/userModel');
const generatePassword = require('../helpers/gerneratePassword');
const bcrypt = require('bcryptjs');
const mailSender = require('../helpers/sendMail');

exports.createUser = async (req, res, next) => {
  const { userRoll, email } = req.body;
  console.log(userRoll);
  const password = generatePassword.generatePassword(8);
  const newUser = await userModel.create({
    userRoll,
    password,
    email,
  });
  res.send(JSON.stringify(newUser));
  res.end();
};

exports.userLogIn = async (req, res, next) => {
  const { email, password } = req.body;
  const matchUser = await userModel.findOne({ email });
  if (matchUser == null) {
    res.status(401).send(JSON.stringify('Người dùng không tồn tại'));
    return;
  }
  const doMatch = await bcrypt.compare(password, matchUser.password);
  if (!doMatch) {
    res.status(402).send(JSON.stringify('Sai mật khẩu'));
    return;
  }
  req.session.user = matchUser;
  res.status(200).send(JSON.stringify(matchUser));
  res.end();
};
