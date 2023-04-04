"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const lord_of_the_rings_sdk_1 = __importDefault(require("@hassandiv/lord-of-the-rings-sdk"));
const client = new lord_of_the_rings_sdk_1.default({
    apiKey: "q6w0BNvxuOeWnkFQq7oK",
});
const id1 = "5cd95395de30eff6ebccde5c";
const id2 = "5cd95395de30eff6ebccde5b";
const id3 = "5cd95395de30eff6ebccde5d";
client
    .getMovies()
    .then((res) => {
    console.log("The lord of the rings movies:", res);
})
    .catch((error) => {
    console.log("Error", error.message);
});
client
    .getMovieById(id3)
    .then((movie) => {
    console.log("The lord of the rings:", movie);
})
    .catch((error) => {
    console.log("Error", error.message);
});
client
    .getMovieQuote(id3, { limit: 10, offset: 0 })
    .then((res) => {
    console.log(res);
})
    .catch((error) => {
    console.log("Error", error.message);
});
