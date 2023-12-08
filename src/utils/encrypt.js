const bcrypt = require('bcryptjs');

module.exports.encryptPayload = (payload) => {
  return bcrypt.hashSync(
    payload,
    bcrypt.genSaltSync(Number(process.env.salt_round))
  );
};
