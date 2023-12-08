const express = require('express');

const router = express.Router();

const {
  getProducts,
  addProduct,
  deleteProduct,
  updateProduct,
} = require('../controllers/product.controller');

router.route('/').get(getProducts).post(addProduct);
router.route('/:productId').delete(deleteProduct).put(updateProduct);

module.exports = router;
