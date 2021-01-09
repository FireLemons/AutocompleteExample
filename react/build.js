const babel = require('@babel/core');
const fs = require('fs');

babel.transform(fs.readFileSync('abbreviation-autocomplete.jsx'), {
  configFile: true,
  presets: [
    '@babel/preset-react'
  ]
}, function(err, result) {
  if (err) {
    throw err
  }

  fs.writeFileSync('abbreviation-autocomplete.js', result.code)
});
