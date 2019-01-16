'use strict';

const bcrypt = require('bcryptjs');
const password = 'jugglingclub';

bcrypt.hash(password, 10)
  .then( digest =>{
    console.log('the digest is =', digest);
    return digest;
  })
  .catch(err => {
    console.err('error', err);
  });