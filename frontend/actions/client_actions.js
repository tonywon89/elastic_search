var ApiUtil = require("../util/api_util");

var ClientActions = {
  fetchBusinesses: function (currentInput) {
    ApiUtil.fetchBusinesses(currentInput);
  },

  emptyBusinesses: function () {
    ApiUtil.emptyBusinesses();
  }
};

module.exports = ClientActions;
