const Campus = require('../models/Campus');
//@desc     Obtener todos los campus
//@route    /api/v1/campus
//@access   publico
exports.getCampus = (req, res, next) =>{
    res.status(200).json({success:true, msg: 'Lista de todos los campus'});    
}

//@desc     Crear un nuevo elemento - alta de campus
//@route    /api/v1/campus
//@access   publico
exports.createCampus = async (req, res, next) =>{
    try{
        const campus = await Campus.create(req.body);
        res.status(201).json({succes: true, msg:"Elemento creado", data: campus});

    }catch(err){
        res.status(400).json({succes: false, error: err.message});

    }
}

//@desc      Obtener un campus por su id
//@route     /api/v1/campus/:id
//@access    publico
exports.getCampusId = (req, res, next) =>{
    res.status(200).json({success: true, msg: `Info del campus ${req.params.id}`});
}

//@desc      Modificar  un campus por su id
//@route     /api/v1/campus/:id
//@access    publico
exports.modifyCampus = (req, res, next) =>{
    res.status(200).json({success: true, msg: `Elemento modificado ${req.params.id}`});
}
//@desc      Eliminar  un campus por su id
//@route     /api/v1/campus/:id
//@access    publico
exports.deleteCampus = (req, res, next) =>{
    res.status(200).json({success: true, msg: `Elemento eliminado ${req.params.id}`});
}