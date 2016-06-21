/**
 * FieldsController
 *
 * @description :: Server-side logic for managing fields
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {
	


  /**
   * `FieldsController.index()`
   */
  index: function (req, res) {
    Feild.find(function(err,feildes){
    if(err){
      return res.json(err);
    }
    res.json({model:feildes});
   });
   
  },


  /**
   * `FieldsController.show()`
   */
  show: function (req, res) {
    var  id=req.param(id);
  Feild.findOne( id,function(err,feildes){
      if(err){
        return res.send("tenents with givec id" +id+"was not  found");

      }
      return res.json({model:feildes});
    });
  },


  /**
   * `FieldsController.new()`
   */
  new: function (req, res) {
   console.log("hi");
   var id=req.param ('pp');
   console.log(id);
   Feild.findOne(id,function(err,feildes){
    console.log("tt");
    if(err){
      console.log(err);
      return res.send(err,500)
    }
    console.log(feildes);
    res.view({model:feildes});
   });

  },


  /**
   * `FieldsController.create()`
   */
  create: function (req, res) {
     console.log("hi");
   var params =req.params.all();
   console.log(params);
      Feild.create(params ,function(err,createduser_feildes){
        if(err){
          return res.send(err,500);
        }
         console.log("hi");
        return res.redirect('/feildes');

      });
  },


  /**
   * `FieldsController.edit()`
   */
  edit: function (req, res) {
    return res.json({
      todo: 'edit() is not implemented yet!'
    });
  },


  /**
   * `FieldsController.update()`
   */
  update: function (req, res) {
    return res.json({
      todo: 'update() is not implemented yet!'
    });
  },


  /**
   * `FieldsController.destroy()`
   */
  destroy: function (req, res) {
    return res.json({
      todo: 'destroy() is not implemented yet!'
    });
  }
};

