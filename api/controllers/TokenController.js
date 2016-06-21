/**
 * TokenController
 *
 * @description :: Server-side logic for managing tokens
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {
	


  /**
   * `TokenController.index()`
   */
  index: function (req, res) {
    Token.find()
    //.populate("entites")
    .populate('tenent')
    .exec(function(err,tokens){
    if(err){
      return res.json(err);
    }
    res.json({model:tokens});
   });
  },


  /**
   * `TokenController.new()`
   */
  new: function (req, res) {
    console.log("hi");
   var id=req.param ('tenent');
   console.log(id);
   Tenent.findOne(id,function(err,tokens){
    console.log("tt");
    if(err){
      console.log(err);
      return res.send(err,500)
    }
    console.log(tokens);
    res.view({model:tokens});
   });

  },


  /**
   * `TokenController.show()`
   */
  show: function (req, res) {
    var  id=req.param('tenent');
    Token.findOne( id,function(err,tokens){
      if(err){
        return res.send("tenents with givec id" +id+"was not  found");

      }
      return res.json({model:tokens});
    });
  },


  /**
   * `TokenController.create()`
   */
  create: function (req, res) {
     console.log("hi");
   var params =req.params.all();
   console.log(params);
      Token.create(params ,function(err,createduser_tokens){
        if(err){
          return res.send(err,500);
        }
         console.log("hi");
        return res.redirect('/tokens');

      });
  },


  /**
   * `TokenController.edit()`
   */
  edit: function (req, res) {
    return res.json({
      todo: 'edit() is not implemented yet!'
    });
  },


  /**
   * `TokenController.update()`
   */
  update: function (req, res) {
    return res.json({
      todo: 'update() is not implemented yet!'
    });
  },


  /**
   * `TokenController.destroy()`
   */
  destroy: function (req, res) {
    return res.json({
      todo: 'destroy() is not implemented yet!'
    });
  }
};

