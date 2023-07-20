import React from 'react';
import MoviesList from './pages/movies/MoviesList';
import { Routes, Route } from 'react-router-dom';
import Navigation from './components/header/Navigation';
import MovieCreate from './pages/movies/MovieCreate';
import MovieEdit from './pages/movies/MovieEdit';

function App() {
  return (
    <div className="App">
      <Navigation />
      <Routes>
        <Route path="/" element={<MoviesList />} />
        <Route path="/movies/create" element={<MovieCreate />} />
        <Route path="/movies/edit/:movieId" element={<MovieEdit />} />
      </Routes>
    </div>
  );
}

export default App;
