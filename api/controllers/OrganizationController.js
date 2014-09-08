/**
 * OrganizationController
 *
 * @description :: Server-side logic for managing organizations
 * @help        :: See http://links.sailsjs.org/docs/controllers
 */

module.exports = {
	/**
	 * `OrganizationController.getAll()`
	 */
	getAll: function (req, res) {
		Organization.find(function (err, organization) {
			if (err) { return res.json(err); }
			return res.json(organization)
		});
	},
	/**
	 * `OrganizationController.get()`
	 */
	find: function (req, res) {
		Organization.findOne(req.param('id'), function (err, organization) {
			if (err) { return res.json(err); }
			return res.json(organization)
		});
	},

  /**
   * `OrganizationController.create()`
   */
  create: function (req, res) {
	  Organization.create(req.body, function (err, organization) {
		  if (err) { return res.json(err); }
		  return res.json(organization);
	  });
  },

	/**
	 * `OrganizationController.update()`
	 */
	update: function (req, res) {
		return res.json({
			todo: 'addMember() is not implemented yet!'
		});
	},

	/**
	 * `OrganizationController.delete()`
	 */
	delete: function (req, res) {
		return res.json({
			todo: 'addMember() is not implemented yet!'
		});
	},

  /**
   * `OrganizationController.addMember()`
   */
  addMember: function (req, res) {
    return res.json({
      todo: 'addMember() is not implemented yet!'
    });
  }
};

