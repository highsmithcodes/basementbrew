import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import { Main } from "./pages/main/main";
import { Login } from "./pages/login";
import { CreatePost } from "./pages/create-post/create-post";
import { Navbar } from "./components/navbar";
import { Footer } from "./components/footer";
import { Post } from './components/post';

function App() {
  return (
    <div className="App">
      <Router>
      <Navbar />
      <div className='container'>
        
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/login" element={<Login />} />
          <Route path="/createpost" element={<CreatePost />} />
          <Route path="/post/:id" element={<Post/>} />
        </Routes>
       
        </div>
        <Footer />
      </Router>
    </div>
  );
}

export default App;