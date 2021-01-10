'use strict';

class AbbreviationAutocomplete extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
    };
  }

  render() {
    return <div className="abbreviation-autocomplete"></div>
  }
}

AbbreviationAutocomplete.defaultProps = {
  limit: Infinity,
  minSearchTextLength: 1,
  searchText: ''
}
