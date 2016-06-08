var Store = require("flux/utils").Store;
var AppDispatcher = require("../dispatcher/dispatcher");
var BusinessConstants = require("../constants/business_constants");

var BusinessStore = new Store(AppDispatcher);

var _businesses = {};

var resetBusinesses = function (businesses) {
  _businesses = {};
  businesses.forEach(function (business) {
    _businesses[business.id] = business;
  });
  BusinessStore.__emitChange();
};

var emptyBusinesses = function () {
  _businesses = {};
  BusinessStore.__emitChange();
};

BusinessStore.all = function () {
  return Object.keys(_businesses).map(function (id) {
    return _businesses[id];
  });
};

BusinessStore.__onDispatch = function (payload) {
  switch (payload.actionType) {
    case BusinessConstants.BUSINESSES_RECEIVED:
      resetBusinesses(payload.businesses);
      break;
    case BusinessConstants.EMPTY_BUSINESSES:
      emptyBusinesses();
      break;
  }
};

module.exports = BusinessStore;
