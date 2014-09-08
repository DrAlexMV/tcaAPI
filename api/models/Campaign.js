/**
* Campaign.js
*
* @description :: TODO: You might write a short summary of how this model works and what it represents here.
* @docs        :: http://sailsjs.org/#!documentation/models
*/

module.exports = {

  attributes: {
	  organization: { model: 'organization', required: true },
	  managedBy: { collection: 'manager', via: 'campaigns' },
	  products: { collection: 'product', via: 'partOf', dominant: true }
  }
};

