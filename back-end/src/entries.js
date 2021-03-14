import express from 'express'
import jwt from 'express-jwt'
import * as db from './dataHandler'
import {v4 as uuidv4} from 'uuid'
const fs = require('fs');
const path = require('path');
const router = express.Router()

const validateEntries = (req, res, next) => {
    let newUser = {
        id: uuidv4(),
        name: req.body.name,
        email: req.body.email,
        phoneNumber: req.body.phoneNumber,
        content:req.body.content,
      };
    const invalid = []
    console.log(newUser)
    for (var property in newUser) {
        console.log(property)
        if (newUser[property] == null || newUser[property].length === 0) {
            invalid.push(property)
        }
    }
    const requiredProperties = ["name", "email", "phoneNumber", "content"]
    requiredProperties.filter(prop => !newUser.hasOwnProperty(prop)).forEach(key => invalid.push(key))
    if (invalid.length > 0) {
        return res.status(400).send({message: "validation error", invalid})
    }
    if (newUser.email == "admin@gmail.com" && newUser.password == "password") {
        const token = jwtGenerator.sign({email}, process.env.JWT_SECRET, {expiresIn: '1h'})
        return res.send({token})
    }
    else {
        const jsonpath = "./data/entries.json"
        fs.access(jsonpath, fs.F_OK, async (err) => {
          if (err) {
            fs.mkdir('./data', { recursive: true }, (err) => {
              if (err) throw err;
            fs.writeFile(path.join(__dirname, '../data', 'entries.json'), '[]', async err => {
              if (err) throw err;
              await db.add(newUser);
              return res.status(201).json(await db.getAll(newUser.id));
            });
          });
          }
          else {
            await db.add(newUser);
            return res.status(201).json(await db.getAll(newUser.id));
          }
        });
      }
        
    next()
}

router.post('/', validateEntries, async (req, res) => {
    const body = req.body
    const newEntry = {id: uuidv4(), ...body}
    console.log(newEntry, req.body)
    
    await db.add(newEntry)
    return res.send(newEntry)

    
})

router.use(jwt({secret: process.env.JWT_SECRET}))

router.get('/', async (req, res) => {
    res.send(await db.getAll())
})

export default router
