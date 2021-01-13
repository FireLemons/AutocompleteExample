const domContainer = document.getElementById('app');
var exampleContents = /*#__PURE__*/React.createElement(AbbreviationAutocomplete, {
  data: airportData,
  minSearchTextLength: 2,
  placeholder: "Airport Code"
});
ReactDOM.render(exampleContents, domContainer);