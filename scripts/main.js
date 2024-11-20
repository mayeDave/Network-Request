// fetch movies list from API

const fetchMovies = async () => {

    
    const url = 'https://list-of-movies1.p.rapidapi.com/movies/Matrix/';
const options = {
	method: 'GET',
	headers: {
		'x-rapidapi-key': '6b0247f432msh9493c431080a037p1624e3jsn737a08eb05d0',
		'x-rapidapi-host': 'list-of-movies1.p.rapidapi.com'
	}
};

try {
	const response = await fetch(url, options);
	const result = await response.json();
    console.log(result);
	// add result to DOM
    const moviesList = document.getElementById('movies-list');
    result.forEach(movie => {
        const movieItem = document.createElement('li');
        movieItem.innerHTML = `
            <img src="${movie.image}" alt="${movie.title}">
            <h2>${movie.title}</h2>
            <p>${movie.description}</p>
            
            
        `;
        moviesList.appendChild(movieItem);
    });
} catch (error) {
	console.error(error);
}
}

fetchMovies();

