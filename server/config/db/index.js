const mongoose = require("mongoose");
require("dotenv").config();

async function connect() {
  try {
    await mongoose.connect(process.env.DATABASE_URL, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    /* await mongoose.connect(`mongodb+srv://${process.env.DB_USERNAME}:${process.env.DB_PASSWORD}@waifuhunt.b7xga8c.mongodb.net/WaifuHunt`, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        }); */
    /* await mongoose.connect(
      `mongodb+srv://${process.env.DB_USERNAME}:${process.env.DB_PASSWORD}@waifuhunt.b7xga8c.mongodb.net/WaifuHunt?retryWrites=true&w=majority`,
      {
        useNewUrlParser: true,
        useUnifiedTopology: true,
      }
    ); */
    /* const db = mongoose.connection;
        db.once('open', () => console.log('Connected to the database')); */
    console.log("Connected to the database");
  } catch (error) {
    console.log(error);
  }
}

module.exports = { connect };
