// GET API making with mongodb local and live mongourl
var express = require('express');
const app = express();
const port = 8210;
// adding mongo database
const mongo = require('mongodb')
const MongoClient = mongo.MongoClient;
// const mongourl = "mongodb://localhost:27017"
const mongourl = "mongodb+srv://test:1234@cluster0.9u0ee.mongodb.net/zomato?retryWrites=true&w=majority"
var db;
// let col_name = "rastaurant"; 

// starting defining Route 
app.get('/', (req, res) => {
    res.send("welcome to API");
})

//LIST OF RASTAURANT
// app.get('/rastaurant', (req,res) => {
//     db.collection("rastaurant").find().toArray((err, result) => {
//         if (err) throw err;
//         res.send(result)
//     }); 
// });

// List rastaurant wrt city // by using params after / we pass city:id or id to search the dta in API its compulsary
app.get('/rastaurant/:cityId', (req, res) => {
    var cityId = req.params.cityId;
    console.log(cityId);
    // find query of DB 
    db.collection("rastaurant").find({city:cityId}).toArray((err, result)=> {
        if (err) throw err;
        res.send(result)
    });
});

//QUERY PARAMS witout putting ? and give any id 1,2 in URL it will not work 
// app.get('/rastaurant', (req, res) => {
//     var cityId = req.query.cityId;
//     console.log(cityId);
//     // find query of DB 
//     db.collection("rastaurant").find({city:cityId}).toArray((err, result)=> {
//         if (err) throw err;
//         res.send(result)
//     });
// });

//LIST ALL CITIES 
app.get('/location', (req,res) => {
    db.collection("location").find().toArray((err, result) => {
        if (err) throw err;
        res.send(result)
    }); 
});

//LIST OF ALL QUICKSEARCH
app.get('/quicksearch', (req, res) => {
    db.collection("mealType").find().toArray((err, result) => {
        if (err) throw err;
        res.send(result);
    }); 
});


app.get('/cuisine', (req,res) => {
    db.collection("cuisine").find().toArray((err, result) => {
        if (err) throw err;
        res.send(result)
    }); 
});

//LIST OF HOTELS wrt TO CITY 
app.get('/mealType', (req,res) => {
    db.collection("mealType").find().toArray((err, result) => {
        if (err) throw err;
        res.send(result)
    }); 
});

 
//Listening on port no. 
// app.listen (port, () => {
//     console.log(`listening on ${port}`);
// })

//to connect with URL DB can see in w3schools also 
MongoClient.connect(mongourl, function (err, client) {
    if (err) console.log("Error");
    console.log("Database created!");
    db = client.db('zomato')
    app.listen(port, () => {
        console.log(`listening on ${port}`);
    });
});

