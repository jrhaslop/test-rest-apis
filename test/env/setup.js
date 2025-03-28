require('mocha');
require('dotenv').config();
require('colors');

const supertest = require('supertest');
const context = require('../api/context');
const chai = require('chai');
const should = chai.should();
const chaiJsonPattern = require('chai-json-pattern').default;
chai.use(chaiJsonPattern);

before(function () {
  console.log('    Testing Gorest APIs    '.black.bgGreen + '\n');
  context.hostname = 'https://gorest.co.in';
  context.api = supertest(context.hostname);
});