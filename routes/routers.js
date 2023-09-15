const express = require("express");
const router = express.Router();
const fetchUniversities = require('../Database/mongoose'); 
const fetchUniversitiesByLocation =require ('../Database/mongos')
const fetchUniversitiesByLocation1 =require ('../Database/united-states')
const fetchUniversitiesByLocation2 =require ('../Database/nigeria')
const fetchUniversitiesByLocation3 =require ('../Database/europe')
const fetchUniversitiesByLocation4 =require ('../Database/canada')
const fetchUniversitiesByLocation5 =require ('../Database/pakistan')
const fetchUniversitiesByLocation6 =require ('../Database/united-kingdom')
const fetchUniversitiesByLocation7 =require ('../Database/south-africa')
const fetchUniversitiesByLocation8 =require ('../Database/mongos')

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
router.get("/india", async (req, res) => {
  try {
    const universities = await fetchUniversitiesByLocation();

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
router.get("/united-states", async (req, res) => {
  try {
    const universities = await fetchUniversitiesByLocation1();

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
router.get("/nigeria", async (req, res) => {
  try {
    const universities = await fetchUniversitiesByLocation2();

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
router.get("/europe", async (req, res) => {
  try {
    const universities = await fetchUniversitiesByLocation3();

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
router.get("/canada", async (req, res) => {
  try {
    const universities = await fetchUniversitiesByLocation4();

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
router.get("/pakistan", async (req, res) => {
  try {
    const universities = await fetchUniversitiesByLocation5();

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
router.get("/united-kingdom", async (req, res) => {
  try {
    const universities = await fetchUniversitiesByLocation6();

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
router.get("/south-africa", async (req, res) => {
  try {
    const universities = await fetchUniversitiesByLocation7();

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
