import http from 'http';
import fs from 'fs';

const server = http.createServer((req, res) => {
  console.log(req.method);
if(req.url==='/'){
  res.setHeader('Content-Type', 'text/html');
  res.write('<html>');
  res.write('<body>use backend')
  res.write('<form action="/submit-details" method="POSt">');
  res.write('<input type="text" name="username placeholder="username"><br>')
     res.write('<label for="male">Male</label> ')
    res.write('<input type="radio" id="male" name="gender" value="male"/> ')
     res.write('<label for="Female">Female</label> ')
    res.write('<input type="radio" id="Female" name="gender" value="Female"/> ')
    res.write('<input  type="Submit" value="submited">')
   res.write('</form');
    
    res.write('</body>');
  res.write('</html>');
  return res.end();


}

   else if (req.url.toLowerCase() === "/submit-details" && req.method === "POST") {

  const body = [];

  req.on("data", (chunk) => {
    console.log(chunk);
    body.push(chunk);
  });

  req.on("end", () => {
    const bodyParse = Buffer.concat(body).toString();
    console.log(bodyParse);
    const parms=new URLSearchParams(bodyParse)
    const bodyObject=Object.fromEntries(parms)
    console.log(bodyObject)
    fs.writeFileSync('user.txt',JSON.stringify(bodyObject));
  });

  res.setHeader('Location','/');

}


  

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