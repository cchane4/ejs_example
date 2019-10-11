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

app.get("/posts", (req,res) => { 
    let post_chain = [ 
        {title: "Where the Red Fern Grows", author: "Suzy"},
        {title: "Charlotte's Web", author: "Toni"},
        {title: "The Crucible", author: "Jesse"}
    ]; 
    /* res.render posts_a is what we will call it inside the template
    posts is the array of objects we will loop through */
    res.render("posts.ejs", {posts_a: post_chain})
}); 

app.listen(3000, () => { 
    console.log("server is listening"); 
}); 