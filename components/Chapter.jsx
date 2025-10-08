// Chapter.jsx
import React from 'react';
import { useParams, Link } from 'react-router-dom';


const chapters = [
  {
    title: "Introduction to React",
    lessons: [
      { title: "What is React?", duration: "5:30", content: "React is a JavaScript library for building user interfaces. It lets you compose complex UIs from small and isolated pieces of code called 'components'.", pptUrl: "/day2.ppt" },
      { title: "Setting up your environment", duration: "8:15", content: "To start with React, you need Node.js and npm installed. Use create-react-app to quickly set up a new project.", pptUrl: "/day2.ppt" },
    ],
  },
  {
    title: "Working with Components",
    lessons: [
      { title: "Creating functional components", duration: "10:00", content: "Functional components are JavaScript functions that return React elements. They are the simplest way to create a component.", pptUrl: "/day2.ppt" },
      { title: "Props and state", duration: "12:45", content: "Props are inputs to components. State is managed within the component and can change over time, triggering re-renders.", pptUrl: "/day2.ppt" },
    ],
  },
  // ... more chapters
];

const Chapter = () => {
  const { chapterId } = useParams();
  const chapter = chapters[chapterId];

  // Save last visited chapter for progress tracking
  React.useEffect(() => {
    if (chapter) {
      localStorage.setItem('lastChapter', JSON.stringify({ chapterId }));
    }
  }, [chapterId, chapter]);

  if (!chapter) return <div>Chapter not found</div>;

  return (
    <div>
      <Link to="/course">&larr; Back to Course</Link>
      <h2>{chapter.title}</h2>
      <ul>
        {chapter.lessons.map((lesson, idx) => (
          <li key={idx}>
            <Link to={`/course/chapter/${chapterId}/lesson/${idx}`}>{lesson.title}</Link>
            <span style={{ marginLeft: '8px', color: '#888' }}>({lesson.duration})</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

// Add a Lesson component for lesson details
export const Lesson = () => {
  const { chapterId, lessonId } = useParams();
  const chapter = chapters[chapterId];
  const lesson = chapter ? chapter.lessons[lessonId] : null;
  const storageKey = `lessonTime_${chapterId}_${lessonId}`;
  const [seconds, setSeconds] = React.useState(() => {
    const saved = localStorage.getItem(storageKey);
    return saved ? parseInt(saved, 10) : 0;
  });
  const [showPopup, setShowPopup] = React.useState(false);

  React.useEffect(() => {
    if (chapter && lesson) {
      localStorage.setItem('lastLesson', JSON.stringify({ chapterId, lessonId }));
    }
    // Start timer from saved value and update only for this lesson
    const interval = setInterval(() => {
      setSeconds((prev) => {
        localStorage.setItem(storageKey, prev + 1);
        return prev + 1;
      });
    }, 1000);
    // Show popup after 10 seconds
    const popupTimer = setTimeout(() => setShowPopup(true), 10000);
    return () => {
      clearInterval(interval);
      clearTimeout(popupTimer);
    };
  }, [chapterId, lessonId]);

  if (!chapter || !lesson) return <div>Lesson not found</div>;

  return (
    <div>
      <Link to={`/course/chapter/${chapterId}`}>&larr; Back to Chapter</Link>
      <h3>{lesson.title}</h3>
      <p>Duration: {lesson.duration}</p>
      <p>Time spent on this lesson: {seconds} seconds</p>
      <div style={{ marginTop: '16px' }}>
        {lesson.content}
       
         
        
      </div>
      {showPopup && (
        <div style={{ position: 'fixed', top: 0, left: 0, width: '100vw', height: '100vh', background: 'rgba(0,0,0,0.4)', display: 'flex', alignItems: 'center', justifyContent: 'center', zIndex: 9999 }}>
          <div style={{ background: '#fff', padding: '32px', borderRadius: '8px', boxShadow: '0 2px 12px #333', minWidth: '320px', textAlign: 'center' }}>
            <h4>Quick Question</h4>
            <p>{lesson.title === 'What is React?' ? 'What is React?' : 'What did you learn?'}</p>
            <input type="text" placeholder="Your answer..." style={{ width: '80%', padding: '8px', marginBottom: '16px' }} />
            <br />
            <button onClick={() => setShowPopup(false)} style={{ padding: '8px 24px', background: '#007bff', color: '#fff', border: 'none', borderRadius: '4px' }}>Close</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Chapter;
// In App.js, import { Lesson } from './components/Chapter'; and use for lesson route.
// <Route path="/course/chapter/:chapterId/lesson/:lessonId" component={Lesson} />