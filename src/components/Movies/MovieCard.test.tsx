import React from "react";
import { shallow, mount } from "enzyme";
import MovieCard from "./MovieCard";
import { Movie } from "../../utils/MovieApiProvider";
import UserContextProvider, {
  UserContext,
  User,
} from "../../utils/UserContext";

const shrek: Movie = {
  imdbID: "saddfghkl",
  Poster: "img-url",
  Title: "Shrek",
  Type: "movie",
  Year: "2000",
};

describe("<MovieCard />", () => {
  test("renders correctly", () => {
    const wrapper = shallow(
      <MovieCard movie={shrek} onSelect={() => {}} onQuickReview={() => {}} />
    );

    expect(wrapper.text()).toContain("Shrek");
  });

  test("onSelect is called on button press", () => {
    const mockCallback = jest.fn();
    const wrapper = shallow(
      <MovieCard
        movie={shrek}
        onSelect={mockCallback}
        onQuickReview={() => {}}
      />
    );
    const button = wrapper.find("Button#review-modal");

    expect(mockCallback).toHaveBeenCalledTimes(0);
    button.simulate("click");
    expect(mockCallback).toHaveBeenCalledTimes(1);
  });

  test("onQuickReview is called when quick review button is pressed", () => {
    const mockCallback = jest.fn();
    const mockUser: User = { name: "mock user" };
    const wrapper = mount(
      <UserContextProvider user={mockUser}>
        <MovieCard
          movie={shrek}
          onSelect={() => {}}
          onQuickReview={mockCallback}
        />
      </UserContextProvider>
    );
    const button = wrapper.find("Button#quick-review");

    expect(mockCallback).toHaveBeenCalledTimes(0);
    button.simulate("click");
    expect(mockCallback).toHaveBeenCalledTimes(1);
  });

  test("quick review button is not rendered if user is not set in context", () => {
    const wrapper = shallow(
      <MovieCard movie={shrek} onSelect={() => {}} onQuickReview={() => {}} />
    );
    const quickReviewButton = wrapper.find("Button#quick-review");

    expect(quickReviewButton.length).toBe(0);
  });

  test("quick review button is rendered if user is set in context", () => {
    const mockUser: User = { name: "mock user" };
    const wrapper = mount(
      <UserContextProvider user={mockUser}>
        <MovieCard movie={shrek} onSelect={() => {}} onQuickReview={() => {}} />
      </UserContextProvider>
    );
    const quickReviewButton = wrapper.find("Button#quick-review");

    expect(quickReviewButton.length).toBe(1);
    expect(quickReviewButton.prop("title")).toContain(
      `Review ${shrek.Title} as ${mockUser.name}`
    );
  });
});
