

import entryRoutes from './src/entries'
import cors from 'cors'
import adduser from './src/adduser'
import express from "express";
import * as jwtGenerator from 'jsonwebtoken'
import * as db from './src/jsonHandler';

let jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");

const app = express()
const PORT = process.env.PORT || 3000

app.use(express.json())
app.use(cors())

/*app.post('/auth', (req, res) => {
    const username = req.body.username
    const password = req.body.password

    if (username == "test" && password == "password") {
        const token = jwtGenerator.sign({username}, process.env.JWT_SECRET, {expiresIn: '1h'})
        return res.send({token})
    }
    return res.status(401).send({error: "incorrect username\password"})
})*/

app.post("/auth", async (req, res) => {
   
    const email = req.body.email
    const password = req.body.password
    if (email == "admin@gmail.com" && password == "password") {
      const token = jwtGenerator.sign({email}, process.env.JWT_SECRET, {expiresIn: '1h'})
      return res.send({token})
  }
    let user = await db.readUserItems(req.body.email);
    let emailFound = false;
    user.forEach((userlist) => {
      if (email === userlist.email) {
        emailFound = true;
        bcrypt.compare(password, userlist.password, function (err, result) {
          if (!result) {
            return res.status(404).json({ message: `Incorrect password` })
          } else {
            /*let token = jwt.sign(newUser, `${process.env.PRIVATEKEY}`);
            return res.status(201).send({ token: token });*/
            const token = jwtGenerator.sign({email}, process.env.JWT_SECRET, {expiresIn: '1h'})
      return res.send({token})
          }
        });
      }
    });
    if (!emailFound) {
      return res.status(404).json({ message: `Incorrect Email address` })
    }
  });
  

app.use('/contact_form/entries', entryRoutes)

app.use(adduser);

app.listen(PORT, () => {
    console.log(`Server started at http://localhost:${PORT}`)
})
