const express = require('express');
const app = express();


var groups = [
    { "id": "1", "name": "Berkaye Pak", "country": "TR" },
    { "id": "2", "name": "Iron Maiden", "country": "U.K." },
    { "id": "3","name": "Gojira", "country": "France" },
    { "id": "4", "name": "Berkay Pak", "country": "TR" },
    { "id": "5", "name": "Iron Maiden", "country": "U.K." },
    { "id": "6","name": "Gojira", "country": "France" },
    { "id": "7", "name": "Berkay Pak", "country": "TR" },
    { "id": "8", "name": "Iron Maiden", "country": "U.K." },
    { "id": "9","name": "Gojira", "country": "France" },
    { "id": "10", "name": "Iron Maiden", "country": "U.K." }
]

app.get("/Product", (req, res) => {

    res.json(groups)
});

app.get("/Product/:id",(req,res)=>{
    let productid = req.params.id - 1;

    res.send(groups[productid]);
      
});


app.listen(3000);