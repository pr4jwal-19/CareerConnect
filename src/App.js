
import './App.css';
import Home from './pages/Home';
import CreatePost from './pages/CreatePost';
import AllPosts from './components/AllPosts';

import {BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import { routePath } from './routes/route';

function App() {
  return (
    // Router is the BrowserRouter
    <Router>
      <Routes>
        {/* If url is empty -> "/" it means we r at Home page */}
        <Route path={routePath.home} element={<Home/>} />
        <Route path={routePath.create} element={<CreatePost/>} />
        <Route path={routePath.posts} element={<AllPosts/>} />

      </Routes>
    </Router>
    // <Home />
  );
}

export default App;
