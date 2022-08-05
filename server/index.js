const express = require('express');
const app = express();
const cors = require('cors');
require('dotenv').config()
const corsOption = {
  origin: '*',
  credentials: true,
  /* optionSuccessStatus: 200, */
};
const port = process.env.PORT || 8000;

const routes = require('./routes');
const db = require('./config/db');

// Connect to DB 
db.connect();

// MIDDLEWARE
// parse requests of content-type - application/x-www-form-urlencoded
app.use(express.urlencoded({ extended: true, limit: '100mb' }),);
// parse requests of content-type - application/json
app.use(express.json({ limit: '100mb' }));
/* app.use(cors(corsOption)); */
app.use(cors(corsOption));

routes(app);

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
