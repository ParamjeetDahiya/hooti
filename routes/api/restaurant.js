const express = require("express");
const router = express.Router();
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const keys = require("../../config/keys");
const passport = require("passport");

// Load Input Validation
const validateRegisterInput = require("../../validation/register");
const validateLoginInput = require("../../validation/login");

// Load Restaurant model
const Restaurant = require("../../Model/Restaurant");

// @route   GET api/restaurant/test
// @desc    Tests restaurant route
// @access  Public
router.get("/test", (req, res) => res.json({ msg: "Users Works" }));

// @route   Post api/restaurant/register
// @desc    Register restaurant
// @access  Public
router.post("/register", (req, res) => {
  const { errors, isValid } = validateRegisterInput(req.body);

  // Check Validation
  if (!isValid) {
    return res.status(400).json(errors);
  }
  Restaurant.findOne({ email: req.body.email }).then(rest => {
    if (rest) {
      errors.email = "Email already exists";
      return res.status(400).json(errors);
    } else {
      const newRest = new Restaurant({
        name: req.body.name,
        email: req.body.email,
        loc_name: req.body.loc_name,
        loc: req.body.loc,
        tags: req.body.tags,
        password: req.body.password
      });

      bcrypt.genSalt(10, (err, salt) => {
        bcrypt.hash(newRest.password, salt, (err, hash) => {
          if (err) throw err;
          newRest.password = hash;
          newRest
            .save()
            .then(rest => res.json(rest))
            .catch(err => console.log(err));
        });
      });
    }
  });
});

router.post("/restFind", (req, res) => {
  console.log(req.body.name);
  console.log(typeof req.body.name);

  Restaurant.find({ name: { $regex: req.body.name } }, { name: 1 }).then(
    rest => {
      console.log(rest);

      if (rest) {
        res.json({
          name: rest.name
        });
      }
    }
  );
});

module.exports = router;
