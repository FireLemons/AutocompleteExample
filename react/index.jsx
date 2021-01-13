const domContainer = document.getElementById('app');

var exampleContents = <AbbreviationAutocomplete data={airportData} limit={15} minSearchTextLength={2} placeholder="Airport Code" />

ReactDOM.render(exampleContents, domContainer);
