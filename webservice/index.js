const express = require('express');
const axios = require('axios');
const app = express();
const path = require('path');


app.use(express.static("../webapp"))
app.use(express.urlencoded({ extended: true }))
app.use(express.json())
app.set('views', path.join(__dirname, 'views'))
app.set('view engine', 'ejs')

async function requestMovieData(title) {
    const movieReponse = await axios.get(`https://api.themoviedb.org/3/search/movie?api_key=22d352904dcaf5a90b044110eb795a85&language=en-US&query=${title}=1&include_adult=false`);
    let movieLimit = 0;
    const response = [];
    for (let movie of movieReponse.data.results) {
        if (movieLimit >= 10) {
            break;
        }
        movieLimit++;

        const { id, title, poster_path, popularity, vote_count } = movie;
        response.push({
            "movie_id": id,
            "title": title,
            "poster_image_url": poster_path,
            "popularity_summary": vote_count === 0 ? "No Votes have been cast for this movie" : `${popularity} out of ${vote_count}`
        });
    }
    //console.log(`THE LENGTH IS ${response.length}`);
    //console.log(response);
    return response;
}

app.get('/movies', async (req, res) => {
    console.log("GET Request!!!!!");
    const title = req.query;
    const movies = await requestMovieData(title.title);
    res.render('searchresult', { movies });
})

app.listen(3000, () => {
    console.log("Listening on port 3000");
})