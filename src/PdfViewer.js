// src/PdfViewer.js
import React from 'react';

function PdfViewer() {
  return (
    <section className="pdf-container">
      <iframe
        className="pdf-viewer"
        src="Santiago_Cravino_Resume.pdf"
        title="Santiago Cravino Resume"
      >
        <p>
          Your browser does not support PDFs.{' '}
          <a href="Santiago_Cravino_Resume.pdf">Download the PDF</a>.
        </p>
      </iframe>
    </section>
  );
}

export default PdfViewer;
