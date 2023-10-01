const mongodb = require('../data/database');
const ObjectId = require('mongodb').ObjectId;

const getAll = async( req, res) => {
    const result = await mongodb.getDatabase().db().collection('fabrics').find();
    result.toArray().then((fabrics) => {
      res.setHeader('Content-Type', 'appliation/json');
      res.status(200).json(fabrics);
    });
};

const getSingle = async( req, res) => {
    const fabricsId = new ObjectId(req.params.id);
    const result = await mongodb.getDatabase().db().collection('fabrics').find({_id: fabricsId});
    result.toArray().then((fabrics) => {
      res.setHeader('Content-Type', 'appliation/json');
      res.status(200).json(fabrics[0]);
    });
};

module.exports = {
    getAll,
    getSingle
}