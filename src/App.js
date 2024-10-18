import React from 'react';
import Header from './Header';
import PdfViewer from './PdfViewer';
import AboutMe from './AboutMe';
import Footer from './Footer';
import RedirectPopup from './RedirectPopup';
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
      <RedirectPopup />
    </div>
  );
}

export default App;