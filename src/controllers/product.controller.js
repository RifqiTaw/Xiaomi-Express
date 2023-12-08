const { products, users } = require('../db/models');

module.exports.getProducts = async (req, res, next) => {
  const err = new Error();
  try {
    const getProducts = await products.findAll({
      include: [{ model: users, attributes: ['username'] }],
    });

    res.json({
      success: true,
      data: getProducts,
    });
  } catch (error) {
    err.message = error.message;
    return next(err);
  }
};

module.exports.addProduct = async (req, res) => {
  const { userId } = req;
  const payload = req.body;
  const err = new Error();

  try {
    await products.create({
      id: crypto.randomUUID(),
      user_id: userId,
      ...payload,
    });

    return res.json({
      success: true,
      data: payload,
      msg: 'Data Berhasil Ditambah',
    });
  } catch (error) {
    err.message = error.message;
    return next(err);
  }
};

module.exports.deleteProduct = async (req, res, next) => {
  const { productId } = req.params;
  const err = new Error();

  try {
    await products.destroy({ where: { id: productId } });
    res.json({
      success: true,
      data: { productId },
      msg: 'Data Berhasil Dihapus',
    });
  } catch (error) {
    err.message = error.message;
    return next(err);
  }
};

module.exports.updateProduct = async (req, res) => {
  const { productId } = req.params;
  const payload = req.body;
  const err = new Error();

  try {
    await products.update({ ...payload }, { where: { id: productId } });
    res.json({ success: true, data: payload, msg: 'Data Berhasil Diubah' });
  } catch (error) {
    err.message = error.message;
    return next(err);
  }
};
