function getPlanes(req, res, next) {
  const db = req.app.get('db');
  db.get_planes()
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
