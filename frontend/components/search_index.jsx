var React = require("react");

var ClientActions = require("../actions/client_actions");

var SearchIndex = React.createClass({
  getInitialState: function () {
    return ({ items: [] });
  },

  componentWillReceiveProps: function (newProps) {
    ClientActions.fetchBusinesses(newProps.currentInput);
  },

  render: function () {
    var lists = this.state.items.map(function(item, i) {
      return (
        <li key={i}>
          {item.name}, {item.address}
        </li>
      );
    });

    return (
      <ul>
        {lists}
      </ul>
    );
  }
});

module.exports = SearchIndex;
