"use strict";

var _react = _interopRequireDefault(require("react"));

var _reactDom = _interopRequireDefault(require("react-dom"));

var _abbreviationAutocomplete = _interopRequireDefault(require("./AbbreviationAutocompleteReact/abbreviation-autocomplete.jsx"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function exampleOnSelect(selected) {
  console.log(selected);
}

function exampleOnSearchTextChange(newText) {
  console.log(newText);
}

var exampleContents = /*#__PURE__*/_react["default"].createElement("div", null, /*#__PURE__*/_react["default"].createElement("h1", null, "Example With Airport IATA Codes"), /*#__PURE__*/_react["default"].createElement("p", null, "Open the console to view prop function calls"), /*#__PURE__*/_react["default"].createElement(_abbreviationAutocomplete["default"], {
  data: airportData,
  limit: 15,
  minSearchTextLength: 2,
  placeholder: "Airport Code",
  onSelect: exampleOnSelect,
  onSearchTextChange: exampleOnSearchTextChange
}), /*#__PURE__*/_react["default"].createElement("div", {
  id: "jsx-display"
}, /*#__PURE__*/_react["default"].createElement("h2", null, "Example component usage in index.jsx"), /*#__PURE__*/_react["default"].createElement("pre", null, /*#__PURE__*/_react["default"].createElement("code", null))));

_reactDom["default"].render(exampleContents, document.getElementById('app'));