const mongoose = require('mongoose');

const CampusSchema = new mongoose.Schema({
    name:{
        type: String,
        required: [true, 'El nombre del campus es requerido'],
        trim: true,
        maxleng:[50, 'El hombre del campus no puede tener mas de 50 años']      
    },
    slug: String, 
    decription: {
        type: String,
        required: [true,'El campo descripcion es requerido'],
        maxleng:[500, 'El tamaño maximo de caracteres son 500']
    },
    website:{
        type: String,
    },
    Phone: {
        type: String,
        maxleng: [20, 'El tamaño maximo son 20 digitos'],
    },
    email: {
        type: String,
        required: [true, 'Por favor añade una direccion'],
    },
    location: {
        type:{
            type:String, 
            enum:['Point'],
            required: true
        },
        coordinates: {
            type:[Number],
            required: false,
            index: '2dsphere'
        },
        formateAddress: String,
        street: String,
        city: String,
        zipcode: String,
        country: String
    },
    carreers: {
        type:[String],
        enum:[
            'Web Development',
            'Mobile Development',
            'UI/UX',
            'Data Science',
            'Business',
            'Other'
        ]   
    },
    averageRating:{
        type: Number,
        min:[1, 'El valor tiene que estar entre 1 y 10'],
        max:[10, 'El valor tiene que estar entre 1 y 10']
    },
    averageCost: Number,
    photo:{
        type:String,
        default:'no-photo.jpg'
    },
    housing: {
        type:Boolean,
        default: false
    },
    jobAssistance: {
        type:Boolean,
        default: false
    },
    jobGuarantee:{
        type:Boolean,
        default: false

    },
    accptGi:{
        type:Boolean,
        default: false
    },
    createdAt:{
        type:Date,
        default: Date.now()

    },




});

module.export = mongoose.model('Campus', CampusSchema);