var React = require("react");
var ReactDOM = require("react-dom");

var ElasticSearch = React.createClass({
  render: function () {
    return (
      <div>
        <input type="text" />
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
