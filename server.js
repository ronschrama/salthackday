const express = require('express');
const fetch = require('node-fetch');
require('dotenv').config();

const apiKey = process.env.APIKEY

const app = express();

app.get('/express_backend', (req, res) => {
  res.send({ express: 'This is the express backend that is connected to react'})
});

app.get('/:heroID', (req,res) => {
  fetch(`https://gateway.marvel.com/v1/public/characters/${req.params.heroID}${apiKey}`)
  .then(res => res.json())
      .then(Marveldata => {
        console.log(Marveldata)
        const heroData = 
          {
            name: Marveldata.data.results[0].name,
            desc: Marveldata.data.results[0].description,
            events: Marveldata.data.results[0].events.available,
            comics: Marveldata.data.results[0].comics.available,
            series: Marveldata.data.results[0].series.available,
            stories: Marveldata.data.results[0].stories.available
          }
        console.log(heroData);
      })
    .catch(err => console.log(err));
    console.log(heroData);  
    // const data = "Grab data you want to display and put in object"
  res.send(marvelData)
  })

const port = process.env.PORT || 5000;
app.listen(port, () => console.log(`Server is running and listening on port ${port}`));
