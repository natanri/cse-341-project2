//The require keyword going to include the express package
const express = require('express');
const app = express();

const port = process.env.PORT || 3001;

app.use('/', require('./routes'));

app.listen(port, ()=> {console.log(`Runnig on port ${port}`)});
    
