import React, { useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Landing from './components/Landing';
import Projects from './components/Projects';
import About from './components/About';
import Contact from './components/Contact';
import DIYPage from './components/DIYPage';
import posthog from 'posthog-js'
import Stats from './components/Stats';

const App = () => {
    posthog.init('phc_4wRr396iA3G9Tw4lQUd6h0iOF5smmLScLAWBtDMgduq',
        {
            api_host: 'https://us.i.posthog.com',
            person_profiles: 'identified_only' // or 'always' to create profiles for anonymous users as well
        }
    )
    useEffect(() => {
        document.title = 'Ankush Portfolio';
      }, []);
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Landing />} />
                <Route path="/projects" element={<Projects />} />
                <Route path="/about" element={<About />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/diy" element={<DIYPage />} />
                <Route path="/stats" element={<Stats />} />
                {/* Add more routes as needed */}
            </Routes>
        </Router>
    );
}

export default App;
