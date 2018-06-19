var express = require('express')
var app = express()

app.set('port', (process.env.PORT || 6000))
app.use(express.static(__dirname + '/public'))

app.get('/', function (request, response) {
  
 try{
  var MongoClient = require('mongodb').MongoClient;

  var rec = '';
  // Connect to the db
  MongoClient.connect("mongodb://192.168.99.101:32769/MyDb", function (err, db) {

    if (err) throw err;
    //console.log(db);

    var dbo = db.db("MyDb");
    dbo.createCollection("customers", function (err, res) {
      if (err) throw err;
      console.log("Collection created!");
      var myobj = {
        name: "Company Inc",
        address: "Highway 37"
      };
      dbo.collection("customers").insertOne(myobj, function (err, res) {
        if (err) throw err;
        console.log("1 document inserted");
        dbo.collection("customers").findOne({}, function (err, result) {
          if (err) throw err;
          
          dbo.collection("customers").count({}, function(error, numOfDocs){
            if(error) return callback(error);

            db.close();
            response.send('Hello World! from ' + process.env.MyServerName + ',' + numOfDocs);

        });
         
        });
      });
    });
    console.log(rec);

  });
}
catch(e){
            response.send(e);

}  
  
 // response.send('Hello World! from ' + process.env.MyServerName );
})


app.get('/test', function (request, response) {
  
           response.send('Hello World! from ' + process.env.MyServerName);
 
 // response.send('Hello World! from ' + process.env.MyServerName );
})


app.listen(app.get('port'), function () {
  console.log("Node app is running at localhost:" + app.get('port'))
})