const hotelRoutes = require('./hotelRoutes');
module.exports = function(app, db) {
    hotelRoutes(app, db);
    // Other route groups could go here, in the future
};