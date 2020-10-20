/* globals React, ReactDOM, courses */

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { coursesTaken: [] };
  }
  render() {
    return (
      <div>
        <h1>DePaul Game Design Scheduler</h1>
        <Taken />
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
    <div>
      
    <ul>
      {allCourses.map(({ program, number, name }) => (
        <li key={name}>
          <input type="checkbox" value={name} />
          <label htmlFor={name}>
            {program}: {name}
          </label>
        </li>
      ))}
    </ul></div>
  );
};

ReactDOM.render(<App />, document.querySelector("#app"));
