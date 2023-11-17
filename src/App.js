import TotalCards from "./components/TotalCards";
import Data from "./components/Data";
import React, { Component } from 'react';
import HoverInfo from "./components/CardHover";


const handleFilterByAge = () => {
  // Filter by age functionality should be added here
};
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isHovered: false
    };
  }
  handleMouseOver = () => {
    this.setState({ isHovered: true });
  }
  handleMouseOut = () => {
    this.setState({ isHovered: false });
  }
  render() {
    const { isHovered } = this.state;
    return (
      <div>
        <div className="app">
          <header>
            <h1>Employee List</h1>
            <div>
              <label htmlFor="minAge">Min Age:</label>
              <input type="number" id="minAge" min="18" max="100" />
              <label htmlFor="maxAge">Max Age:</label>
              <input type="number" id="maxAge" min="18" max="100" />
              <button onClick={handleFilterByAge}>Filter</button>
            </div>
          </header>
        </div>
        <div
          onMouseOver={this.handleMouseOver}
          onMouseOut={this.handleMouseOut}
        >
          {isHovered ?
            <div className="employees-container"> <HoverInfo data={Data()}></HoverInfo></div>
            :
            <div className="employees-container"><TotalCards data={Data()}></TotalCards></div>}
        </div>
      </div>
    );
  }
}
export default App;