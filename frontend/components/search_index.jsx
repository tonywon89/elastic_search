var React = require("react");

var SearchIndex = React.createClass({
  getInitialState: function () {
      return ({ items: [] });
  },

  componentWillReceiveProps: function (newProps) {

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
