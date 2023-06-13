const express = require('express');
const Photo = require('./Photo');
const fs = require('fs')
const router = express.Router();
router.use(express.json());
const multer = require('multer');
const upload = multer({dest:'./uploads' });

//metodo que busca todas as fotos

router.get('/photos', (req, res) =>{
    Photo.findAll()
        .then((photos) =>{
            res.json(photos);
            console.log(photos);
        })
        .catch((error) =>{
            res.status(500).json({error: 'erro ao obter fotos'});
        })
});


router.post('/api/photos', upload.single('Img'), (req, res) => {
    try {
      const fileContent = fs.readFileSync(req.file.path);
  
      Photo.create({
        Img: fileContent,
        title: req.body.title,
        description: req.body.description
      })
        .then((photo) => {
          res.status(200).json(photo);
        })
        .catch((error) => {
          res.status(500).json({ error: 'Erro ao enviar foto' });
        });
    } catch (error) {
      res.status(500).json({ error: 'Erro ao ler o arquivo' });
    }
  });
  
module.exports = router;