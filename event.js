const http = require('http');
const request = require('request');

const listeners = {};
http.createServer((req, res) => {
  let body = '';
  req.on('data', chunk => { body += chunk.toString(); });

  req.on('end', () => {
    var data = (body ? JSON.parse(body) : {});
    if (req.url === '/subscribe') {
      listeners[data.id] = {
        endpoint: data.endpoint,
        path: data.data.path,
      };
      res.end();
    } else if (req.url === '/unsubscribe') {
      delete listeners[data.id];
      res.end();
    } else {
      Object.keys(listeners).forEach((id) => {
        let send = JSON.stringify({
          url_data: req.url,
          environment_variables: process.env,
        });
        request.post({
          headers: {'Content-Type': 'application/json'},
          url: listeners[id].endpoint,
          body: send
        }, function(err, response, body) {
          if (err) {
            console.error("Failed to publish event!", err);
          }
          res.end()
        });
      });
    }
  })
}).listen(5000);
