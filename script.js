async function searchMovie() {
  const movieName = document.getElementById("movieInput").value;
  const apiKey = "a0ffc8a7";
  const url = `https://www.omdbapi.com/?t=${movieName}&apikey=${apiKey}`;

  const res = await fetch(url);
  const data = await res.json();

  if (data.Response === "True") {
    document.getElementById("result").innerHTML = `
      <h2>${data.Title} (${data.Year})</h2>
      <img src="${data.Poster}">
      <p><strong>Released:</strong> ${data.Released}</p>
      <p><strong>Director:</strong> ${data.Director}</p>
      <p><strong>Writer:</strong> ${data.Writer}</p>
      <p><strong>Actors:</strong> ${data.Actors}</p>
      <p><strong>Language:</strong> ${data.Language}</p>
      <p><strong>Country:</strong> ${data.Country}</p>
      <p><strong>Awards:</strong> ${data.Awards}</p>
      <p><strong>Ratings:</strong> ${data.Ratings.map(item => `${item.Source}: ${item.Value}`).join("/ ")}</p>
    `;
  } else {
    document.getElementById("result").innerHTML = `<p>Movie not found. Please try another movie.</p>`;
  }
  
}
