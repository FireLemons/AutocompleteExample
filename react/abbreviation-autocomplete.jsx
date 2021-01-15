'use strict'

// Inserts an element into a sorted array containing a limited range of integers
//  @param {array} arr The sorted array
//  @param {array} arrReduced The array represented in the form:
//    [e1: [a1, b1], e2: [a2, b2]]
//    where
//      eX is an element of the array
//      aX is the first index that contains eX in the array
//      bX is the last index that contains eX in the array
//  @param {integer} elem The integer to be inserted into "arrReduced"
//  @throws {TypeError} for incorrect parameter types
function countingSortInsert (arr, arrReduced, elem, elemGroup) {
  if (!(arr instanceof Array)) {
    throw new TypeError('1st param "arr" must be an array')
  }

  if (!(arrReduced instanceof Array)) {
    throw new TypeError('1st param "arrReduced" must be an array')
  }

  // Increase indicies for elements greater than elem
  for (let i = elemGroup + 1; i < arrReduced.length; i++) {
    const range = arrReduced[i]

    if (range) {
      range[0]++
      range[1]++
    }
  }

  const elemRange = arrReduced[elemGroup]

  if (elemRange) { // Increase elem's ending index
    elemRange[1]++
  } else { // Create elem's indicies because it's not in arrReduced yet
    for (var i = elemGroup - 1; i >= 0; i--) {
      const range = arrReduced[i]

      if (range) {
        const afterLastPosition = range[1] + 1
        arrReduced[elemGroup] = [afterLastPosition, afterLastPosition]
        break
      }
    }

    if (i < 0) {
      arrReduced[elemGroup] = [0, 0]
    }
  }

  arr.splice(arrReduced[elemGroup][1], 0, elem)
}

class AbbreviationAutocomplete extends React.Component {
  constructor (props) {
    super(props)

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
      searchList: [],
      searchText: this.props.searchText === undefined ? '' : this.props.searchText,
      selected: -1
    }

    this.onSearchTextChange = this.onSearchTextChange.bind(this)
    this.onInputKeyPress = this.onInputKeyPress.bind(this)
  }

  onInputKeyPress (e) {
    const state = this.state

    switch (e.key) {
      case 'ArrowDown': // down (Set highlighted option 1 down)
        this.setState({
          selected: (state.selected + 1) % state.searchList.length
        })

        break
      case 'ArrowUp': // up (Set highlighted option 1 up)
        const searchLength = state.searchList.length

        this.setState({
          selected: state.selected === -1 ? searchLength - 1 : (state.selected + searchLength - 1) % searchLength
        })

        break
    }
  }

  onSearchTextChange (e) {
    const searchText = e.target.value

    if (this.props.minSearchTextLength <= searchText.length) {
      const countingSortData = []
      const relatedResults = []

      this.state.data.forEach((elem) => {
        const index = elem.d.toLowerCase().indexOf(searchText.toLowerCase())

        // if search text is a substring of this definition
        if (index >= 0) {
          countingSortInsert(relatedResults, countingSortData, elem, index)
          elem.substrIndex = index
        }
      })

      this.setState({
        searchList: relatedResults.length <= this.props.limit ? relatedResults : relatedResults.slice(0, this.props.limit),
        searchText: searchText
      })
    } else {
      this.setState({
        searchList: [],
        searchText: searchText
      })
    }
  }

  render () {
    return <div className='abbreviation-autocomplete'>
      <input type='text' placeholder={this.props.placeholder} onChange={this.onSearchTextChange} onKeyDown={this.onInputKeyPress} />
      <ul>
        {this.state.searchList.map((searchItem, index) => (
          <li key={index} className={this.state.selected === index ? 'selected' : null} onMouseEnter={() => { this.setState({ selected: index }) }}>
            <span>{searchItem.a}</span>
            <span> ({searchItem.d.substr(0, searchItem.substrIndex)}</span><span className='highlight'>{searchItem.d.substr(searchItem.substrIndex, this.state.searchText.length)}</span><span>{searchItem.d.substr(searchItem.substrIndex + this.state.searchText.length)})</span>
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
