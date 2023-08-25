// Here I want to get information from the usermatches table in the db and post it for the user

var express = require("express");
var router = express.Router();
const db = require("../model/helper");


router.get("/", (req, res) => {
  // Send back the full list of usermatches
  db("SELECT * FROM usermatches ORDER BY id ASC;")
    .then(results => {
      res.send(results.data);
    })
    .catch(err => res.status(500).send(err));
});



router.post("/", async (req, res) => {
  // Get data from request body
  let { player1id, player2id, accept, decline } = req.body;
  // Create the SQL statement
  let sql = `
    INSERT INTO usermatches (player1id, player2id, accept, decline)
    VALUES ('${player1id}', '${player2id}', '${accept}', '${decline}')`;

  // Do the INSERT
  try {
    // Try the INSERT; the results aren't interesting
    await db(sql);
    // If we get here, INSERT succeeded; return updated list of usermatches
    let result = await db("SELECT * FROM usermatches");
    let usermatches = result.data; // all the rows found in the DB
    res.status(201).send(usermatches);
  } catch (err) {
    res.status(500).send({ error: err.message });
  }
});


router.delete("/:id", async (req, res) => {
  // Find out if item exists
  let matches_id = req.params.id;
  try {
    let result = await db(`SELECT * FROM usermatches WHERE id = ${matches_id}`);
    if (result.data.length) {
      // Item was found!
      let sql = `DELETE FROM usermatches WHERE id = ${matches_id}`;
      // Try the DELETE; the results aren't interesting
      await db(sql);
      // If we get here, DELETE succeeded; return updated list of userinfo
      // result = await db("SELECT * FROM userinfo");
      let matches = result.data; // all the rows found in the DB
      res.send(matches);
    } else {
      // Item not found!
      res.status(404).send({ error: "Item not found" });
    }
  } catch (err) {
    res.status(500).send({ error: err.message });
  }
});


module.exports = router;
