// Course.jsx
import React from 'react';
import Chapter from './Chapter'; // Import the Chapter component
import { Link } from 'react-router-dom';

const getChapterTime = (chapterIdx, lessons) => {
  return lessons.reduce((total, _, lessonIdx) => {
    const key = `lessonTime_${chapterIdx}_${lessonIdx}`;
    const time = localStorage.getItem(key);
    return total + (time ? parseInt(time, 10) : 0);
  }, 0);
};

const Course = ({ courseData }) => {
  const [updateFlag, setUpdateFlag] = React.useState(0);
  const lastLesson = JSON.parse(localStorage.getItem('lastLesson'));

  React.useEffect(() => {
    const handleFocus = () => setUpdateFlag((f) => f + 1);
    window.addEventListener('focus', handleFocus);
    document.addEventListener('visibilitychange', handleFocus);
    return () => {
      window.removeEventListener('focus', handleFocus);
      document.removeEventListener('visibilitychange', handleFocus);
    };
  }, []);

  return (
    <div className="course-container">
      <h1>{courseData.title}</h1>
      <p>{courseData.description}</p>
      {lastLesson && lastLesson.chapterId !== undefined && lastLesson.lessonId !== undefined && (
        <div style={{ marginBottom: '16px' }}>
          <Link to={`/course/chapter/${lastLesson.chapterId}/lesson/${lastLesson.lessonId}`} style={{ color: '#007bff', fontWeight: 'bold' }}>
            Continue where you left off
          </Link>
        </div> 
      )}
      <div className="chapters-list">
        {courseData.chapters.map((chapter, index) => (
          <div key={index + '-' + updateFlag}>
            <Link to={`/course/chapter/${index}`}>{chapter.title}</Link>
            <span style={{ marginLeft: '8px', color: '#888' }}>
              (Total time: {getChapterTime(index, chapter.lessons)} seconds)
            </span>
            <ul style={{ marginTop: '4px', marginBottom: '12px' }}>
              {chapter.lessons.map((lesson, lessonIdx) => {
                const key = `lessonTime_${index}_${lessonIdx}`;
                const time = localStorage.getItem(key);
                return (
                  <li key={lessonIdx + '-' + updateFlag}>
                    <span>{lesson.title}</span>
                    <span style={{ marginLeft: '8px', color: '#888' }}>
                      (Spent: {time ? parseInt(time, 10) : 0} seconds)
                    </span>
                    <Link to={`/course/chapter/${index}/lesson/${lessonIdx}`} style={{ marginLeft: '12px', color: '#007bff' }}>
                      Continue
                    </Link>
                  </li>
                );
              })}
            </ul>
          </div>
        ))}
      </div> 
    </div>
  );
};

export default Course;