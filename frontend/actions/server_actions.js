var AppDispatcher = require("../dispatcher/dispatcher");
var BusinessConstants = require("../constants/business_constants");

var ServerActions = {
  receiveBusinesses: function (businesses) {
    AppDispatcher.dispatch({
      actionType: BusinessConstants.BUSINESSES_RECEIVED,
      businesses: businesses
    });
  },

  emptyBusinesses: function () {
    AppDispatcher.dispatch({
      actionType: BusinessConstants.EMPTY_BUSINESSES
    });
  }
};

module.exports = ServerActions;
