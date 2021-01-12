'use strict';

class AbbreviationAutocomplete extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};

    if (!props.data) {
      throw new Error('Missing required prop data');
    } else if (!(props.data instanceof Array)) {
      throw new TypeError(`Prop data must be an array. Instead received ${typeof props.data}`);
    } else {
      this.state['data'] = props.data;
    }

    if (isNaN(props.limit)) {
      throw new TypeError(`Prop limit must be a number. Instead received ${typeof props.limit}`);
    }

    if (isNaN(props.minSearchTextLength)) {
      throw new TypeError(`Prop minSearchTextLength must be a number. Instead received ${typeof props.minSearchTextLength}`);
    }

    if (props.placeholder) {
      if (typeof props.placeholder !== 'string') {
        throw new TypeError(`Prop placeholder must be a string. Instead received ${typeof props.placeholder}`);
      }
    }

    if (typeof props.searchText !== 'string') {
      throw new TypeError(`Prop searchText must be a string. Instead received ${typeof props.searchText}`);
    }
  }

  render() {
    return /*#__PURE__*/React.createElement("div", {
      className: "abbreviation-autocomplete"
    }, /*#__PURE__*/React.createElement("input", {
      type: "text",
      placeHolder: this.props.placeholder
    }));
  }

}

AbbreviationAutocomplete.defaultProps = {
  limit: Infinity,
  minSearchTextLength: 1,
  searchText: ''
};