/**
 * TenentController
 *
 * @description :: Server-side logic for managing tenents
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {
	


  /**
   * `TenentController.index()`
   */
  index: function (req, res) {
    Tenent.find()
    //.populate("entites")
    .populateAll()
    //.populate('token')
    .exec(function(err,tenents){
    if(err){
      return res.json(err);
    }
    res.json({model:tenents});
   });
  },


  /**
   * `TenentController.show()`
   */
  show: function (req, res) {
   var  id=req.param('owner');
    Tenent.findOne( id,function(err,tenents){
      if(err){
        return res.send("tenents with givec id" +id+"was not  found");

      }
      return res.json({model:tenents});
    }); 
  },


  /**
   * `TenentController.new()`
   */
  new: function (req, res) {
    res.view();
  },


  /**
   * `TenentController.create()`
   */
  create: function (req, res) {
    console.log("hi");
   var params =req.params.all();
   console.log(params);
      Tenent.create(params ,function(err,createduser_tenents){
        if(err){
          return res.send(err,500);
        }
         console.log("hi");
        return res.redirect('/tenents');

      });
  },


  /**
   * `TenentController.edit()`
   */
  edit: function (req, res) {
   console.log("hi");
   var id=req.param ('id');
   Tenent.findOne(id,function(err,tenents){
    console.log("tt");
    if(err){
      console.log(err);
      return res.send(err,500)
    }
    console.log(tenents);
    res.view({model:tenents});
    console.log("tt");
   });
  },


  /**
   * `TenentController.update()`
   */
  update: function (req, res) {
    return res.json({
      todo: 'update() is not implemented yet!'
    });
  },


  /**
   * `TenentController.destroy()`
   */
  destroy: function (req, res) {
    return res.json({
      todo: 'destroy() is not implemented yet!'
    });
  }
};

