import express from 'express'
import mongoose from 'mongoose'




const app = express()




app.get("/",(req,res) => {
    res.send("Hi I am Rohan")
})

app.listen(8000,() =>{
    console.log("Server is Listening On port 8000");
})


main()
.then(()=>{
    console.log("Connected to Database")
})
.catch(err => console.log(err));

async function main() {
  await mongoose.connect('mongodb://127.0.0.1:27017/airbnb');
}