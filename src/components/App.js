import SiderBar from "./SideBar";
import ContentWrapper from "./ContentWrapper";
import "../assets/css/app.css";
import { Route, Routes } from "react-router-dom";
import ContentRowMovies from "./ContentRowMovies";
import { GenresInDeb } from "./GenresInDeb";
import { LastMovieInDb } from "./LastMovieInDb";
import Search from "./Search";

const App = () => {
  return (
    <div id='wrapper'>
      <SiderBar />
      <Routes>
        <Route path='/' element={<ContentWrapper />} />
        <Route path='/content-row-movies' element={<ContentRowMovies />} />
        <Route path='/genres-in-database' element={<GenresInDeb />} />
        <Route path='/last-movie-in-database' element={<LastMovieInDb />} />
        <Route path='/search' element={<Search />} />
        <Route path='*' element={<h1>Error 404, página no encontrada</h1>} />
      </Routes>
    </div>
  );
};

export default App;
