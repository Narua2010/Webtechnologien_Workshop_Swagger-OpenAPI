'use strict';


/**
 * Example for POST request
 *
 * body ArtefactDTO Data of new artefact
 * returns ArtefactDTO
 **/
exports.addArtefact = function(body) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "objectId" : "objectId"
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Example for GET request with path paramenter.
 * This API returns an artefact.
 *
 * objectId Integer 
 * returns List
 **/
exports.getArtefactByObjectId = function(objectId) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = [ {
  "objectId" : "objectId"
}, {
  "objectId" : "objectId"
} ];
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Example for GET request without parameters
 * This API returns a list of artefacts.
 *
 * returns List
 **/
exports.getArtefacts = function() {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = [ {
  "objectId" : "objectId"
}, {
  "objectId" : "objectId"
} ];
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}

