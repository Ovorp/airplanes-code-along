require('dotenv').config();

const express = require('express');

const app = express();

const massive = require('massive');

const { SERVER_PORT, CONNECTION_STRING } = process.env;

const { getPlanes } = require('./controller');

const planesEndPoint = '/api/planes';

massive({
  connectionString: CONNECTION_STRING,
  ssl: {
    rejectUnauthorized: false,
  },
})
  .then((dbInstance) => {
    app.set('db', dbInstance);
    // dbInstance
    //   .new_planes()
    //   .then((planes) => {
    //     console.log(planes);
    //   })
    //   .catch((err) => {
    //     console.log(err);
    //   });

    // dbInstance
    //   .get_planes()
    //   .then((planes) => {
    //     console.log(planes);
    //   })
    //   .catch((err) => {
    //     console.log(err);
    //   });
  })
  .catch((err) => console.log(err));
app.use(express.json());

app.use(express.json());

app.get(planesEndPoint, getPlanes);

app.listen(SERVER_PORT, () => {
  console.log(`Server listening on port ${SERVER_PORT}`);
});
