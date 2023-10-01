const mongodb = require('../data/database');

//This is a primary key
const ObjectId = require('mongodb').ObjectId;

const getAll = async(req, res) => {
    //swagger.tags=['Fabric']
    mongodb
        .getDatabase()
        .db()
        .collection('fabrics')
        .find()
        .toArray((err, fabrics) => {
            if(err){
                res.status(400).json({ massage: err });
            }
            res.setHeader('Content-Type', 'application/json');
            res.status(200).json(fabrics);
    });
};

const getSingle = async(req, res) => {
    if(!ObjectId.isValid(req.params.id)){
        res.status(400).json('Must use a valid fabric id to find a contact');
    }
    //swagger.tags=['Fabric']
    const fabricsId = new ObjectId(req.params.id);
    mongodb
        .getDatabase()
        .db()
        .collection('fabrics')
        .find({ _id: fabricsId })
        .toArray((err, fabrics) => {
            if(err){
                res.status(400).json({ message: err });
            }
            res.setHeader('Content-Type', 'application/json');
            res.status(200).json(fabrics[0]);
    });
};

createFabric = async(req, res) => { 
    //swagger.tags=['Fabric']   
    const fabric = {
        fabric: req.body.fabric,
        length: req.body.length,
        width: req.body.width,
        color: req.body.color,
        weight: req.body.weight,
        name: req.body.name,
        composition: req.body.composition,
        email: req.body.email
    };
    const response = await mongodb.getDatabase().db().collection('fabrics').replaceOne({ _id: fabricsId}, fabric);
    if(response.acknowledged) {
        res.status(204).send();
    }else {
        res.status(500).json(response.error || "Some error ocurred while updating the fabric.");
    }

};

updateFabric = async(req, res) => {
    if(!ObjectId.isValid(req.params.id)){
        res.status(400).json('Must use a valid fabric id to update a contact');
    }
    //swagger.tags=['Fabric']
    const fabricsId = new ObjectId(req.params.id);
    const fabric = {
        fabric: req.body.fabric,
        length: req.body.length,
        width: req.body.width,
        color: req.body.color,
        weight: req.body.weight,
        name: req.body.name,
        composition: req.body.composition,
        email: req.body.email
    };
    const response = await mongodb.getDatabase().db().collection('fabrics').replaceOne({ _id: fabricsId}, fabric);
    if(response.modifiedCount > 0) {
        res.status(204).send();
    }else {
        res.status(500).json(response.error || "Some error ocurred while updating the fabric.");
    }

};

deleteFabric = async(req, res) => {
    if(!ObjectId.isValid(req.params.id)){
        res.status(400).json('Must use a valid fabric id to delete a fabric');
    }
    //swagger.tags=['Fabric']
    const fabricsId = new ObjectId(req.params.id);
    const fabric = {
        fabric: req.body.fabric,
        length: req.body.length,
        width: req.body.width,
        color: req.body.color,
        weight: req.body.weight,
        name: req.body.name,
        composition: req.body.composition,
        email: req.body.email
    };
    const response = await mongodb.getDatabase().db().collection('fabrics').replaceOne({ _id: fabricsId}, true);
    if(response.deleteCount > 0) {
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