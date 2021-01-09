'use strict';

class AbbreviationAutocomplete extends React.Component {
  constructor(props) {
    super(props);
    this.state = { liked: false };
  }

  render() {
    return <h1>Hello, {this.props.name}</h1>;
  }
}

const domContainer = document.getElementById('app');
ReactDOM.render(React.createElement(AbbreviationAutocomplete), domContainer);
