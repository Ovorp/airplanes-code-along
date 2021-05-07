function getPlanes(req, res, next) {
  const db = req.app.get('db');
  const { numberOfPass } = req.query;
  const passCount = numberOfPass ? [numberOfPass] : [0];
  db.get_planes(passCount)
    .then((planes) => {
      res.status(200).json(planes);
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
}

module.exports = {
  getPlanes,
};
