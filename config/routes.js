/**
 * Route Mappings
 * (sails.config.routes)
 *
 * Your routes map URLs to views and controllers.
 *
 * If Sails receives a URL that doesn't match any of the routes below,
 * it will check for matching files (images, scripts, stylesheets, etc.)
 * in your assets directory.  e.g. `http://localhost:1337/images/foo.jpg`
 * might match an image file: `/assets/images/foo.jpg`
 *
 * Finally, if those don't match either, the default 404 handler is triggered.
 * See `api/responses/notFound.js` to adjust your app's 404 logic.
 *
 * Note: Sails doesn't ACTUALLY serve stuff from `assets`-- the default Gruntfile in Sails copies
 * flat files from `assets` to `.tmp/public`.  This allows you to do things like compile LESS or
 * CoffeeScript for the front-end.
 *
 * For more information on configuring custom routes, check out:
 * http://sailsjs.org/#!/documentation/concepts/Routes/RouteTargetSyntax.html
 */

module.exports.routes = {

  /***************************************************************************
  *                                                                          *
  * Make the view located at `views/homepage.ejs` (or `views/homepage.jade`, *
  * etc. depending on your default view engine) your home page.              *
  *                                                                          *
  * (Alternatively, remove this and add an `index.html` file in your         *
  * `assets` directory)                                                      *
  *                                                                          *
  ***************************************************************************/

  '/': {
    view: 'homepage'
  },
  'get /tenents':{
    controller:'tenent',
    action:'index'
  },
  'get /tenents/new':{
    controller:'tenent',
    action:'new'

  },
  'post /tenents':{
    controller:'tenent',
    action:'create'
  },
  'get /tenents/:id':{
    controller:'tenent',
    action:'show'
  },
  'get /tenents/:id/edit':{
    controller:'tenent',
    action:'edit'
  },
  'post /tenents/:id':{
    controller:'tenent',
    action:'update'
  },
  'get /tenents/:id/delete':{
    controller:'tenent',
    action:'destroy'
  },

   'get /feildes':{
    controller:'feild',
    action:'index'
  },
  'get /feildes/new':{
    controller:'feild',
    action:'new'

  },
  'post /feildes':{
    controller:'feild',
    action:'create'
  },
  'get /feildes/:id':{
    controller:'feild',
    action:'show'
  },
  'get /feildes/:id/edit':{
    controller:'feild',
    action:'edit'
  },
  'post /feildes/:id':{
    controller:'feild',
    action:'update'
  },
  'get /feildes/:id/delete':{
    controller:'feild',
    action:'destroy'
  },


   'get /entitys':{
    controller:'entity',
    action:'index'
  },
  'get /entitys/new':{
    controller:'entity',
    action:'new'

  },
  'post /entitys':{
    controller:'entity',
    action:'create'
  },
  'get /entitys/:id':{
    controller:'entity',
    action:'show'
  },
  'get /entitys/:id/edit':{
    controller:'entity',
    action:'edit'
  },
  'post /entitys/:id':{
    controller:'entity',
    action:'update'
  },
  'get /entitys/:id/delete':{
    controller:'entity',
    action:'destroy'
  },


//tokens roturs
'get /tokens':{
    controller:'token',
    action:'index'
  },
  'get /tokens/new':{
    controller:'token',
    action:'new'

  },
  'post /tokens':{
    controller:'token',
    action:'create'
  },
  'get /tokens/:id':{
    controller:'token',
    action:'show'
  },
  'get /tokens/:id/edit':{
    controller:'token',
    action:'edit'
  },
  'post /tokens/:id':{
    controller:'token',
    action:'update'
  },
  'get /tokens/:id/delete':{
    controller:'token',
    action:'destroy'
  },




};
