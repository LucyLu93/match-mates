// Here I want to get information from the userinfo table in the db and post it for the user
var express = require("express");
var router = express.Router();
const db = require("../model/helper");

//Hello
router.get("/", (req, res) => {
  // Send back the full list of userinfo
  db("SELECT * FROM userinfo ORDER BY id ASC;")
    .then(results => {
      res.send(results.data);
    })
    .catch(err => res.status(500).send(err));
});

// GET user by ID
router.get("/:id", async (req, res) => {
  // Find out if item exists
  let user_id = req.params.id;
  try {
    let result = await db(`SELECT * FROM userInfo WHERE id = ${user_id}`);
    if (result.data.length) {
      // Item was found!
    
      let userinfo = result.data; // all the rows found in the DB
      res.send(userinfo);
    } else {
      // Item not found!
      res.status(404).send({ error: "Item not found" });
    }
  } catch (err) {
    res.status(500).send({ error: err.message });
  }
});







router.post("/", async (req, res) => {
  // Get data from request body
  let { firstname, lastname, age, location, wins, losses, draws, imageUrl } = req.body;
  // Create the SQL statement
  let sql = `
    INSERT INTO userinfo (firstname, lastname, age, location, wins, losses, draws, imageUrl)
    VALUES ('${firstname}', '${lastname}', '${age}', '${location}',
     '${wins}', '${losses}', '${draws}', '${imageUrl}')`;

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

router.delete("/:id", async (req, res) => {
  // Find out if item exists
  let user_id = req.params.id;
  try {
    let result = await db(`SELECT * FROM userInfo WHERE id = ${user_id}`);
    if (result.data.length) {
      // Item was found!
      let sql = `DELETE FROM userinfo WHERE id = ${user_id}`;
      // Try the DELETE; the results aren't interesting
      await db(sql);
      // If we get here, DELETE succeeded; return updated list of userinfo
      // result = await db("SELECT * FROM userinfo");
      let userinfo = result.data; // all the rows found in the DB
      res.send(userinfo);
    } else {
      // Item not found!
      res.status(404).send({ error: "Item not found" });
    }
  } catch (err) {
    res.status(500).send({ error: err.message });
  }
});


module.exports = router;
