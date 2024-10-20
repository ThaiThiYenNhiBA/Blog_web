import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import DarkNav from './DarkNav';
import Home from './Home';
import Detail from './Detail';
import CreateForm from './CreateForm';
import EditForm from './EditForm';
import Footer from './Footer';

function App() {
  return (
    <div className="main">
      <Router>
        <DarkNav />
        <Routes>
          <Route path="/blogs" element={<Home />} />
          <Route path="/blogs/new" element={<CreateForm />} />
          <Route path="/blogs/:id" element={<Detail />} />
          <Route path="/blogs/:id/edit" element={<EditForm />} />
          <Route path="/" element={<Home />} />
          <Route path="*" element={<Home />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
