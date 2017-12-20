require('dotenv').config();
const express = require('express');
// const bodyParser = require('body-parser');
const items = require('../database-mongo');

const app = express();
const PORT = process.env.PORT || 3000;
app.use(express.static(`${__dirname}/../angular-client`));
app.use(express.static(`${__dirname}/../node_modules`));
app.get('/', () => {

})
app.get('/faves', (req, res) => {
  console.log('Route hit!');
  items.selectAll((err, data) => {
    if (err) {
      console.log('this is a server error ', err);
      res.sendStatus(500);
    } else {
      res.json(data);
    }
  });
});

app.listen(PORT, (err) => {
  if (err) {
    console.error(err);
  } else {
    console.log(`listening on port ${PORT}!`);
  }
});
