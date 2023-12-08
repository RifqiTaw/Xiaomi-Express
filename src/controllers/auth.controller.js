const { users, user_token } = require('../db/models');
const { encryptPayload } = require('../utils/encrypt');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

module.exports.register = async (req, res) => {
  const { username, password } = req.body;

  await users.create({
    id: crypto.randomUUID(),
    username,
    password: encryptPayload(atob(password)),
  });

  res
    .status(200)
    .json({ success: true, data: { username }, msg: 'Berhasil Buat Akun' });
};

module.exports.login = async (req, res, next) => {
  const { username, password } = req.body;
  const err = new Error();

  const user = await users.findOne({ where: { username } });

  // cek username
  if (!user) {
    err.message = 'Username atau Password Tidak Tepat';
    return next(err);
  }

  try {
    // cek password
    if (!bcrypt.compareSync(atob(password), user.password)) {
      err.message = 'Username atau Password Tidak Tepat';
      return next(err);
    }
  } catch (error) {
    err.message = 'Username atau Password Tidak Tepat';
    return next(err);
  }

  // bikin token
  const token = jwt.sign({ id: user.id, username }, process.env.secret_key, {
    expiresIn: '5m',
  });

  // implemen masukkan token ke dalam database di user_token
  await user_token.create({
    id: crypto.randomUUID(),
    user_id: user.id,
    token,
  });

  res
    .status(200)
    .setHeader('access_token', token)
    .json({ success: true, msg: 'Berhasil Login' });
};

module.exports.logout = async (req, res) => {
  const { authorization } = req.headers;
  const err = new Error();
  try {
    await user_token.destroy({
      where: {
        token: authorization,
      },
    });

    res.json({ success: true, msg: 'Berhasil Logout' });
  } catch (error) {
    err.message = error.message;
    return next(err);
  }
};
