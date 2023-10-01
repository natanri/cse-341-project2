// Allow us to handles routes
const router = require('express').Router();

router.use('/', require('./swagger'));

router.get('/', (req, res) => { 
    //#swagger.tags=['Hello World']
    res.send("Hello World")});

router.use('/fabrics', require('./fabrics'));

module.exports = router;