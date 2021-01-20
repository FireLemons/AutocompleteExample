const req = new XMLHttpRequest();
req.open('GET', './index.jsx');
req.addEventListener('load', function() {
  document.querySelector('#jsx-display code').appendChild(document.createTextNode(this.responseText))
})

req.send();

