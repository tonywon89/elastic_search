var React = require("react");

var SearchIndex = require("./search_index");

var SearchBar = React.createClass({
  getInitialState: function () {
    return ({ content: "" });
  },

  updateContent: function (event) {
    this.setState({ content: event.target.value });
  },

  render: function () {
    return (
      <div>
        <input type="text" value={this.state.content} onChange={this.updateContent} />
        <SearchIndex currentInput={this.state.content}/>
      </div>
    );
  }
});

module.exports = SearchBar;
