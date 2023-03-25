const axios = require("axios");
const express = require("express");
const { Videogame, Genre } = require("../db.js");
const { API_KEY } = process.env;
const { v4: uuidv4 } = require("uuid");

const router = express.Router();
router.use(express.json());

const getAllGenresAPI = async () => {
  const response = await axios.get(
    `https://api.rawg.io/api/genres?key=${API_KEY}`
  );

  const allGenresApi = response.data.results.map((g) => {
    const genre = {
      id: g.id,
      name: g.name,
      //   games: g.games.map((vg) => vg.name),
    };
    return genre;
  });

  return allGenresApi;
};

router.get("/", async (req, res) => {
  try {
    const getGenres = await getAllGenresAPI(); //find on API
    console.log(getGenres);

    return res.status(200).json(getGenres);
  } catch (error) {
    return res.status(404).send("An error has ocurred");
  }
});

router.post("/", async (req, res) => {
  try {
    const { name } = req.body;

    const findGenre = await Genre.findOne({
      where: { name },
    });

    if (!findGenre) {
      const createGenre = await Genre.create({
        id: uuidv4,
        name: name,
      });

      console.log(createGenre.__proto__);
    }
  } catch (error) {}
});

module.exports = router;
