// Imports
import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// Component imports
import Nav from './components/Header';
import Footer from './components/Footer';
import ParticleHolder from './components/ParticleHolder';
import Background from './components/Background';

// Page imports
import AboutMe from './pages/AboutMe';
import Contact from './pages/Contact';
import Work from './pages/Work';
import Resume from './pages/Resume';

function App() {
    const [currentPage, setCurrentPage] = useState('/');

    return (
        // <Router basename="/portfolio">
        <Router>
            <Background />
            <div className="flex flex-col h-full relative">
                <Nav
                    currentPage={currentPage}
                    setCurrentPage={setCurrentPage}
                />
                <div className="flex grow overflow-auto">
                    <Routes>
                        <Route
                            path="/"
                            element={
                                <AboutMe
                                    currentPage={currentPage}
                                    setCurrentPage={setCurrentPage}
                                />
                            }
                        />
                        <Route
                            path="/contact"
                            element={
                                <Contact
                                    currentPage={currentPage}
                                    setCurrentPage={setCurrentPage}
                                />
                            }
                        />
                        <Route
                            path="/work"
                            element={
                                <Work
                                    currentPage={currentPage}
                                    setCurrentPage={setCurrentPage}
                                />
                            }
                        />
                        <Route
                            path="/resume"
                            element={
                                <Resume
                                    currentPage={currentPage}
                                    setCurrentPage={setCurrentPage}
                                />
                            }
                        />
                    </Routes>
                </div>
                <ParticleHolder />
                <Footer />
            </div>
        </Router>
    );
}

export default App;
