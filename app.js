let express = require('express');
let app = express(); 


app.get("/", (req, res) => { 
    res.render("home.ejs"); 
}); 
app.listen(3000, () => { 
    console.log("server is listening"); 
}); 