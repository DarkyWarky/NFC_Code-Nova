const express = require("express");
const router = express.Router();
const fetchUniversities = require('../Database/mongoose'); 

router.get("/", async (req, res) => {
  try {
    const universities = await fetchUniversities();

    if (!universities || universities.length === 0) {
      // Handle the case where no universities are found
      res.render("Resourcehub", { error: "No universities found." });
      return;
    }

    let data = {
      css: '../public/css/Resourcehub.css',
      script: '../public/js/Resourcehub.js',
      universities: universities
    };

    res.render("Resourcehub", data);
  } catch (error) {
    console.error("Error:", error);
    res.status(500).send("Internal Server Error");
  }
});

module.exports = router;
