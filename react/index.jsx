const domContainer = document.getElementById('app');

var exampleContents = <AbbreviationAutocomplete data={airportData} minSearchTextLength={2} placeholder="Airport Code" />

ReactDOM.render(exampleContents, domContainer);
