// Your code here
const movieAPI = 'http://localhost:3000/films'

//poster, title, runtime, showtime, and
//  available tickets are derives by subtracting the number of 'tickets_sold'
//  from the theater\'s 'capacity'
const poster = el('poster')
const title = el('title')
const runtime = el('runtime')
const showtime = el('showtime')
const availableTickets = el('ticket-num')
const emptyPoster = document.querySelector('.four wide column')
const films = el('films')
const description = el('film-info')


fetch(`${movieAPI}/1`)
    .then(res => res.json())
    .then(renderMovie);

    fetch(movieAPI)
        .then(res => res.json())
        .then(renderMovieListings)

function renderMovieListings(movies) {
    films.innerHTML = ''
    movies.forEach(listEachMovie)
}

function listEachMovie(film) {
    const listedMovie = document.createElement('li')
    listedMovie.textContent = film.title
    films.append(listedMovie)
}

function renderMovie(films) {
    poster.src = films.poster;
    title.textContent = films.title;
    runtime.textContent = films.runtime;
    showtime.textContent = films.showtime;
    description.textContent = films.description;
    
    availableTickets.textContent = films.capacity - films.tickets_sold

    document.querySelector('button').addEventListener('submit', function(e) {
        return simpleMath(e.target.ticket-num.value)
    })
} 

function simpleMath(number) {
    if (e === '')
}

function el(id) {
    return document.getElementById(id);
}