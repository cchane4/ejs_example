let express = require('express'); 
let app = express(); 


app.get("/", (req, res) => { 
    res.send("Welcome to the review page!")
}); 
app.listen(3000, () => { 
    console.log("server is listening"); 
}); 