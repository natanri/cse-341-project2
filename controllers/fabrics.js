const mongodb = require('../data/database');

//This is a primary key
const ObjectId = require('mongodb').ObjectId;

const getAll = async(req, res) => {
    const result = await mongodb.getDatabase().db().collection('fabrics').find();
    result.toArray().then((fabrics) => {
      res.setHeader('Content-Type', 'application/json');
      res.status(200).json(fabrics);
    });
};

const getSingle = async(req, res) => {
    const fabricsId = new ObjectId(req.params.id);
    const result = await mongodb.getDatabase().db().collection('fabrics').find({ _id: fabricsId });
    result.toArray().then((fabrics) => {
      res.setHeader('Content-Type', 'application/json');
      res.status(200).json(fabrics[0]);
    });
};

createFabric = async(req, res) => {    ;
    const fabric = {
        fabric: req.body.fabric,
        length: req.body.length,
        width: req.body.width,
        color: req.body.color,
        weight: req.body.weight,
        name: req.body.name,
        composition: req.body.composition
    };
    const response = await mongodb.getDatabase().db().collection('fabrics').replaceOne({ _id: fabricsId}, fabric);
    if(response.acknowledged) {
        res.status(204).send();
    }else {
        res.status(500).json(response.error || "Some error ocurred while updating the fabric.");
    }

};

updateFabric = async(req, res) => {
    const fabricsId = new ObjectId(req.params.id);
    const fabric = {
        fabric: req.body.fabric,
        length: req.body.length,
        width: req.body.width,
        color: req.body.color,
        weight: req.body.weight,
        name: req.body.name,
        composition: req.body.composition
    };
    const response = await mongodb.getDatabase().db().collection('fabrics').replaceOne({ _id: fabricsId}, fabric);
    if(response.modifiedCount > 0) {
        res.status(204).send();
    }else {
        res.status(500).json(response.error || "Some error ocurred while updating the fabric.");
    }

};

deleteFabric = async(req, res) => {
    const fabricsId = new ObjectId(req.params.id);
    const fabric = {
        fabric: req.body.fabric,
        length: req.body.length,
        width: req.body.width,
        color: req.body.color,
        weight: req.body.weight,
        name: req.body.name,
        composition: req.body.composition
    };
    const response = await mongodb.getDatabase().db().collection('fabrics').replaceOne({ _id: fabricsId}, true);
    if(response.modifiedCount > 0) {
        res.status(204).send();
    }else {
        res.status(500).json(response.error || "Some error ocurred while updating the fabric.");
    }

};
module.exports = {
    getAll,
    getSingle,
    createFabric,
    updateFabric,
    deleteFabric
}