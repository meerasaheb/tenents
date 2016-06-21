/**
 * EntityController
 *
 * @description :: Server-side logic for managing entities
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {
	


  /**
   * `EntityController.index()`
   */
  index: function (req, res) {
   Entity.find()
   
   .populate('owner')
   .populate('feilds')
   .exec(function(err,entities){
   if(err){
      return res.json(err);
    }
    res.json({model:entities});
   });
  },


  /**
   * `EntityController.show()`
   */
  show: function (req, res) {
    var  id=req.param('id');
    Entity.findOne( id,function(err,entitys){
      if(err){
        return res.send("tenents with givec id" +id+"was not  found");

      }
      return res.json({model:entitys});
    });
  },


  /**
   * `EntityController.new()`
   */
  new: function (req, res) {
    console.log("hi");
   var id=req.param ('owner');
   console.log(id);
   Tenent.findOne(id,function(err,entitys){
    console.log("tt");
    if(err){
      console.log(err);
      return res.send(err,500)
    }
    console.log(entitys);
    res.view({model:entitys});
   });

  },


  /**
   * `EntityController.create()`
   */
  create: function (req, res) {
    console.log("hi");
   var params =req.params.all();
      Entity.create(params ,function(err,createduser_entitys){
        if(err){
          return res.send(err,500);
        }
        return res.redirect('/entitys');

      });
  },


  /**
   * `EntityController.edit()`
   */
  edit: function (req, res) {
    
  },


  /**
   * `EntityController.update()`
   */
  update: function (req, res) {
    return res.json({
      todo: 'update() is not implemented yet!'
    });
  },


  /**
   * `EntityController.destroy()`
   */
  destroy: function (req, res) {
    return res.json({
      todo: 'destroy() is not implemented yet!'
    });
  }
};

