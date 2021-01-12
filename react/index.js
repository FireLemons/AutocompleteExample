const domContainer = document.getElementById('app');
var exampleContents = /*#__PURE__*/React.createElement(AbbreviationAutocomplete, {
  data: airportData,
  placeholder: "Airport Code"
});
ReactDOM.render(exampleContents, domContainer);