/* globals React, ReactDOM */

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { coursesTaken: [] };
  }
  render {
    <h1>DePaul Game Design Scheduler</h1>
  }
}

const Taken = props => {};

ReactDOM.render(<App />, document.querySelector("#app"));
