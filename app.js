// import libries
const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
require("dotenv").config();

const {createPerson,getPerson,updatePerson,deletePerson} = require("./person_controller")

// initial express app
const app = express();

const PORT = process.env.PORT;
const DB = process.env.DB;

const connectToDatabase = async () =>{
    try {
        await mongoose.connect(DB,{
            useNewUrlParser: true,
            useUnifiedTopology: true,
            serverSelectionTimeoutMS: 30000, 
        })
        .then(()=>console.log('Database connected'))
        .catch((err) => {
            console.log('Error connecting to MongoDB Atlas:', err);
        });;
    } catch (e) {
        console.error(e);
    }
};

connectToDatabase();

// middleware
app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());
app.use(express.json());

// routes
app.post("/api", createPerson);

app.get("/api/:user_id",getPerson);

app.put("/api/:user_id",updatePerson);

app.delete("/api/:user_id",deletePerson);

app.listen(PORT,()=>{
    console.info(`Server is running on localhost:${PORT} `)
});
