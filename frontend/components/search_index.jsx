var React = require("react");

var ClientActions = require("../actions/client_actions");
var BusinessStore = require("../stores/business_store");

var SearchIndex = React.createClass({
  getInitialState: function () {
    return ({ items: BusinessStore.all() });
  },

  componentDidMount: function () {
    this.listener = BusinessStore.addListener(this._onChange);
  },

  _onChange: function () {
    this.setState({ items: BusinessStore.all() });
  },

  componentWillUnmoun: function () {
    this.listener.remove();
  },

  componentWillReceiveProps: function (newProps) {
    if (newProps.currentInput) {
      ClientActions.fetchBusinesses(newProps.currentInput);
    } else {
      ClientActions.emptyBusinesses();
    }
  },

  render: function () {
    var lists = this.state.items.map(function(item, i) {
      return (
        <li key={i}>
          {item.name}, {item.address}
        </li>
      );
    });

    if (lists.length === 0 && this.props.currentInput) {
      lists = <li>There are no restaurants of that start with that name</li>;
    }
    return (
      <ul>
        {lists}
      </ul>
    );
  }
});

module.exports = SearchIndex;
