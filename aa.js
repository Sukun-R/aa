var connection = new WebSocket('wss://sukun-r.github.io/a/');
 
document.getElementById('btn').addEventListener('click', function(e) {
  var text = document.getElementById('text');
 
  connection.send(text.value);
})
