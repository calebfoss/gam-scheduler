/* globals React, ReactDOM, winterCourses */

class App extends React.Component {
  constructor(props) {
    super(props);
    const allCourses = [];
    winterCourses.forEach(({ program, number, name, reReqs }) => {
      if (!allCourses.some(({ name: otherName }) => name === otherName))
        allCourses.push({ program, number, name });
    });
    const coursesTaken = allCourses.map(course => ({
      ...course,
      ...{ taken: false }
    }));
    this.state = { coursesTaken };
  }
  toggleCourseTaken(toggleCourse) {
    const coursesTaken = this.state.coursesTaken.map(otherCourse => ({
      ...otherCourse,
      ...{ taken: otherCourse.taken || otherCourse === toggleCourse }
    }));
    this.setState(coursesTaken);
  }
  render() {
    return (
      <div id="app">
        <h1>DePaul Game Design Scheduler</h1>
        <div id="topRow">
          <Taken
            coursesTaken={this.state.coursesTaken}
            toggleCourseTaken={course => this.toggleCourseTaken(course)}
          />
        </div>
      </div>
    );
  }
}

const Taken = ({ coursesTaken, toggleCourseTaken }) => {
  return (
    <div className="checklist" style={{ gridColumnStart: 1 }}>
      <h2>Courses taken</h2>
      <p>Check each course that you have previously taken.</p>
      <ul>
        {coursesTaken.map(course => (
          <li key={course.name}>
            <input
              type="checkbox"
              id={name}
              checked={course.taken}
              onChange={() => toggleCourseTaken(course)}
            />
            <label htmlFor={course.name}>
              {course.program}: {course.name}
            </label>
          </li>
        ))}
      </ul>
    </div>
  );
};

ReactDOM.render(<App />, document.querySelector("#main"));
