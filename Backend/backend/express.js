
 import express from 'express';
 const app = express();
 app.use((req,res,next)=>{

  console.log("first one ",req.url,req.method)
  next();
 })
 app.use((req,res,next)=>{

  console.log("second one ",req.url,req.method)
  next();
 })
//  app.use((req,res,next)=>{

//   res.send("end here  ",req.url,req.method)
//   next();
//  })

app.get("/",(req,res,next)=>{
  console.log("handling for get ",req.url,req.method)
  res.send("end here  ",req.url,req.method)
})

app.get("/ContactUs",(req,res,next)=>{
  console.log("handling for get ",req.url,req.method)
  res.send(`"plz give your details   "
    <form action="/ContactUs" method="POST">
    <input type="text" name="name" placeholder="enter here"/> 
      <input type="email" name="email" placeholder="enter email here"/>
      <input type="submit">Submit</input>
      </form>`
  )
})
app.post("/ContactUs",(req,res,next)=>{
  console.log("handling for post  ",req.url,req.method)
  res.send("thanks for your info ");

})





  


const port = 3000;

app.listen(port, () => {
  console.log(`server running on address http://localhost:${port}`);
});