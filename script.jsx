/* globals React, ReactDOM, springCourses */

class App extends React.Component {
  constructor(props) {
    super(props);
    const allCourses = [];
    const addPrereqs = p => {
      console.log(p);
      if (Array.isArray(p)) p.slice(1).forEach(sp => addPrereqs(sp));
      else if (
        !allCourses.some(({ name: otherName }) => p.name === otherName)
      ) {
        const { program, number, name } = p;
        allCourses.push({ program, number, name });
      }
    };
    springCourses.forEach(({ program, number, name, prereqs }) => {
      if (!allCourses.some(({ name: otherName }) => name === otherName))
        allCourses.push({ program, number, name });
      addPrereqs(prereqs);
    });
    allCourses.sort((a, b) => a.number - b.number);
    const previousCourses = allCourses.map(course => ({
      ...course,
      ...{ taken: false }
    }));
    this.state = { previousCourses, scheduledCourses: [], year: "2021" };
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
    const availableCourses = springCourses.filter(
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
        <div style={{ gridColumnStart: 1, gridColumnEnd: 4 }}>
          <h1>DePaul Game Design Scheduler: Spring 2021</h1>
          <div style={{ textAlign: "center" }}>
            <label
              htmlFor="yearSelect"
              style={{ marginLeft: "5px", marginRight: "5px" }}
            >
              What year did you start at DePaul?
            </label>
            <select
              id="yearSelect"
              onChange={e => this.setState({ year: e.target.value })}
              value={this.state.year}
            >
              <option value="2021">2020/21</option>
              <option value="1920">2019/20</option>
              <option value="1819">2018/19</option>
              <option value="1718">2017/18</option>
              <option value="1617">2016/17</option>
            </select>
          </div>
        </div>

        <Previous
          previousCourses={this.state.previousCourses}
          toggleCourseTaken={course => this.toggleCourseTaken(course)}
        />
        <CourseOptions
          title="Major requirements"
          courses={availableCourses.filter(
            ({ required }) => required[this.state.year]
          )}
          scheduledCourses={this.state.scheduledCourses}
          addCourseScheduled={course => this.addCourseScheduled(course)}
        />
        <CourseOptions
          title="Electives"
          courses={availableCourses.filter(
            ({ required }) => !required[this.state.year]
          )}
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
        <h2>Courses you have already taken</h2>
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
            <label
              htmlFor={"add" + course.program + course.number + course.section}
            >
              {course.program} {course.number}: {course.name}
            </label>
            <button
              id={"add" + course.program + course.number + course.section}
              onClick={() => addCourseScheduled(course)}
              className="addButton"
            >
              +
            </button>
            <div className="classInfo">
              {course.days.length
                ? `${course.days.join("")} ${
                    course.startTime[0] === 12 ? 12 : course.startTime[0] % 12
                  }:${course.startTime[1].toString().padStart(2, 0)}${
                    course.startTime[0] < 12 ? "AM" : "PM"
                  } - ${
                    course.endTime[0] === 12 ? 12 : course.endTime[0] % 12
                  }:${course.endTime[1].toString().padStart(2, 0)} ${
                    course.endTime[0] < 12 ? "AM" : "PM"
                  }`
                : "Async"}
              <br />
              <a
                href={`https://www.cdm.depaul.edu/academics/pages/courseinfo.aspx?Subject=${course.program}&CatalogNbr=${course.number}`}
                target="_"
              >
                More info
              </a>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

const Schedule = ({ scheduledCourses, removeCourseScheduled }) => {
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
                position: "absolute",
                top: startTimePercent + "%",
                height: endTimePercent - startTimePercent + "%",
                backgroundColor: `hsla(${scheduledCourses.indexOf(course) *
                  36},75%,95%,0.85)`
              }
            : {
                backgroundColor: `hsla(${scheduledCourses.indexOf(course) *
                  36},75%,95%,0.85)`
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
  const lines = new Array(11)
    .fill(0)
    .map((_, i) => (
      <hr
        className="timeLine"
        key={"hr_" + i}
        style={{ top: i * (100 / 11) + "%" }}
      />
    ));
  return (
    <div id="schedule">
      <div className="guide">
        {new Array(11).fill(0).map((_, i) => (
          <div
            key={`hour_${i + 10}`}
            className="time"
            style={{ top: 15 + i * (85 / 11) + "%" }}
          >
            {((i + 9) % 12) + 1} {i < 2 ? "AM" : "PM"}
          </div>
        ))}
        <div className="time" />
      </div>
      <div id="Monday" className="day">
        <h2>Monday</h2>
        <div className="dayCourses">
          {lines}
          {scheduledCourses
            .filter(course => course.days.includes("M"))
            .map(course => courseToDiv("Monday", course))}
        </div>
      </div>
      <div id="Tuesday" className="day">
        <h2>Tuesday</h2>
        <div className="dayCourses">
          {lines}
          {scheduledCourses
            .filter(course => course.days.includes("Tu"))
            .map(course => courseToDiv("Tuesday", course))}
        </div>
      </div>
      <div id="Wednesday" className="day">
        <h2>Wednesday</h2>
        <div className="dayCourses">
          {lines}
          {scheduledCourses
            .filter(course => course.days.includes("W"))
            .map(course => courseToDiv("Wednesday", course))}
        </div>
      </div>
      <div id="Thursday" className="day">
        <h2>Thursday</h2>
        <div className="dayCourses">
          {lines}
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
