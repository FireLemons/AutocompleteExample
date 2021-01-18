const babel = require('@babel/core');
const fs = require('fs');

function buildJs(scriptName) {
  babel.transform(fs.readFileSync(`${scriptName}.jsx`), {
    configFile: true,
    presets: [
      '@babel/preset-react'
    ]
  }, function(err, result) {
    console.log(err)
    if (err) {
      console.error(err)
      process.exit(1)
    }

    fs.writeFileSync(`${scriptName}.js`, result.code)
  });
}

buildJs('AbbreviationAutocompleteReact/abbreviation-autocomplete')
buildJs('index')
