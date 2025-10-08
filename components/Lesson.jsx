// Lesson.jsx
import React from 'react';

const Lesson = ({ lessonData, lessonNumber }) => {
  return (
    <div className="lesson-item">
      <p>{lessonNumber}. {lessonData.title} ({lessonData.duration})</p>
      {/* {lessonData.pptUrl && (
        <div style={{ marginTop: '16px' }}>
          <a href={lessonData.pptUrl} target="_blank" rel="noopener noreferrer">
            View/Download PPT
          </a>
         
          
        </div>
      )} */}
        {/* <div>
      <Document file={lessonData.pptUrl} onLoadSuccess={onDocumentLoadSuccess}>
        <Page pageNumber={pageNumber} />
      </Document>
      <p>
        Page {pageNumber} of {numPages}
      </p>
    </div> */}
    </div>
  );
};

export default Lesson;