/* globals React, ReactDOM, winterCourses */

class App extends React.Component {
  constructor(props) {
    super(props);
    const allCourses = [];
    const addPrereqs = p => {
      if (Array.isArray(p)) p.slice(1).forEach(sp => addPrereqs(sp));
      else if (
        !allCourses.some(({ name: otherName }) => p.name === otherName)
      ) {
        const { program, number, name } = p;
        allCourses.push({ program, number, name });
      }
    };
    winterCourses.forEach(({ program, number, name, prereqs }) => {
      if (!allCourses.some(({ name: otherName }) => name === otherName))
        allCourses.push({ program, number, name });
      addPrereqs(prereqs);
    });
    allCourses.sort((a, b) => a.number - b.number);
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
  checkPrereqs(prereqs) {
    const { coursesTaken } = this.state;
    if (!Array.isArray(prereqs))
      return coursesTaken.some(
        course => course.taken && course.name === prereqs.name
      );
    else if (prereqs.length === 0) {
      return true;
    } else if (prereqs[0] === "AND")
      return prereqs.slice(1).every(prereq => this.checkPrereqs(prereq));
    else if (prereqs[0] === "OR")
      return prereqs.slice(1).some(prereq => this.checkPrereqs(prereq));
  }
  render() {
    const availableCourses = winterCourses.filter(
      course =>
        this.state.coursesTaken.every(
          takenCourse =>
            !takenCourse.taken ||
            takenCourse.program !== course.program ||
            takenCourse.number !== course.number
        ) && this.checkPrereqs(course.prereqs)
    );
    return (
      <div id="app">
        <h1>DePaul Game Design Scheduler</h1>
        <Taken
          coursesTaken={this.state.coursesTaken}
          toggleCourseTaken={course => this.toggleCourseTaken(course)}
        />
        <Requirements
          requiredCourses={availableCourses.filter(({ required }) => required)}
        />
        <Electives
          electives={availableCourses.filter(({ required }) => !required)}
        />
      </div>
    );
  }
}

const Taken = ({ coursesTaken, toggleCourseTaken }) => {
  return (
    <div className="checklist" style={{ gridColumnStart: 1 }}>
      <div>
        <h2>Courses taken</h2>
        <p>Check each course that you have previously taken.</p>
      </div>
      <ul>
        {coursesTaken.map(course => (
          <li key={course.name}>
            <input
              type="checkbox"
              id={course.name}
              checked={course.taken}
              onChange={() => toggleCourseTaken(course)}
            />
            <label htmlFor={course.name}>
              {course.program} {course.number}: {course.name}
            </label>
          </li>
        ))}
      </ul>
    </div>
  );
};

const Requirements = ({ requiredCourses }) => {
  return (
    <div className="checklist" style={{ gridColumnStart: 2 }}>
      <div>
        <h2>Available Major Requirements</h2>
        <p>Check each course that you would like to take.</p>
      </div>
      <ul>
        {requiredCourses.map(course => (
          <li key={course.name + course.section}>
            <input type="checkbox" id={course.name} />
            <label htmlFor={course.name}>
              {course.program} {course.number}: {course.name}
            </label>
            <br />
            <span style={{ paddingLeft: "20px" }}>
              {course.days.length
                ? `${course.days.join("")} ${course.startTime[0] %
                    12}:${course.startTime[1].toString().padStart(2, 0)}${
                    course.startTime[0] < 12 ? "AM" : "PM"
                  } - ${course.endTime[0] %
                    12}:${course.endTime[1].toString().padStart(2, 0)} ${
                    course.endTime[0] < 12 ? "AM" : "PM"
                  }`
                : "Async"}
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
};

const Electives = ({ electives }) => {
  return (
    <div className="checklist" style={{ gridColumnStart: 3 }}>
      <div><h2>Available GAM Electives</h2>
        <p>Check each course that you would like to take.</p>
      </div>
      <ul>
        {electives.map(course => (
          <li key={course.name + course.section}>
            <input type="checkbox" id={course.name} />
            <label htmlFor={course.name}>
              {course.program} {course.number}: {course.name}
            </label>
            <br />
            <span style={{ paddingLeft: "20px" }}>
              {course.days.length
                ? `${course.days.join("")} ${course.startTime[0] %
                    12}:${course.startTime[1].toString().padStart(2, 0)}${
                    course.startTime[0] < 12 ? "AM" : "PM"
                  } - ${course.endTime[0] %
                    12}:${course.endTime[1].toString().padStart(2, 0)} ${
                    course.endTime[0] < 12 ? "AM" : "PM"
                  }`
                : "Async"}
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
};

ReactDOM.render(<App />, document.querySelector("#main"));
