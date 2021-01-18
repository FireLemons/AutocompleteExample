const container = document.getElementById('app');

function exampleOnSelect(selected) {
  console.log(selected);
}

var exampleContents = /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h1", null, "Example With Airport IATA Codes"), /*#__PURE__*/React.createElement("p", null, "Open the console to view prop function calls"), /*#__PURE__*/React.createElement("p", null, /*#__PURE__*/React.createElement("a", {
  href: "index.jsx"
}, "Example JSX")), /*#__PURE__*/React.createElement(AbbreviationAutocomplete, {
  data: airportData,
  limit: 15,
  minSearchTextLength: 2,
  placeholder: "Airport Code",
  onSelect: exampleOnSelect
}));
ReactDOM.render(exampleContents, container);