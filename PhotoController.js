const Photo = require('./Photo');
const fs = require('fs'); // modulo de leitura de arquivos binarios

const express = require('express');
const app = express();

const CreatePhoto = async (title, description, imgPath) =>{
    try {
        //leitura do arquivo
        const photoData = fs.readFileSync(imgPath);

        const photo = Photo.create({
            title,
            description,
            Img: imgPath
        });

        console.log("Photo enviada", (await photo).toJSON)
        
    } catch (error) {
        console.log('error ao enviar arquivo', error);
        
    }
}

// CreatePhoto('Finn and jake', 'filme predileto', './img/Finn.jfif');