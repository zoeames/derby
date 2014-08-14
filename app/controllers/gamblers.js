'use strict';

var Gambler = require('../models/gambler');

exports.index = function(req, res){
  Gambler.all(function(err, gamblers){
    res.render('gamblers/index', {gamblers:gamblers});
  });
};

exports.create = function(req, res){
  Gambler.create(req.body, function(err, gambler){
    res.render('gamblers/gambler', {gambler:gambler});
  });
};


