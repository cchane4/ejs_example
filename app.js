let express = require('express');
let app = express(); 


app.get("/", (req, res) => { 
    res.render("home.ejs"); 
}); 

app.get("/fallinlovewiththing/:thing", (req,res) => { 
let thing = req.params.thing;
/*you have to define the variable you want to pass via embedded javascript
in the res.render line */ 
res.render('love.ejs', {thingvariable: thing}); 
}); 
app.listen(3000, () => { 
    console.log("server is listening"); 
}); 