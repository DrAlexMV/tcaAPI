/**
 * CampaignController
 *
 * @description :: Server-side logic for managing campaigns
 * @help        :: See http://links.sailsjs.org/docs/controllers
 */

module.exports = {
	


  /**
   * `CampaignController.get()`
   */
  get: function (req, res) {
    return res.json({
      todo: 'get() is not implemented yet!'
    });
  },


  /**
   * `CampaignController.create()`
   */
  create: function (req, res) {
	  Campaign.create();
    return res.json({
      todo: 'create() is not implemented yet!'
    });
  },


  /**
   * `CampaignController.addManager()`
   */
  addManager: function (req, res) {
    return res.json({
      todo: 'addManager() is not implemented yet!'
    });
  },


  /**
   * `CampaignController.addProduct()`
   */
  addProduct: function (req, res) {
    return res.json({
      todo: 'addProduct() is not implemented yet!'
    });
  }
};

