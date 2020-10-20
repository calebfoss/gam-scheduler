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
      ...{
        taken:
          otherCourse === toggleCourse ? !otherCourse.taken : otherCourse.taken
      }
    }));
    this.setState({ coursesTaken });
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
          <Requirements coursesTaken={this.state.coursesTaken} />
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

const Requirements = ({ coursesTaken }) => {
  return (
    <div className="checklist" style={{ gridColumnStart: 2 }}>
      <h2>Available Major Requirements</h2>
      <p>Check each course that you would like to take.</p>
      <ul>
        {winterCourses
          .filter(
            course =>
              course.required &&
              coursesTaken.every(
                takenCourse =>
                  !takenCourse.taken ||
                  takenCourse.program !== course.program ||
                  takenCourse.number !== course.number
              )
          )
          .map(course => (
            <li key={course.name + course.section}>
              <input type="checkbox" id={name} />
              <label htmlFor={course.name}>
                {course.program}: {course.name}
              </label>
              <br />
            {course.days.length ? {`${course.days.join("")} ${course.startTime[0] % 12}: ${course.startTime[1].toString().padStart(2, 0)}`} : "Async"}
            </li>
          ))}
      </ul>
    </div>
  );
};

ReactDOM.render(<App />, document.querySelector("#main"));
