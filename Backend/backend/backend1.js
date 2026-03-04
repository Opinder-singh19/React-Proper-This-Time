import http from 'http';

const server = http.createServer((req, res) => {
  console.log(req.method);

  res.setHeader('Content-Type', 'text/html');
  res.write('<html>');
  res.write('<body>use backend</body>');
  res.write('</html>');
  res.end();
});

const port = 3000;

server.listen(port, () => {
  console.log(`server running on address http://localhost:${port}`);
});