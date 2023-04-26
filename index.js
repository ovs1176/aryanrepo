const express = require("express");
const app = express();
const mongoose = require("mongoose");

mongoose.set("strictQuery", false);  // for removing Deprecation Warning in the console...


mongoose.connect("mongodb+srv://test1:test1@cluster0.p0uxhax.mongodb.net/?retryWrites=true&w=majority", {
    useUnifiedTopology : true, useNewUrlParser : true
},
() => console.log("Connected to db")
);

// import routes
const itemRoutes = require("./routes/item");

app.use(express.json());

// route middlewares
app.use("/api/items", itemRoutes);


app.listen(4000, () => console.log("Server is running on the port 4000.")); 


// aryan 

