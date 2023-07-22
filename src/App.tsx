import React, { useContext } from 'react';
import MoviesList from './pages/movies/MoviesList';
import { Routes, Route, Navigate } from 'react-router-dom';
import Navigation from './components/header/Navigation';
import MovieCreate from './pages/movies/MovieCreate';
import MovieEdit from './pages/movies/MovieEdit';
import Login from './pages/login/Login';
import Register from './pages/register/Register';
import { LoginContext } from './contexts/LoginContext';
import Search from './pages/search/Search';

function App() {
  const { auth } = useContext(LoginContext);

  return (
    <div className="App">
      {/* {!auth.isLoggedIn && <Navigate to="/login" />} */}
      <Navigation />
      <Routes>
        <Route path="/" element={<MoviesList />} />
        <Route path="/movies/create" element={<MovieCreate />} />
        <Route path="/movies/edit/:movieId" element={<MovieEdit />} />
        <Route path="/movies/search/:search" element={<Search />} />

        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Routes>
    </div>
  );
}

export default App;
