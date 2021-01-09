'use strict';

class AbbreviationAutocomplete extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      liked: false
    };
  }

  render() {
    return /*#__PURE__*/React.createElement("h1", null, "Hello, ", this.props.name);
  }

}

const domContainer = document.getElementById('app');
ReactDOM.render(React.createElement(AbbreviationAutocomplete), domContainer);