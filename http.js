const http = require('http');

http.createServer((req, res) => {
  let body = '';
  req.on('data', chunk => { body += chunk.toString(); });

  req.on('end', () => {
    res.setHeader('Content-Type', 'application/json');
    res.write(JSON.stringify({
      body_data: JSON.parse(body),
      url_data: req.url,
      environment_variables: process.env,
    }));
    res.end();
  })
}).listen(5000);
