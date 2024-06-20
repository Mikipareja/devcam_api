const express = require('express');
const router = express.Router();


router.get('/: , v1/campus', (req, res)=>{
    
    res.status(200).json({succes:true, msg: 'Lista de todos los campos'});

});

router.get('/:id', (req, res)=>{
    res.status(200).json({success: true, msg: `Info del campus ${req.params.id}`});

});   

router.post('/', (req, res)=>{
    res.status(201).json({succes: true, msg:"Elemento creado"});

});


router.put('/:id', (req, res)=>{
    res.status(200).json({succes: true, msg: `Elemento modificado" ${req.params.id}`});

});

router.delete('/:id', (req, res)=>{
    res.status(200).json({succes: true, msg: `Elemento eliminado ${req.params.id}`});

});

module.exports = router;