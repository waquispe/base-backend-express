'use strict';
var send = require('../../send');

module.exports = function(model) {

  function create(req, res, next) {
    model.build(req.body).save().then(function(result) {
      send.success201(res, result);
    }).catch(function (err) {
      send.error400(res);
    });
  }

  return create;
};
