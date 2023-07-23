// Create web server
var express = require('express');
var router = express.Router();
var db = require('../db');
var shortid = require('shortid');
var controller = require('../controllers/comments.controller');

// Get comments
router.get('/', controller.index);

// Search comments
router.get('/search', controller.search);

// Create comments
router.get('/create', controller.create);

// View comment
router.get('/:id', controller.view);

// Post comment
router.post('/create', controller.postCreate);

module.exports = router;

