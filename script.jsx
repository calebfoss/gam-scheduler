/* globals React, ReactDOM, autumnCourses */

//  UPDATE TERM DATA HERE
const courses = winter2022;

class App extends React.Component {
  constructor(props) {
    super(props);
    const previousCourses = courses.reduce(
      (previousCourses, { Subject, Catalog, CourseTitleTopic }) => {
        const coursesToAdd = [
          {
            Subject,
            Catalog,
            CourseTitleTopic,
            taken: false,
          },
        ];
        if (prereqs[Subject]) {
          const preStr = prereqs[Subject][Catalog];
          if (preStr) {
            const preSplit = preStr.match(/[A-Z]{3} \d{3}/g);
            if (preSplit) {
              const preCourses = preSplit.map((pre) => {
                const [preSubject, preCatalog] = pre.split(" ");
                const preMatch = courses.find(
                  (c) => c.Subject === preSubject && c.Catalog === preCatalog
                );
                const preTitleTopic = preMatch
                  ? preMatch.CourseTitleTopic
                  : undefined;
                return {
                  Subject: preSubject,
                  Catalog: preCatalog,
                  CourseTitleTopic: preTitleTopic,
                  taken: false,
                };
              });
              coursesToAdd.push(...preCourses);
            }
          }
        }
        coursesToAdd.forEach((course) => {
          const matchCourseIdx = previousCourses.findIndex(
            (otherCourse) =>
              otherCourse.Subject === course.Subject &&
              otherCourse.Catalog === course.Catalog
          );
          if (matchCourseIdx > -1) {
            if (
              course.CourseTitleTopic &&
              !previousCourses[matchCourseIdx].CourseTitleTopic
            ) {
              previousCourses[matchCourseIdx].CourseTitleTopic =
                course.CourseTitleTopic;
            }
          } else {
            previousCourses.push(course);
          }
        });
        return previousCourses;
      },
      []
    );
    courses.sort((a, b) => a.Catalog - b.Catalog);
    const defaultProgram = Object.keys(majorRequirements)[0];
    this.state = {
      previousCourses,
      scheduledCourses: [],
      program: defaultProgram,
      year: Object.keys(majorRequirements[defaultProgram]).slice(-1)[0],
    };
  }
  toggleCourseTaken(toggleCourse) {
    const previousCourses = this.state.previousCourses.map((otherCourse) => ({
      ...otherCourse,
      ...{
        taken:
          otherCourse === toggleCourse ? !otherCourse.taken : otherCourse.taken,
      },
    }));
    this.setState({ previousCourses });
  }
  addCourseScheduled(course) {
    this.setState({
      scheduledCourses: this.state.scheduledCourses.concat(course),
    });
  }
  removeCourseScheduled(course) {
    this.setState({
      scheduledCourses: this.state.scheduledCourses.filter(
        (otherCourse) => course !== otherCourse
      ),
    });
  }
  checkPrereqs(str) {
    if (!str) return true;
    //  Check parenthetical first
    //  Regex from https://stackoverflow.com/questions/546433/regular-expression-to-match-balanced-parentheses
    const paren = str.match(/\((?:[^)(]+|\((?:[^)(]+|\([^)(]*\))*\))*\)/g);

    if (paren)
      paren.forEach((p) => {
        if (!this.checkPrereqs(p.slice(1, -1))) return false;
      });
    const { previousCourses } = this.state;
    //  Split into requirements plus "or", "and", "&"
    const strSplit = str
      .replaceAll(/\(.*\)/g, "")
      .split(/((?: or | and | &amp; ))/g);
    let i = 0;
    let fulfilled = true;
    const courseTaken = (str) => {
      const [Subject, Catalog] = str.split(" ");
      return previousCourses.some(
        (course) =>
          course.taken &&
          course.Subject === Subject &&
          course.Catalog === Catalog
      );
    };
    while (i < strSplit.length) {
      const el = strSplit[i];
      if (el === " or ") {
        if (courseTaken(strSplit[++i])) return true;
      } else if (el === " and " || el === " &amp; ") {
        fulfilled = courseTaken(strSplit[++i]);
      } else {
        fulfilled = courseTaken(el);
        i++;
      }
    }
    return fulfilled;
  }
  getStartEndTimes(course) {
    const times = course.DaysTimes.match(/\d\d\d\d/g);
    if (!times) return null;
    const [startTime, endTime] = times;
    const startHour = parseInt(startTime.slice(0, 2));
    const startMinute = parseInt(startTime.slice(2));
    const endHour = parseInt(endTime.slice(0, 2));
    const endMinute = parseInt(endTime.slice(2));
    return [startHour, startMinute, endHour, endMinute];
  }
  timeOverlap(courseA, courseB) {
    const { DaysTimes: aSched } = courseA;
    const { DaysTimes: bSched } = courseB;
    //  If either course is async, they don't overlap
    if (aSched.includes("OLAS") || bSched.includes("OLAS")) return false;
    const aDays = aSched.match(/M|Tu|W|Th|F/gi);
    const bDays = bSched.match(/M|Tu|W|Th|F/gi);
    //  If we can't find the meeting days, default to no overlap
    if (!aDays || !bDays) return false;

    //  If they don't meet on the same day, they don't overlap
    if (aDays.every((aDay) => !bDays.some((bDay) => aDay === bDay)))
      return false;
    const [
      aStartHour,
      aStartMinute,
      aEndHour,
      aEndMinute,
    ] = this.getStartEndTimes(courseA);
    const aStart = aStartHour + aStartMinute / 60;
    const aEnd = aEndHour + aEndMinute / 60;
    const [
      bStartHour,
      bStartMinute,
      bEndHour,
      bEndMinute,
    ] = this.getStartEndTimes(courseB);
    const bStart = bStartHour + bStartMinute / 60;
    const bEnd = bEndHour + bEndMinute / 60;
    return aEnd > bStart && bEnd > aStart;
  }
  render() {
    const graduate = this.state.program.includes(" M");

    const availableCourses = courses.filter(
      (course) =>
        this.state.previousCourses.every(
          (previousCourse) =>
            !previousCourse.taken ||
            previousCourse.Subject !== course.Subject ||
            previousCourse.Catalog !== course.Catalog
        ) &&
        prereqs[course.Subject] &&
        this.checkPrereqs(prereqs[course.Subject][course.Catalog]) &&
        graduate != parseInt(course.Catalog) < 400 &&
        !this.state.scheduledCourses.some(
          (scheduledCourse) =>
            (course.Subject === scheduledCourse.Subject &&
              course.Catalog === scheduledCourse.Catalog) ||
            this.timeOverlap(course, scheduledCourse)
        )
    );

    const filteredPrevious = this.state.previousCourses.filter((course) => {
      const catSub = course.Subject + " " + course.Catalog;
      return (
        majorRequirements[this.state.program][this.state.year].includes(
          catSub
        ) ||
        Object.keys(prereqs).some((subject) =>
          Object.keys(prereqs[subject]).some((pre) => pre.includes(catSub))
        )
      );
    });
    const [
      availableMajorRequirements,
      availableElectives,
    ] = availableCourses.reduce(
      ([availableMajorRequirements, availableElectives], course) => {
        if (
          majorRequirements[this.state.program][this.state.year].includes(
            course.Subject + " " + course.Catalog
          )
        ) {
          return [
            availableMajorRequirements.concat(course),
            availableElectives,
          ];
        } else {
          return [
            availableMajorRequirements,
            availableElectives.concat(course),
          ];
        }
      },
      [[], []]
    );
    const subjects = this.state.previousCourses
      .reduce(
        (subjects, { Subject }) =>
          subjects.includes(Subject) ? subjects : subjects.concat(Subject),
        []
      )
      .sort();
    return (
      <div id="app">
        <div style={{ gridColumnStart: 1, gridColumnEnd: 4 }}>
          <h1>DePaul (Unofficial) Course Scheduler: Winter 2022</h1>
          <div style={{ textAlign: "center" }}>
            <label htmlFor="programSelect"> What is your degree program?</label>
            <select
              id="programSelect"
              onChange={(e) => this.setState({ program: e.target.value })}
              value={this.state.program}
            >
              {Object.keys(majorRequirements).map((program) => (
                <option value={program} key={program}>
                  {program}
                </option>
              ))}
            </select>
            <label
              htmlFor="yearSelect"
              style={{ marginLeft: "5px", marginRight: "5px" }}
            >
              What year did you start at DePaul?
            </label>
            <select
              id="yearSelect"
              onChange={(e) => this.setState({ year: e.target.value })}
              value={this.state.year}
            >
              {Object.keys(majorRequirements[this.state.program]).map(
                (year) => (
                  <option value={year} key={year}>
                    {year}
                  </option>
                )
              )}
            </select>
          </div>
        </div>
        <Previous
          previousCourses={filteredPrevious}
          toggleCourseTaken={(course) => this.toggleCourseTaken(course)}
          subjects={subjects}
        />
        <CourseOptions
          title="Major requirements"
          courses={availableMajorRequirements}
          scheduledCourses={this.state.scheduledCourses}
          addCourseScheduled={(course) => this.addCourseScheduled(course)}
        />
        <CourseOptions
          title="Electives"
          subjects={subjects}
          courses={availableElectives}
          scheduledCourses={this.state.scheduledCourses}
          addCourseScheduled={(course) => this.addCourseScheduled(course)}
        />
        <Schedule
          scheduledCourses={this.state.scheduledCourses}
          removeCourseScheduled={(course) => this.removeCourseScheduled(course)}
          getStartEndTimes={this.getStartEndTimes}
        />
      </div>
    );
  }
}

