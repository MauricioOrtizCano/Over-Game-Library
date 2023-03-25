const { Router } = require('express');
const express = require('express');

const router = Router();

const videogameMiddleware = require('./VideogameMiddle.js');
const genreMiddleware = require('./GenreMiddle.js');

router.use(express.json());

router.use('/videogames', videogameMiddleware);
router.use('/genres', genreMiddleware);

// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');


// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);

module.exports = router


