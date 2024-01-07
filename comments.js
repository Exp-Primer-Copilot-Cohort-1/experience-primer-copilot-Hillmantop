// Create web server

var express = require('express');
var router = express.Router();
var Comments = require('../models/comments.js');

// GET: /comments
// Get all comments
router.get('/', function(req, res, next) {
  Comments.find(function(err, comments) {
    if (err) {
      return next(err);
    }
    res.json(comments);
  });
});

// POST: /comments
// Create a new comment
router.post('/', function(req, res, next) {
  Comments.create(req.body, function(err, comment) {
    if (err) {
      return next(err);
    }
    res.json(comment);
  });
});

// GET: /comments/:id
// Get a comment by id
router.get('/:id', function(req, res, next) {
  Comments.findById(req.params.id, function(err, comment) {
    if (err) {
      return next(err);
    }
    res.json(comment);
  });
});

// PUT: /comments/:id
// Update a comment by id
router.put('/:id', function(req, res, next) {
  Comments.findByIdAndUpdate(req.params.id, req.body, function(err, comment) {
    if (err) {
      return next(err);
    }
    res.json(comment);
  });
});

// DELETE: /comments/:id
// Delete a comment by id
router.delete('/:id', function(req, res, next) {
  Comments.findByIdAndRemove(req.params.id, req.body, function(err, comment) {
    if (err) {
      return next(err);
    }
    res.json(comment);
  });
});

module.exports = router;
