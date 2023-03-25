//                       _oo0oo_
//                      o8888888o
//                      88" . "88
//                      (| -_- |)
//                      0\  =  /0
//                    ___/`---'\___
//                  .' \\|     |// '.
//                 / \\|||  :  |||// \
//                / _||||| -:- |||||- \
//               |   | \\\  -  /// |   |
//               | \_|  ''\---/''  |_/ |
//               \  .-\__  '-'  ___/-. /
//             ___'. .'  /--.--\  `. .'___
//          ."" '<  `.___\_<|>_/___.' >' "".
//         | | :  `- \`.;`\ _ /`;.`/ - ` : | |
//         \  \ `_.   \_ __\ /__ _/   .-` /  /
//     =====`-.____`.___ \_____/___.-`___.-'=====
//                       `=---='
//     ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
const server = require('./src/app.js');
const { conn, Genre } = require('./src/db.js');
const axios = require('axios');
const { API_KEY } = process.env;

function genresToDB() {
  axios.get(`https://api.rawg.io/api/genres?key=${API_KEY}`).then(r => {
      let arrGenre = r.data.results.map(g => {
          const genre = {
                  id: g.id,
                  name: g.name,
                  games: g.games.map(vg => vg.name)
              };
              return genre;
      })

      Genre.bulkCreate(arrGenre)
  })
}


// Syncing all the models at once.
conn.sync({ force: true }).then(async() => {
  await genresToDB()
  server.listen(3001, () => {
    console.log('Listening at 3001'); // eslint-disable-line no-console
  });
});
