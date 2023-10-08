const express = require('express');
const router = express.Router();



const fabricsControllers = require('../controllers/fabrics');
const validation = require('../middleware/validate');
const isAuthenticate  = require('../middleware/authenticate')

router.get('/', fabricsControllers.getAll);

router.get('/:id', fabricsControllers.getSingle);

router.post('/', validation.saveFabrics, isAuthenticate.isAuthenticated , fabricsControllers.createFabric);

router.put('/:id', validation.saveFabrics, isAuthenticate.isAuthenticated , fabricsControllers.updateFabric);

router.delete('/:id', validation.saveFabrics, isAuthenticate.isAuthenticated , fabricsControllers.deleteFabric);


module.exports = router;