const Previous = ({ previousCourses, toggleCourseTaken, subjects }) => {
  const [subject, setSubject] = React.useState(previousCourses[0].Subject);
  return (
    <div className="checklist" style={{ gridColumnStart: 1 }}>
      <div>
        <h2>Courses you have already taken</h2>
      </div>
      <label htmlFor="previousSubject">
        Subject
        <select
          id="previousSubject"
          onChange={(e) => setSubject(e.target.value)}
        >
          {subjects.map((subject) => (
            <option key={subject}>{subject}</option>
          ))}
        </select>
      </label>
      <ul style={{ gridRowStart: 3 }}>
        {previousCourses
          .filter((course) => course.Subject === subject)
          .map((course) => (
            <li key={course.Catalog + course.CourseTitleTopic}>
              <input
                type="checkbox"
                id={`${course.CourseTitleTopic}_previous`}
                checked={course.taken}
                onChange={() => toggleCourseTaken(course)}
              />
              <label htmlFor={`${course.CourseTitleTopic}_previous`}>
                {course.Subject} {course.Catalog}: {course.CourseTitleTopic}
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
  addCourseScheduled,
  subjects,
}) => {
  const [subject, setSubject] = React.useState(subjects ? subjects[0] : null);
  return (
    <div className="checklist">
      <div>
        <h2>{title}</h2>
      </div>
      {subjects ? (
        <label htmlFor="previousSubject">
          Subject
          <select
            id="previousSubject"
            onChange={(e) => setSubject(e.target.value)}
          >
            {subjects.map((subject) => (
              <option key={subject}>{subject}</option>
            ))}
          </select>
        </label>
      ) : null}
      <ul>
        {courses
          .filter((course) => !subjects || course.Subject === subject)
          .map((course) => (
            <li key={course.Subject + course.Catalog + course.Sect}>
              <label
                htmlFor={"add" + course.Subject + course.Catalog + course.Sect}
              >
                {course.Subject} {course.Catalog}: {course.CourseTitleTopic}
              </label>
              <button
                id={"add" + course.Subject + course.Catalog + course.Sect}
                onClick={() => addCourseScheduled(course)}
                className="addButton"
              >
                +
              </button>
              <div className="classInfo">
                {course.DaysTimes.replaceAll(/\d\d\d\d/g, (t) => {
                  const hours = t.slice(0, 2);
                  const minutes = t.slice(2);
                  return `${hours % 12}:${minutes} ${hours < 12 ? "AM" : "PM"}`;
                })}
                <br />
                {course.Campus + " " + course.Location}
                <br />
                <a
                  href={`https://www.cdm.depaul.edu/academics/pages/courseinfo.aspx?Subject=${course.Subject}&CatalogNbr=${course.Catalog}`}
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

const Schedule = ({
  scheduledCourses,
  removeCourseScheduled,
  getStartEndTimes,
}) => {
  const courseToDiv = (day, course) => {
    const style = {
      backgroundColor: `hsla(${
        scheduledCourses.indexOf(course) * 36
      },75%,95%,0.85)`,
    };
    const times = getStartEndTimes(course);
    if (times) {
      const [startHour, startMinute, endHour, endMinute] = times;
      const startTimePercent = (startHour - 10 + startMinute / 60) * (100 / 11);
      const endTimePercent = (endHour - 10 + endMinute / 60) * (100 / 11);
      style.position = "absolute";
      style.top = startTimePercent + "%";
      style.height = endTimePercent - startTimePercent + "%";
    }

    return (
      <div
        key={`${course.CourseTitleTopic}_${day}`}
        className="scheduledCourse"
        style={style}
      >
        <div className="courseName">
          {course.Subject} {course.Catalog}: {course.CourseTitleTopic}
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
            .filter((course) => course.DaysTimes.includes("M"))
            .map((course) => courseToDiv("Monday", course))}
        </div>
      </div>
      <div id="Tuesday" className="day">
        <h2>Tuesday</h2>
        <div className="dayCourses">
          {lines}
          {scheduledCourses
            .filter(
              (course) =>
                course.DaysTimes.includes("TU") ||
                course.DaysTimes.includes("TTH")
            )
            .map((course) => courseToDiv("Tuesday", course))}
        </div>
      </div>
      <div id="Wednesday" className="day">
        <h2>Wednesday</h2>
        <div className="dayCourses">
          {lines}
          {scheduledCourses
            .filter((course) => course.DaysTimes.includes("W"))
            .map((course) => courseToDiv("Wednesday", course))}
        </div>
      </div>
      <div id="Thursday" className="day">
        <h2>Thursday</h2>
        <div className="dayCourses">
          {lines}
          {scheduledCourses
            .filter((course) => course.DaysTimes.includes("TH"))
            .map((course) => courseToDiv("Thursday", course))}
        </div>
      </div>
      <div id="Async" className="day">
        <h2>Async</h2>
        <div className="dayCourses">
          {scheduledCourses
            .filter((course) => course.DaysTimes.includes("OLAS"))
            .map((course) => courseToDiv("Async", course))}
        </div>
      </div>
    </div>
  );
};

ReactDOM.render(<App />, document.querySelector("#main"));
