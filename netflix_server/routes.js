module.exports = function(app) {
    const favouriteCtrl = require('./controllers/FavouriteController');
  
    app.route('/favourite')
      .post(favouriteCtrl.store)
      .get(favouriteCtrl.get)
  };