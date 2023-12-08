module.exports.errorHandler = (err, req, res, next) => {
  res.json({ msg: err.message });
};

module.exports.notFound = (req, res) => {
  res.json({ msg: 'Halaman Tidak Ditemukan' });
};
