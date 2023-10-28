const express=require("express");
const app=express();


app.use(express.static('build'));

app.get('*', (req, res) => {
      res.sendFile(path.resolve(__dirname,  'build', 'index.html'));
    });

 app.listen("9090",()=>{
    console.log("Server Running at port 9090")
 })   