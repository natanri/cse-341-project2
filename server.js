//The require keyword going to include the express package
const express = require('express');

const mongodb = require('./data/database');
const bodyParser = require('body-parser');
const app = express();

const port = process.env.PORT || 3001;

app.use(bodyParser.json());
app.use('/', require('./routes'));

mongodb.initDb((err) => { 
    if(err) {
        console.log(err);        
    }else {
        app.listen(port, ()=> {console.log(`Database is listening and run Running on port ${port}`)});
    }
}); 


    
