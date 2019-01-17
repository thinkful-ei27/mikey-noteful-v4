'use strict';

const app = require('../server');
const chai = require('chai');
const chaiHttp = require('chai-http');
const mongoose = require('mongoose');

const { TEST_MONGODB_URI } = require('../config');

const User = require('../models/user');

const expect = chai.expect;

chai.use(chaiHttp);

describe('Noteful API - Users', function () {
  const username = 'exampleUser';
  const password = 'examplePass';
  const fullname = 'Example User';

  before(function () {
    return mongoose.connect(TEST_MONGODB_URI, { useNewUrlParser: true, useCreateIndex : true })
      .then(() => User.deleteMany());
  });

  beforeEach(function () {
    return User.createIndexes();
  });

  afterEach(function () {
    return User.deleteMany();
  });

  after(function () {
    return mongoose.disconnect();
  });

  describe.only('POST /api/users', function () {

    it('Should create a new user', function () {
      let res;
      return chai
        .request(app)
        .post('/api/users')
        .send({ username, password, fullname })
        .then(_res => {
          res = _res;
          expect(res).to.have.status(201);
          expect(res.body).to.be.an('object');
          expect(res.body).to.have.keys('id', 'username', 'fullname','createdAt', 'updatedAt');
          expect(res.body.id).to.exist;
          expect(res.body.username).to.equal(username);
          expect(res.body.fullname).to.equal(fullname);
          return User.findOne({ username });
        })
        .then(user => {
          expect(user).to.exist;
          expect(user.id).to.equal(res.body.id);
          expect(user.fullname).to.equal(fullname);
          return user.validatePassword(password);
        })
        .then(isValid => {
          expect(isValid).to.be.true;
        });
    });

    it('Should reject users with missing username', function(){
      let res;
      return chai.request(app)
        .post('/api/users')
        .send({password, fullname })
        .then(_res =>{
          res =_res;
          console.log('this is the res', res.body);
          expect(res).to.have.status(422);
          expect(res.body.message).to.equal('Missing field');
          expect(res.body.location).to.equal('username');
          expect(res.body.reason).to.equal('ValidationError');

        });

    });
    it('Should reject users with missing password',function(){
      let res;
      return chai.request(app)
        .post('/api/users')
        .send({username, fullname })
        .then(_res =>{
          res =_res;
          console.log('this is the res', res.body);
          expect(res).to.have.status(422);
          expect(res.body.message).to.equal('Missing field');
          expect(res.body.location).to.equal('password');
          expect(res.body.reason).to.equal('ValidationError');

        });
    });
    it('Should reject users with non-string username');
    it('Should reject users with non-string password');
    it('Should reject users with non-trimmed username');
    it('Should reject users with non-trimmed password');
    it('Should reject users with empty username');
    it('Should reject users with password less than 8 characters');
    it('Should reject users with password greater than 72 characters');
    it('Should reject users with duplicate username');
    it('Should trim fullname');

  });

});