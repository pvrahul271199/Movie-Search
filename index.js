const express = require('express');
const path = require('path')
const axios = require('axios')
const fetch = require('node-fetch');
const app = express();
<<<<<<< HEAD
const port = process.env.PORT || 8080;
=======
const port = process.env.port || 3000;
>>>>>>> 3bb98ecbc21ce0c02864aedd8860fbaf44395ac6

app.use(express.static(path.join(__dirname, 'public')))
app.set('view engine', 'ejs')

app.get('/', async (req, res) => {

    const movieName = req.query.movie;
    const url = "http://api.tvmaze.com/search/shows/?q=" + movieName;
    const response = await axios(url);
    const json = await response.data;
    console.log(typeof (json))
    res.render('home', { json })

})

app.get('*', (req, res) => {
    res.send("Page not Found")
})


app.listen(port, () => {
    console.log(`Server listening in PORT ${port}`)
})
