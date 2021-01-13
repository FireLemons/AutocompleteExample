'use strict';

class AbbreviationAutocomplete extends React.Component {
  constructor(props) {
    super(props);

    if (!props.data) {
      throw new Error('Missing required prop data')
    } else if (!(props.data instanceof Array)) {
      throw new TypeError(`Prop data must be an array. Instead received ${typeof props.data}`)
    }

    if (isNaN(props.limit)) {
      throw new TypeError(`Prop limit must be a number. Instead received ${typeof props.limit}`)
    }

    if (isNaN(props.minSearchTextLength)) {
      throw new TypeError(`Prop minSearchTextLength must be a number. Instead received ${typeof props.minSearchTextLength}`)
    }

    if (props.placeholder) {
      if (typeof props.placeholder !== 'string') {
        throw new TypeError(`Prop placeholder must be a string. Instead received ${typeof props.placeholder}`)
      }
    }

    if (typeof props.searchText !== 'string') {
      throw new TypeError(`Prop searchText must be a string. Instead received ${typeof props.searchText}`)
    }

    this.state = {
      data: props.data,
      searchList: props.data.slice(0, 6)
    };

    this.onSearchTextChange = this.onSearchTextChange.bind(this);
  }

  onSearchTextChange (e) {
    let searchText = e.target.value

    if (this.props.minSearchTextLength <= searchText.length){
      console.log(searchText)
    }
  }

  render() {
    return <div className="abbreviation-autocomplete">
      <input type="text" placeholder={this.props.placeholder} onChange={this.onSearchTextChange} />
      <ul>
        {this.state.searchList.map((searchItem, index) => (
          <li key={ index }>
            <span>{ searchItem.a }</span>
            <span> ({ searchItem.d }) </span>
          </li>
        ))}
      </ul>
    </div>
  }
}

AbbreviationAutocomplete.defaultProps = {
  limit: Infinity,
  minSearchTextLength: 1,
  searchText: ''
}
