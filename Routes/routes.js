const express = require("express");
const router = express.Router();
const Database = require("../models/Database");

router.get("/:id/:type", (req, res, next) => {
  Database.find({ secret_key: req.params.id }, async (err, data) => {
    console.log("data : ", data);
    if (data.length !== 0) {
      if (req.params.type === "reviews") {
        res.status(200).send({ validity: true, data: data[0].allReviews });
      } else if (req.params.type === "groups") {
        res.status(200).send({ validity: true, data: data[0].allGroups });
      } else {
        res.status(200).send({ validity: false, message: "Data not found" });
      }
    } else {
      res.status(200).send({ validity: false, message: "no data found" });
    }
  });
});
router.post("/addingReview", async (req, res, next) => {
  Database.find({ secret_key: "19012001" }, async (err, foundData) => {
    if (foundData.length === 0) {
      const newData = new Database({
        secret_key: "19012001",
        allGroups: [],
        allReviews: req.body,
      });
      await newData.save();
      res.send({ validity: true, message: "Review added" });
    } else {
      res.send({ validity: false, message: "no database exists" });
    }
  });
});
router.patch("/addingReview", (req, res, next) => {
  Database.updateOne(
    { secret_key: "19012001" },
    {
      $addToSet: {
        allReviews: req.body,
      },
    },
    (err) => {
      if (err) res.send({ validity: false, message: "Error Occurred" });
      else res.send({ validity: true, message: "Successfully added review" });
    }
  );
});
router.post("/addingGroup", async (req, res, next) => {
  Database.find({ secret_key: "19012001" }, async (err, foundData) => {
    // console.log("foundData : ", foundData);
    // console.log("req.body : ", req.body);
    if (foundData.length === 0) {
      const newData = new Database({
        secret_key: "19012001",
        allGroups: req.body,
        allReviews: [],
      });
      await newData.save();
      res.status(200).send({ validity: true, message: "Group added" });
    } else {
      res.status(200).send({ validity: false, message: "no database exists" });
    }
  });
});
router.patch("/addingGroup", (req, res, next) => {
  Database.updateOne(
    { secret_key: "19012001" },
    {
      $addToSet: {
        allGroups: req.body,
      },
    },
    (err) => {
      if (err) res.send({ validity: false, message: "Error Occurred" });
      else res.send({ validity: true, message: "Successfully added to group" });
    }
  );
});

module.exports = router;
