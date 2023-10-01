const validator = require('../helpers/validate');

const saveFabrics = (req, res, next) => {
    const validationRule = {        
        fabric: 'required|string',
        length: 'string',
        width:  'string',
        color:  'required|string',
        weight: 'string',
        name:   'required|string',
        composition: 'required|string',
        email: 'required|email'
    };
    validator(req.body, validationRule, {}, (err, status) => {
        if(!status){
            res.status(412).send({
                success: false,
                message: 'Validation failed',
                data: err
            });
        }else {
            next();
        }
    });
};

module.exports = {
    saveFabrics
};