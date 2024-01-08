//defining neccessary libraries
const express = require('express')
const path = require('path') //for path configuration

// starting routes
const r = express.Router();

r.route('/')
    .get()
    .post()
    .patch()
    .delete()

module.exports = r