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
      {allCourses.map(({ program, number, name }) => (
        <p>{name}</p>
      ))}
    </div>
  );
};

ReactDOM.render(<App />, document.querySelector("#app"));
