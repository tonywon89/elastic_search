var ServerActions = require("../actions/server_actions");

var ApiUtil = {
  fetchBusinesses: function (currentInput) {
    $.ajax({
      type: "GET",
      url: "api/businesses",
      data: { currentInput: currentInput },
      success: function (businesses) {
        ServerActions.receiveBusinesses(businesses);
      },
      error: function (errors) {
        alert("There have been an error");
      }
    });
  },

  emptyBusinesses: function () {
    ServerActions.emptyBusinesses();
  }
};

module.exports = ApiUtil;
