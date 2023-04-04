import LordOfTheRingsAPI from "@hassandiv/lord-of-the-rings-sdk";

const client = new LordOfTheRingsAPI({
  apiKey: "q6w0BNvxuOeWnkFQq7oK",
});

const id1 = "5cd95395de30eff6ebccde5c"; //The Fellowship of the Ring
const id2 = "5cd95395de30eff6ebccde5b"; //The Two Towers
const id3 = "5cd95395de30eff6ebccde5d"; //The Return of the King

/* Get all lord of the rings movies */
client
  .getMovies()
  .then((res) => {
    console.log("The lord of the rings movies:", res);
  })
  .catch((error) => {
    console.log("Error", error.message);
  });

/* Uncomment the code below to get a single movie by ID*/
client
  .getMovieById(id3)
  .then((movie) => {
    console.log("The lord of the rings:", movie);
  })
  .catch((error) => {
    console.log("Error", error.message);
  });

/* Uncomment the code below to get movie quotes by movie ID, limit and offset*/
client
  .getMovieQuote(id3, { limit: 10, offset: 0 })
  .then((res) => {
    console.log(res);
  })
  .catch((error) => {
    console.log("Error", error.message);
  });
