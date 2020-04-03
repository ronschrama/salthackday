const express = require('express');
const fetch = require('node-fetch');
const cors = require('cors');
const bodyParser = require('body-parser');
require('dotenv').config();

const apiKey = process.env.APIKEY

const app = express();

app.use(cors())
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.get('/express_backend', (req, res) => {
  res.send({ express: 'This is the express backend that is connected to react'})
});

let heroData;

app.get('/:heroID', (req,res) => {
  fetch(`https://gateway.marvel.com/v1/public/characters/${req.params.heroID}${apiKey}`)
  .then(res => res.json())
  .then(Marveldata => {
    console.log(Marveldata)
    const data = Marveldata.data.results[0];
      heroData = 
         {
          name: data.name,
          desc: data.description,
          events: data.events.available,
          comics: data.comics.available,
          series: data.series.available,
          stories: data.stories.available, 
          wiki: data.urls[1].url,
          thumbnailpath: data.thumbnail.path,
          thumbnailext: data.thumbnail.extension,
        }
      console.log(heroData);
      res.send(heroData);
    })
    .catch(err => console.log(err));
  })

const port = process.env.PORT || 5000;
app.listen(port, () => console.log(`Server is running and listening on port ${port}`)); 