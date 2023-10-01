const express = require('express');
const router = express.Router();

const fabricsControllers = require('../controllers/fabrics');
const validation = require('../middleware/validate');

router.get('/', fabricsControllers.getAll);

router.get('/:id', fabricsControllers.getSingle);

router.post('/', validation.saveFabrics, fabricsControllers.createFabric);

router.put('/:id', validation.saveFabrics,fabricsControllers.updateFabric);

router.delete('/:id', fabricsControllers.deleteFabric);


module.exports = router;