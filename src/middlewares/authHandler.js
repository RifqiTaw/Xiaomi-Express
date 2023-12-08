const { user_token } = require('../db/models');
const jwt = require('jsonwebtoken');

module.exports.authHandler = async (req, res, next) => {
  const { authorization } = req.headers;
  const err = new Error();

  try {
    // cek authorization di database sudah benar atau belum
    const userToken = await user_token.findOne({
      where: { token: authorization },
    });

    // cek apakah ada / tidak ada authorization
    if (!userToken) {
      err.message = 'Silahkan Input Token Terlebih Dahulu';
      return next(err);
    }
    req.userId = jwt.decode(authorization).userId;
    next();
  } catch (error) {
    err.message = error.message;
    return next(err);
  }
};
