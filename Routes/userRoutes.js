const express = require("express");
const router = express.Router();
const Users = require("../models/Users");

router.get("/:id", (req, res, next) => {
  Users.findOne({ _id: req.params.id }, (err, foundUser) => {
    foundUser.password = "Don't be smart";
    res.status(200).send({ validity: true, message: foundUser });
    if (err) {
      res.status(204).send({ validity: false, message: "user not found" });
    }
  });
});
router.post("/register", (req, res, next) => {
  Users.find({ email: req.body.email }, async (err, foundUser) => {
    if (foundUser.length === 0) {
      const newUser = new Users({
        name: req.body.name,
        email: req.body.email,
        password: req.body.password,
        bio: "",
        Address: "",
        Website: "",
        Github: "",
        Twitter: "",
        Instagram: "",
        Facebook: "",
        phoneNumber: "",
        mobileNumber: "",
        groupsCreated: [],
        reviewsMade: [],
        myJoinedGroups: [],
      });
      await newUser.save();
      res.status(200).send({ validity: true, message: { id: newUser._id } });
    } else {
      res
        .status(200)
        .send({ validity: false, message: "user already registered" });
    }
  });
});
router.post("/login", (req, res, next) => {
  // console.log(req.body);
  Users.findOne({ email: req.body.email }, async (err, foundUser) => {
    if (foundUser) {
      // console.log("foundUser : ", foundUser);
      if (foundUser.password === req.body.password) {
        res
          .status(200)
          .send({ validity: true, message: { id: foundUser._id } });
      } else {
        res
          .status(200)
          .send({ validity: false, message: "incorrect password" });
      }
    } else {
      res.status(200).send({ validity: false, message: "user not found" });
    }
  });
});
router.patch("/:id/addReview", (req, res, next) => {
  // console.log(req.params.id);
  Users.updateOne(
    { _id: req.params.id },
    {
      $push: {
        reviewsMade: req.body,
      },
    },
    (err) => {
      if (err) res.send({ validity: false, message: "Error Occurred" });
      else res.send({ validity: true, message: "Successfully added review" });
    }
  );
});
router.patch("/:id/makeNewGroup", (req, res, next) => {
  // "req.params.id make new group patch : ", req.params.id);
  // console.log(req.body);
  Users.updateOne(
    { _id: req.params.id },
    {
      $addToSet: {
        groupsCreated: req.body,
      },
    },
    (err) => {
      if (err) res.send({ validity: false, message: "Error Occurred" });
      else res.send({ validity: true, message: "Successfully added to group" });
    }
  );
});
// router.patch("/:id/addToGroup", (req, res, next) => {
//   Users.updateOne(
//     { _id: req.params.id },
//     {
//       $addToSet: {
//         myJoinedGroups: req.body,
//       },
//     },
//     (err) => {
//       if (err) res.send({ validity: false, message: "Error Occurred" });
//       else res.send({ validity: true, message: "Successfully added to group" });
//     }
//   );
// });

module.exports = router;
