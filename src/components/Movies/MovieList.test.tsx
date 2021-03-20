import React from "react";
import { shallow, mount } from "enzyme";
import MovieList from "./MovieList";
import { Movie } from "../../utils/MovieApiProvider";

const shrek: Movie = {
  imdbID: "saddfghkl",
  Poster: "img-url",
  Title: "Shrek",
  Type: "movie",
  Year: "2000",
};
const movies: Movie[] = [shrek];

describe("<MovieList />", () => {
  test("renders list of movies", () => {
    const wrapper = mount(<MovieList movies={movies} />);
    const movieList = wrapper.find("MovieCard");

    expect(movieList.children().length).toBe(movies.length);
  });

  test("renders message when no movies in list", () => {
    const wrapper = shallow(<MovieList movies={[]} />);

    expect(wrapper.text()).toContain("Search");
  });
});
