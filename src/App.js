import "./App.css";
import { Reset } from "styled-reset";
import Nav from "./components/UI/Nav/Nav";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Main from "./components/Main";
import { useState, useEffect } from "react";
import Details from "./components/UI/Details/Details";
import SingIn from "./components/Layout/Form/SignIn";
import SingUp from "./components/Layout/Form/SignUp";

function App() {
  const [movieData, setMovieData] = useState([]);
  const [searchFilter, setSearchFilter] = useState([]);
  const [searchValue, setSearchValue] = useState("");
  const [userId, setUserId] = useState({ id: "", pwd: "" });

  const userSignUp = (info) => {
    setUserId(info);
  };

  const inputSearchValue = (data) => {
    setSearchValue(data);

    const newObj = {};

    Object.keys(movieData).map(
      (key) =>
        (newObj[key] = movieData[key].filter((value) =>
          value.title.toLowerCase().includes(searchValue)
        ))
    );

    setSearchFilter(newObj);
  };

  useEffect(() => {
    fetchMovieData();
  }, []);

  /*
  function fetchApiFunc(apiUrl, options) {

    // headers: ,, 

    const data = fetch(apiUrl);

    return data;

  }*/

  const fetchMovieData = async () => {
    const response = await fetch(
      "https://api.themoviedb.org/3/movie/now_playing?api_key=1efe7e9dcfe999d6d25a99f91164d434&page=1"
    );

    const result = await response.json();

    const popularResponse = await fetch(
      "https://api.themoviedb.org/3/movie/popular?api_key=1efe7e9dcfe999d6d25a99f91164d434&page=1"
    );
    const popularResult = await popularResponse.json();

    const ratedResponse = await fetch(
      "https://api.themoviedb.org/3/movie/top_rated?api_key=1efe7e9dcfe999d6d25a99f91164d434&page=1"
    );
    const ratedResult = await ratedResponse.json();

    const upcomingResponse = await fetch(
      "https://api.themoviedb.org/3/movie/upcoming?api_key=1efe7e9dcfe999d6d25a99f91164d434&page=1"
    );
    const upcomingResult = await upcomingResponse.json();

    const obj = {
      nowplaying: result.results.slice(10),
      popular: popularResult.results.slice(10),
      rated: ratedResult.results.slice(10),
      upcoming: upcomingResult.results.slice(10),
    };

    setMovieData(obj);
    setSearchFilter(obj);
  };

  return (
    <BrowserRouter>
      <Reset />

      <Nav inputSearchValue={inputSearchValue} movieData={movieData} />

      <Routes>
        <Route path="/" element={<Main movieData={searchFilter} />}></Route>
        <Route
          path="/details/:id"
          element={
            <Details movieData={searchFilter} recommendData={movieData} />
          }
        ></Route>

        <Route path="/singIn" element={<SingIn userInfo={userId} />} />
        <Route path="/singUp" element={<SingUp userSignUp={userSignUp} />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
