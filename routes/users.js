'use strict';

const express = require('express');


const User = require('../models/user');

const router = express.Router();

router.post( '/', (req, res, next)=>{
  const { userName, fullName, password } = req.body;
 
  const newUser ={
    userName,
    fullName, 
    password
  };

  if(!userName){
    const err = new Error('username required');
    err.status = 400;
    return next(err);
  }
  if(!password){
    const err = new Error('password required');
    err.status = 400;
    return next(err);
  }
  User.create(newUser)
    .then(result => {
      console.log(res.body);
      res.location(`${req.originalUrl}/${result.id}`).status(201).json(result);
    })
    
    .catch(err => {
      if (err.code === 11000) {
        err = new Error('username must be unique');
        err.status = 400;
      }
      next(err);
    });

});

module.exports = router;