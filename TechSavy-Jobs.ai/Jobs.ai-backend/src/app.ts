const express=require("express");
const app=express();

app.use(express.json());

app.use(express.urlencoded({extended:false}));

app.use(express.static("public"));

const PORT:number=3000;
app.listen(PORT,()=>{
    console.log(`App is running at port number=${PORT}`);
    
})