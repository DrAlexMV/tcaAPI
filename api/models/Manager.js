/**
* Manager.js
*
* @description :: TODO: You might write a short summary of how this model works and what it represents here.
* @docs        :: http://sailsjs.org/#!documentation/models
*/

module.exports = {

	attributes: {
	  firstName: { type: 'string', required: true },
	  lastName: { type: 'string', required: true },
	  email: { type: 'email',  required: true },
	  createdBy: { model: 'admin' },
	  campaigns: { collection: 'campaign', via: 'managedBy', dominant: true }
  }
};

