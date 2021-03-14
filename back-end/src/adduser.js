
require("dotenv").config();
import express from "express";
import { v4 as uuidv4 } from 'uuid';
import * as db from "./jsonHandler";

const fs = require('fs');
const path = require('path');
const router = express.Router();
const bcrypt = require("bcrypt");
const saltRounds = bcrypt.genSaltSync(10);
const re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
const pwdregx = /^.{8}$/;
const requiredUserProperties = ["name", "email", "password"];
const getMissingUserProperties = userlist => {
  return requiredUserProperties
    .filter(property => !userlist.hasOwnProperty(property))
}



//2.Route to create a user:POST /users

router.post("/users", async (req, res) => {
  let newUser = {
    id: uuidv4(),
    name: req.body.name,
    email: req.body.email,
    password: req.body.password,
  };
  const invalid = [];
  const missingProperties = getMissingUserProperties(req.body)
    .map(missingProperty => `${missingProperty}`);

  if (missingProperties.length) {
    invalid.push(...missingProperties)
  }

  if (newUser.email && !re.test(newUser.email)) {
    invalid.push('email');
  }

  if (newUser.password && !pwdregx.test(newUser.password)) {
    invalid.push('password');
  }
  if (invalid.length) {
    return res.status(400).json({ message: "Validation Error", invalid: invalid });
  }
  else {
    const jsonpath = "./data/users.json"
    fs.access(jsonpath, fs.F_OK, async (err) => {
      if (err) {
        fs.mkdir('./data', { recursive: true }, (err) => {
          if (err) throw err;
        fs.writeFile(path.join(__dirname, '../data', 'users.json'), '[]', async err => {
          if (err) throw err;
          bcrypt.hash(newUser.password, saltRounds, async function (err, hash) {
            newUser.password = hash;
            await db.createUserItem(newUser)
            let response = { id: newUser.id, name: newUser.name, email: newUser.email }
            return res.status(201).json(response);
          });
        });
      });
      }
      else {
        bcrypt.hash(newUser.password, saltRounds, async function (err, hash) {
          newUser.password = hash;
          await db.createUserItem(newUser)
          let response = { id: newUser.id, name: newUser.name, email: newUser.email }
          return res.status(201).json(response);
        });
      }
    });
  }
});

export default router;
