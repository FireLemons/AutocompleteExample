import React from 'react';
import ReactDOM from 'react-dom';

function exampleOnSelect(selected) {
  console.log(selected)
}

function exampleOnSearchTextChange (newText) {
  console.log(newText)
}

var exampleContents =
  <div>
    <h1>Example With Airport IATA Codes</h1>
    <p>Open the console to view prop function calls</p>
    <AbbreviationAutocomplete data={airportData} limit={15} minSearchTextLength={2} placeholder="Airport Code" onSelect={exampleOnSelect} onSearchTextChange={exampleOnSearchTextChange} />
    {/* data={airportData} */}
    {/* Set autocomplete suggestion data */}
    {/* Required */}

    {/* limit={15} */}
    {/* Limit the autocomplete dropdown items to a maximum of 15 */}

    {/* minSearchTextlength={2} */}
    {/* The minimum number of characters to type before dropdown results are shown */}

    {/* placeholder="Airport Code" */}
    {/* Set the placeholder of the search text input to "Airport Code" */}

    {/* onSelect={exampleOnSelect} */}
    {/* Call exampleOnSelect when a dropdown item is selected */}

    {/* onSearchTextChange={exampleOnSearchTextChange} */}
    {/* Call exampleOnSearchTextChange when the search text is changed */}
    {/* Is not called after the search text is changed by a dropdown item select */}

    {/* The HTML below is not relevant to the example */}
    <div id="jsx-display">
      <h2>Contents of index.jsx</h2>
      <pre>
        <code>
        </code>
      </pre>
    </div>
  </div>

ReactDOM.render(exampleContents, document.getElementById('app'));
