import React from 'react';
import { Link } from 'react-router-dom';

const courseInformation = {
  title: "The Ultimate React Course",
  description: "Master React, Next.js, Redux & More!",
  chapters: [
    {
      title: "Introduction to React",
      lessons: [
        { title: "What is React?", duration: "5:30" },
        { title: "Setting up your environment", duration: "8:15" },
      ],
    },
    {
      title: "Working with Components",
      lessons: [
        { title: "Creating functional components", duration: "10:00" },
        { title: "Props and state", duration: "12:45" },
      ],
    },
    // ... more chapters
  ],
};

const lastLesson = JSON.parse(localStorage.getItem('lastLesson'));

const LessonStart = () => {
  return (
    <div className="LessonStart">
      <h1>{courseInformation.title}</h1>
      <p>{courseInformation.description}</p>
      {lastLesson && (
        <div style={{ marginBottom: '16px' }}>
          <Link to={`/course/chapter/${lastLesson.chapterId}/lesson/${lastLesson.lessonId}`}>
            Continue where you left off
          </Link>
        </div>
      )}
      <ul>
        {courseInformation.chapters.map((chapter, idx) => (
          <li key={idx}>
            <Link to={`/course/chapter/${idx}`}>{chapter.title}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default LessonStart;