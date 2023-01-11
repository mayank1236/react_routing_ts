import React from 'react';
import { NavLink } from 'react-router-dom';
import { Link, Route, Routes, useLocation } from 'react-router-dom';
import BookRoutes from './BookRoutes';
import Home from './pages/Home';
import NotFound from './pages/NotFound';


function App() {
  const location = useLocation()
  console.log(location);
  return (
    <>
      <Routes>
        <Route path="/books" element={<h1>Extra Content</h1>} />
      </Routes>
      <nav>
        <ul>
          <li>
            <NavLink to="/">Home</NavLink>
          </li>
          <li>
            <Link to="/books">Books</Link>
          </li>
        </ul>
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/books/*" element={<BookRoutes />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
}

export default App;
