const Express=require("express")
const Bodyparser=require("body-parser")
const Cors=require("cors")
const Mongoose=require("mongoose")


var app=Express()




app.get("/",(req,res)=>{
    res.send("welcome to employ page")
})


app.get("/edit",(req,res)=>{
    res.send("employ edit page")

})


app.get("/search",(req,res)=>{
res.send("employ search page")
})

app.get("/add",(req,res)=>{
res.send("employ add page")
})

app.get("/delete",(req,res)=>{
    res.send("employ delete page")
    })


app.listen(1000)