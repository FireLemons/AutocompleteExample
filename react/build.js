const babel = require('@babel/core');
const fs = require('fs');

function buildJs(scriptName) {
  babel.transform(fs.readFileSync(`${scriptName}.jsx`), {
    configFile: true,
    presets: [
      '@babel/preset-react'
    ]
  }, function(err, result) {
    if (err) {
      throw err
    }

    fs.writeFileSync(`${scriptName}.js`, result.code)
  });
}

buildJs('abbreviation-autocomplete')
buildJs('index')