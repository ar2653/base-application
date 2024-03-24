import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Landing from './components/Landing';
import Projects from './components/Projects';
import About from './components/About';
import Contact from './components/Contact';
import DIYPage from './components/DIYPage';

const App = () => {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Landing />} />
                <Route path="/projects" element={<Projects />} />
                <Route path="/about" element={<About />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/diy" element={<DIYPage />} />
                {/* Add more routes as needed */}
            </Routes>
        </Router>
    );
}

export default App;
