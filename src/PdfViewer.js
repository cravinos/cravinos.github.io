// src/PdfViewer.js
import React from 'react';

function PdfViewer() {
  const pdfUrl = `${process.env.PUBLIC_URL}/Santiago_Cravino_Resume.pdf`;

  return (
    <section className="pdf-container">
      <iframe
        className="pdf-viewer"
        src={pdfUrl}
        title="Santiago Cravino Resume"
      >
        <p>
          Your browser does not support PDFs.{' '}
          <a href={pdfUrl} download>
            Download the PDF
          </a>
          .
        </p>
      </iframe>
    </section>
  );
}

export default PdfViewer;
