function exampleOnSelect(selected) {
  console.log(selected);
}

function exampleOnSearchTextChange(newText) {
  console.log(newText);
}

var exampleContents = /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h1", null, "Example With Airport IATA Codes"), /*#__PURE__*/React.createElement("p", null, "Open the console to view prop function calls"), /*#__PURE__*/React.createElement(AbbreviationAutocomplete, {
  data: airportData,
  limit: 15,
  minSearchTextLength: 2,
  placeholder: "Airport Code",
  onSelect: exampleOnSelect,
  onSearchTextChange: exampleOnSearchTextChange
}), /*#__PURE__*/React.createElement("div", {
  id: "jsx-display"
}, /*#__PURE__*/React.createElement("h2", null, "Contents of index.jsx"), /*#__PURE__*/React.createElement("pre", null, /*#__PURE__*/React.createElement("code", null))));
ReactDOM.render(exampleContents, document.getElementById('app'));