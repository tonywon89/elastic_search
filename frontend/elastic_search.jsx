var React = require("react");
var ReactDOM = require("react-dom");

var SearchBar = require("./components/search_bar");

var ElasticSearch = React.createClass({
  render: function () {
    return (
      <div>
        <SearchBar />
      </div>
    );
  }
});

document.addEventListener("DOMContentLoaded", function () {
  var root = document.getElementById("root");
  ReactDOM.render(
     <ElasticSearch />, root
  );
});
