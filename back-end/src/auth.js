
require("dotenv").config();
import express from "express";
import * as db from "./jsonHandler";
const router = express.Router();
let jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");


//3.Route to log a registered user in to create a JWT (JSON Web Token) token:POST /auth
router.post("/auth", async (req, res, next) => {
  let newUser = {
    email: req.body.email,
    password: req.body.password,
  };

  let user = await db.readUserItems(req.body.email);
  let emailFound = false;
  user.forEach((userlist) => {
    if (newUser.email === userlist.email) {
      emailFound = true;
      bcrypt.compare(newUser.password, userlist.password, function (err, result) {
        if (!result) {
          return res.status(404).json({ message: `Incorrect password` })
        } else {
          let token = jwt.sign(newUser, `${process.env.PRIVATEKEY}`);
          return res.status(201).send({ token: token });
        }
      });
    }
  });
  if (!emailFound) {
    return res.status(404).json({ message: `Incorrect Email address` })
  }
});

export default router;