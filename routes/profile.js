// Here I want to get information from the userinfo table in the db and post it for the user
var express = require("express");
var router = express.Router();
const db = require("../model/helper");


router.get("/", (req, res) => {
  // Send back the full list of userinfo
  db("SELECT * FROM userinfo ORDER BY id ASC;")
    .then(results => {
      res.send(results.data);
    })
    .catch(err => res.status(500).send(err));
});



router.post("/", async (req, res) => {
  // Get data from request body
  let { firstname, lastname, age, location, wins, losses, draws } = req.body;
  // Create the SQL statement
  let sql = `
    INSERT INTO userinfo (firstname, lastname, age, location, wins, losses, draws)
    VALUES ('${firstname}', '${lastname}', '${age}', '${location}',
     '${wins}', '${losses}', '${draws}')`;

  // Do the INSERT
  try {
    // Try the INSERT; the results aren't interesting
    await db(sql);
    // If we get here, INSERT succeeded; return updated list of userinfo
    let result = await db("SELECT * FROM userinfo");
    let userinfo = result.data; // all the rows found in the DB
    res.status(201).send(userinfo);
  } catch (err) {
    res.status(500).send({ error: err.message });
  }
});


module.exports = router;
