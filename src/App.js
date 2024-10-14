// src/App.js
import React from 'react';
import Header from './Header';
import PdfViewer from './PdfViewer';
import AboutMe from './AboutMe';
import Footer from './Footer';
import './styles.css';

function App() {
  return (
    <div className="resume-container">
      <Header />
      <main>
        <PdfViewer />
        <AboutMe />
      </main>
      <Footer />
    </div>
  );
}

export default App;
