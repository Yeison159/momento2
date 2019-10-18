const express = require('express');
const mongoose = require('mongoose');


var app = express();

app.get('/', function (req, res) {
    res.json('Este es el momento 2');
  });

  app.get('/edad/:num', function (req, res) {
     let nume = req.params.num;
     nume = nume.toString();

     let num = parseInt(nume);
     
        
     if (Number.isInteger(num)){

        if (num >= 0 && num <= 150){
            res.json(`Tu edad es ${nume}`);
        } else {
            res.json('Debe ser un numero entre 0 y 150');
        }
      
     } else {
        res.json('No es un numero');
     }

     

  });

  app.get('/saludo/:nombre', function (req, res) {
    let nombre = req.params.nombre;
    nombre = nombre.toString().trim();
    catidad= nombre.split(' ');
    
    let cant = catidad.length
    var count= 0;
    for (let index = 0; index < cant; index++) {
        count += catidad[index].length
    }
  
    if(count >= 3 && count <= 40){
        res.json(`Hola ${nombre}`);
    } else {

    }
    res.json('La cantidad de caracteres debe ser menos o mayor a 40');
  });


app.get('/database', function (req, res) {
        mongoose.connect('mongodb://localhost:27017/momento2', {
            useNewUrlParser: true,
            useUnifiedTopology: true
        }, (err, res) => {

        if(err) throw err;
          
         console.log("bienvenido conexion exitosa");
        });
         res.json("bienvenido conexion exitosa");
  });




  let port = process.env.PORT || 3000
  
  app.listen(port, function () {
    console.log('Example app listening on port 3000!');
  });