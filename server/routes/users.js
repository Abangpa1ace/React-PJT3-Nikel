var express = require('express');
var router = express.Router();
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken')

let usersDB = require('../database/usersData');

const regexEmail = /^([0-9a-zA-Z_.-]+)@([0-9a-zA-Z_-]+)(\.[0-9a-zA-Z_-]+){1,2}$/;
const regexPwd = /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,16}$/;
const regexNotNum = /[^0-9]/;

router.post('/register', async (req, res, next) => {
  try {
    const { information, checked } = req.body;
    const response = registerResponse(information);
    if (!response.success) {
      res.status(412).send({ status: 412, message: response.message });
    }
    else {
      const hashedPassword = await bcrypt.hash(information.password, 10);
      usersDB.push({ 
        id: Date.now().toString(), 
        information: {...information, password: hashedPassword},
        checked,
      })
      res.json(response);
    }
  }
  catch(err) {
    throw new Error(err);
  }
})

router.post('/login', (req, res, next) => {
  try {
    const body = req.body;
    const response = loginResponse(body);
    if (!response.success) {
      res.status(413).send({ status: 413, message: response.message });
    }
    else {
      console.log(response)
      res.json(response)
    }
  }
  catch(err) {
    throw new Error(err);
  }
})

// Register Validator & Function
const registerValidator = {
  email: (value) => {
    return !value
      ? 'Undefined Email'
      : !regexEmail.test(value)
      ? 'Not Valid Email'
      : usersDB.find(user => user.information.email === value)
      ? 'Already Existing Email'
      : undefined;
  },
  password: (value) => {
    return !value
      ? 'Undefined Password'
      : !regexPwd.test(value)
      ? 'Not Valid Password'
      : undefined;
  },
  fullName: (value) => {
    return !value
    ? 'Undefined User Name'
    : undefined;
  },
  phone: (value) => {
    return !value
    ? 'Undefined Phone Number'
    : regexNotNum.test(value)
    ? 'Invalid Phone Value'
    : undefined;
  }
}

const registerResponse = (body) => {
  let response = { success: false, message: '' };
  for (let key in body) {
    const validMsg = registerValidator[key](body[key]);
    if (validMsg) {
      return ({ ...response, message: validMsg });
    }
  }
  return ({ success: true, message: 'Success' })
}

// Sign-In Validator & Function
const loginValidator = {
  email: (value, matchedUser) => {
    return !value
      ? 'Undefined Email'
      : !regexEmail.test(value)
      ? 'Not Valid Email'
      : !matchedUser
      ? 'Not Existing Email'
      : undefined;
  },
  password: (value, matchedUser) => {
    return !value
      ? 'Undefined Password'
      : !regexPwd.test(value)
      ? 'Not Valid Password'
      : !bcrypt.compareSync(value, matchedUser.information.password)
      ? 'Unmatched Password'
      : undefined;
  }
}

const loginResponse = (body) => {
  let response = { success: false, message: '' };
  const matchedUser = usersDB.find(user => body.email === user.information.email);
  for (let key in body) {
    const validMsg = loginValidator[key](body[key], matchedUser);
    if (validMsg) {
      return ({ ...response, message: validMsg });
    }
  }

  const token = jwt.sign(body, 'MY_SECRET_KEY');
  return ({ 
    success: true, 
    message: 'Success', 
    userName: matchedUser.information.fullName,
    token, 
  })
}

module.exports = router;