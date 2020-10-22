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
    const previousCourses = allCourses.map(course => ({
      ...course,
      ...{ taken: false }
    }));
    this.state = { previousCourses, scheduledCourses: [] };
  }
  toggleCourseTaken(toggleCourse) {
    const previousCourses = this.state.previousCourses.map(otherCourse => ({
      ...otherCourse,
      ...{
        taken:
          otherCourse === toggleCourse ? !otherCourse.taken : otherCourse.taken
      }
    }));
    this.setState({ previousCourses });
  }
  addCourseScheduled(course) {
    this.setState({
      scheduledCourses: this.state.scheduledCourses.concat(course)
    });
  }
  removeCourseScheduled(course) {
    this.setState({
      scheduledCourses: this.state.scheduledCourses.filter(
        otherCourse => course !== otherCourse
      )
    });
  }
  checkPrereqs(prereqs) {
    const { previousCourses } = this.state;
    if (!Array.isArray(prereqs))
      return previousCourses.some(
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
        this.state.previousCourses.every(
          previousCourse =>
            !previousCourse.taken ||
            previousCourse.program !== course.program ||
            previousCourse.number !== course.number
        ) &&
        this.checkPrereqs(course.prereqs) &&
        !this.state.scheduledCourses.some(
          scheduledCourse =>
            (course.program === scheduledCourse.program &&
              course.number === scheduledCourse.number) ||
            course.days.some(
              day =>
                scheduledCourse.days.some(schDay => schDay === day) &&
                (course.startTime[0] + course.startTime[1] * (1 / 60) <
                  scheduledCourse.endTime[0] +
                    scheduledCourse.endTime[1] * (1 / 60) &&
                  course.endTime[0] + course.endTime[1] * (1 / 60) >
                    scheduledCourse.startTime[0] +
                      scheduledCourse.startTime[1] * (1 / 60))
            )
        )
    );
    return (
      <div id="app">
        <h1 style={{ gridColumnStart: 1, gridColumnEnd: 4 }}>DePaul Game Design Scheduler</h1>
        <Previous
          previousCourses={this.state.previousCourses}
          toggleCourseTaken={course => this.toggleCourseTaken(course)}
        />
        <CourseOptions
          title="Major Requirements"
          courses={availableCourses.filter(({ required }) => required)}
          scheduledCourses={this.state.scheduledCourses}
          addCourseScheduled={course => this.addCourseScheduled(course)}
        />
        <CourseOptions
          title="Electives"
          courses={availableCourses.filter(({ required }) => !required)}
          scheduledCourses={this.state.scheduledCourses}
          addCourseScheduled={course => this.addCourseScheduled(course)}
        />
        <Schedule
          scheduledCourses={this.state.scheduledCourses}
          removeCourseScheduled={course => this.removeCourseScheduled(course)}
        />
      </div>
    );
  }
}

const Previous = ({ previousCourses, toggleCourseTaken }) => {
  return (
    <div className="checklist" style={{ gridColumnStart: 1 }}>
      <div>
        <h2>Courses taken</h2>
      </div>
      <ul>
        {previousCourses.map(course => (
          <li key={course.name}>
            <input
              type="checkbox"
              id={`${course.name}_previous`}
              checked={course.taken}
              onChange={() => toggleCourseTaken(course)}
            />
            <label htmlFor={`${course.name}_previous`}>
              {course.program} {course.number}: {course.name}
            </label>
          </li>
        ))}
      </ul>
    </div>
  );
};

const CourseOptions = ({
  title,
  courses,
  scheduledCourses,
  addCourseScheduled
}) => {
  return (
    <div className="checklist">
      <div>
        <h2>{title}</h2>
      </div>
      <ul>
        {courses.map(course => (
          <li key={course.name + course.section}>
            {course.program} {course.number}: {course.name}<button
              onClick={() => addCourseScheduled(course)}
              className="addButton"
            >
              +
            </button>
            <div className="classInfo">
              {course.days.length
                ? `${course.days.join("")} ${course.startTime[0] %
                    12}:${course.startTime[1].toString().padStart(2, 0)}${
                    course.startTime[0] < 12 ? "AM" : "PM"
                  } - ${course.endTime[0] %
                    12}:${course.endTime[1].toString().padStart(2, 0)} ${
                    course.endTime[0] < 12 ? "AM" : "PM"
                  }`
                : "Async"}
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

const Schedule = ({ scheduledCourses, removeCourseScheduled }) => {
  console.log(scheduledCourses);
  const courseToDiv = (day, course) => {
    const startTimePercent =
      (course.startTime[0] + course.startTime[1] * (1 / 60) - 10) * (100 / 11);
    const endTimePercent =
      (course.endTime[0] + course.endTime[1] * (1 / 60) - 10) * (100 / 11);
    return (
      <div
        key={`${course.name}_${day}`}
        className="scheduledCourse"
        style={
          course.days.length
            ? {
                top: startTimePercent + "%",
                height: endTimePercent - startTimePercent + "%",
                backgroundColor: `hsla(${scheduledCourses.indexOf(course) *
                  36},75%,80%,0.25)`
              }
            : {
                backgroundColor: `hsla(${scheduledCourses.indexOf(course) *
                  36},75%,80%,0.25)`
              }
        }
      >
        <div className="courseName">
          {course.program} {course.number}: {course.name}
        </div>
        <button
          className="removeButton"
          onClick={() => removeCourseScheduled(course)}
        >
          X
        </button>
      </div>
    );
  };
  return (
    <div id="schedule">
      <div className="guide">
        <div></div>
        {new Array(11).fill(0).map((_, i) => (
          <div key={`hour_${i + 10}`} style={{ textAlign: "right" }}>
            {((i + 9) % 12) + 1} {i < 2 ? "AM" : "PM"}
          </div>
        ))}
      </div>
      <div id="Monday" className="day">
        <h2>Monday</h2>
        <div className="dayCourses">
          {scheduledCourses
            .filter(course => course.days.includes("M"))
            .map(course => courseToDiv("Monday", course))}
        </div>
      </div>
      <div id="Tuesday" className="day">
        <h2>Tuesday</h2>
        <div className="dayCourses">
          {scheduledCourses
            .filter(course => course.days.includes("Tu"))
            .map(course => courseToDiv("Tuesday", course))}
        </div>
      </div>
      <div id="Wednesday" className="day">
        <h2>Wednesday</h2>
        <div className="dayCourses">
          {scheduledCourses
            .filter(course => course.days.includes("W"))
            .map(course => courseToDiv("Wednesday", course))}
        </div>
      </div>
      <div id="Thursday" className="day">
        <h2>Thursday</h2>
        <div className="dayCourses">
          {scheduledCourses
            .filter(course => course.days.includes("Th"))
            .map(course => courseToDiv("Thursday", course))}
        </div>
      </div>
      <div id="Async" className="day">
        <h2>Async</h2>
        <div className="dayCourses">
          {scheduledCourses
            .filter(course => course.days.length === 0)
            .map(course => courseToDiv("Async", course))}
        </div>
      </div>
    </div>
  );
};

ReactDOM.render(<App />, document.querySelector("#main"));
