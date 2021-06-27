'use strict';

var utils = require('../utils/writer.js');
var Artefacts = require('../service/ArtefactsService');

module.exports.addArtefact = function addArtefact (req, res, next, body) {
  Artefacts.addArtefact(body)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.getArtefactByObjectId = function getArtefactByObjectId (req, res, next, objectId) {
  Artefacts.getArtefactByObjectId(objectId)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.getArtefacts = function getArtefacts (req, res, next) {
  Artefacts.getArtefacts()
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};
