const container = document.getElementById('app');

var exampleContents =
  <div>
    <h1>Example With Airport IATA Codes</h1>
    <p>Open the console to view prop function calls</p>
    <p><a href="index.jsx">Example JSX</a></p>
    <AbbreviationAutocomplete data={airportData} limit={15} minSearchTextLength={2} placeholder="Airport Code" />
  </div>

ReactDOM.render(exampleContents, container);
