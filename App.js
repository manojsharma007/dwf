import SignUp from "./components/SignUp";
import Login from "./components/Login";
import LessonStart from "./components/LessonStart";
import Chapter, { Lesson } from "./components/Chapter";
// import { Route, Switch, Redirect } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";

// function App() {
//   return (
//     <>
//       <Header />
//       <Switch>
//         <Route path="/login" component={Login} />
//         <Route path="/signup" component={SignUp} />
//         <Route path="/course" exact component={LessonStart} />
//         <Route path="/course/chapter/:chapterId" exact component={Chapter} />
//         <Route path="/course/chapter/:chapterId/lesson/:lessonId" component={Lesson} />
//         <Redirect from="/" to="/signup" />
//       </Switch>
//       <Footer />
//     </>
//   );
// }

// export default App;
    import React from 'react';
    import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';

    function App() {
      return (
        <Router>
          <div>
            {/* Other components like Navbar */}
           
      <Header />
      <Switch>
        <Route path="/login" component={Login} />
        <Route path="/signup" component={SignUp} />
        <Route path="/course" exact component={LessonStart} />
        <Route path="/course/chapter/:chapterId" exact component={Chapter} />
        <Route path="/course/chapter/:chapterId/lesson/:lessonId" component={Lesson} />
        <Redirect from="/" to="/signup" />
      </Switch>
      <Footer />
    
          </div>
        </Router>
      );
    }

    export default App;