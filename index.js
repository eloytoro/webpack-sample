import React, { Component } from "react";
import { render } from "react-dom";

import src from "./src";

class App extends Component {
  render() {
    return (
      <div>
        {src}
      </div>
    );
  }
}

render(<App />, document.getElementById("root"));
