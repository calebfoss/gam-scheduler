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
    console.log(this.state.scheduledCourses);
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
        <h1 style={{ gridColumnEnd: 3 }}>DePaul Game Design Scheduler</h1>
        <Previous
          previousCourses={this.state.previousCourses}
          toggleCourseTaken={course => this.toggleCourseTaken(course)}
        />
        <Requirements
          requiredCourses={availableCourses.filter(({ required }) => required)}
          scheduledCourses={this.state.scheduledCourses}
          addCourseScheduled={course => this.addCourseScheduled(course)}
        />
        <Electives
          electives={availableCourses.filter(({ required }) => !required)}
          scheduledCourses={this.state.scheduledCourses}
          addCourseScheduled={course => this.addCourseScheduled(course)}
        />
        <Schedule scheduledCourses={this.state.scheduledCourses} removeCourseScheduled={course/>
      </div>
    );
  }
}

const Previous = ({ previousCourses, toggleCourseTaken }) => {
  return (
    <div className="checklist" style={{ gridColumnStart: 1 }}>
      <div>
        <h2>Courses taken</h2>
        <p>Check each course that you have previously taken.</p>
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

const Requirements = ({
  requiredCourses,
  scheduledCourses,
  toggleCourseScheduled
}) => {
  console.log(scheduledCourses);
  return (
    <div className="checklist" style={{ gridColumnStart: 2 }}>
      <div>
        <h2>Major Requirements</h2>
        <p>Check a course to add it to your schedule.</p>
      </div>
      <ul>
        {requiredCourses.map(course => (
          <li key={course.name + course.section}>
            <input
              type="checkbox"
              id={`${course.name}_${course.section}_requirement`}
              checked={scheduledCourses.includes(course)}
              onChange={() => toggleCourseScheduled(course)}
            />
            <label htmlFor={`${course.name}_${course.section}_requirement`}>
              {course.program} {course.number}: {course.name}
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
            </label>
          </li>
        ))}
      </ul>
    </div>
  );
};

const Electives = ({ electives, scheduledCourses, toggleCourseScheduled }) => {
  return (
    <div className="checklist" style={{ gridColumnStart: 3 }}>
      <div>
        <h2>Electives</h2>
        <p>Check a course to add it to your schedule.</p>
      </div>
      <ul>
        {electives.map(course => (
          <li key={course.name + course.section}>
            <input
              type="checkbox"
              id={`${course.name}_${course.section}_elective`}
              checked={scheduledCourses.includes(course)}
              onChange={() => toggleCourseScheduled(course)}
            />
            <label htmlFor={`${course.name}_${course.section}_elective`}>
              {course.program} {course.number}: {course.name}
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
            </label>
          </li>
        ))}
      </ul>
    </div>
  );
};

const Schedule = ({ scheduledCourses }) => {
  const courseToDiv = (day, course) => {
    const startTimePercent =
      (course.startTime[0] + course.startTime[1] * (1 / 60) - 10) * (100 / 11);
    const endTimePercent =
      (course.endTime[0] + course.endTime[1] * (1 / 60) - 10) * (100 / 11);
    console.log(startTimePercent, endTimePercent);
    return (
      <div
        key={`${course.name}_${day}`}
        style={{
          position: "relative",
          border: "2px solid black",
          top: startTimePercent + "%",
          height: endTimePercent - startTimePercent + "%"
        }}
      >
        {course.program} {course.number}: {course.name}
      </div>
    );
  };
  return (
    <div id="schedule">
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
            .filter(course => course.days.includes("M"))
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
    </div>
  );
};

ReactDOM.render(<App />, document.querySelector("#main"));
