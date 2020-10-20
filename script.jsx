/* globals React, ReactDOM, courses */

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { coursesTaken: [] };
  }
  render() {
    return (
      <div id="app">
        <h1>DePaul Game Design Scheduler</h1>
        <div id="topRow">
          <Taken/>
          <Taken/>
        </div>
      </div>
    );
  }
}

const Taken = props => {
  const allCourses = [];
  courses.forEach(({ program, number, name, reReqs }) => {
    if (!allCourses.some(({ name: otherName }) => name === otherName))
      allCourses.push({ program, number, name });
  });
  return (
    <div className="checklist" style={{gridColumnStart: 1}}>
      <h2>Courses taken</h2>
      <p>Check each course that you have previously taken.</p>
      <ul>
        {allCourses.map(({ program, number, name }) => (
          <li key={name}>
            <input type="checkbox" id={name} />
            <label htmlFor={name}>
              {program}: {name}
            </label>
          </li>
        ))}
      </ul>
    </div>
  );
};

ReactDOM.render(<App />, document.querySelector("#main"));
