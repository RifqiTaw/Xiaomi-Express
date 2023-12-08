const express = require('express');

const router = express.Router();

// Product Router
const productRouter = require('./products.router');
// Authentication Router
const authRouter = require('./auth.router');

const { logout } = require('../controllers/auth.controller');
const { authHandler } = require('../middlewares/authHandler');

router.use(authRouter);

// Cek Token
router.use([authHandler]);

router.post('/logout', logout);
router.use('/products', productRouter);

module.exports = router;
