const express = require('express');
const mongoose = require('mongoose');
const sc = require('./src/models/sch');
const rou = require('./src/routes/rout');
const cors= require('cors');

const app = express();
app.use(cors())

const bodyParser = require('body-parser');
const { $where } = require('./src/models/sch');
app.use(bodyParser.urlencoded({extended: false }));
app.use(bodyParser.json());
app.use(express.json());

mongoose.connect("mongodb+srv://Chiragsinghal:CS123@slantcoding.ldjfxtd.mongodb.net/datastore?retryWrites=true&w=majority", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
}).then(function(){
  mongoose.set('strictQuery', false);

  app.get("/", function(req, res) {
    const response = { statuscode: res.statusCode  , message: "API works!"};
    res.json(response);
  });

  
  app.use("/khelo" , rou);

  
   const PORT = process.env.PORT || 3000;
  app.listen(PORT, function() {
    console.log("Server started at PORT: "  + PORT);
  });
}).catch(function(error) {
  console.error(error);
});