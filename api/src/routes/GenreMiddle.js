const axios = require('axios');
const express = require('express');
const { Videogame, Genre } = require('../db.js');
const { API_KEY } = process.env
const { v4: uuidv4 } = require('uuid')

const router = express.Router();
router.use(express.json());

router.get('/', async (req, res) => {
    try {
        const getGenres = await Genre.findAll()

        return res.status(200).json(getGenres)
        
    } catch (error) {
        return res.status(404).send('An error has ocurred');
    }
});


router.post('/', async (req, res) => {
    try {
        const { name } = req.body

        const findGenre = await Genre.findOne({
            where: {name}
        })

        if(!findGenre) {
            const createGenre = await Genre.create({
                id: uuidv4,
                name: name
            })

            console.log(createGenre.__proto__)


        }
    } catch (error) {
        
    }
})




module.exports = router