import React from "react";

import "./App.css";
import Unity, { UnityContent } from "react-unity-webgl";

class App extends React.Component {
  constructor(props) {
    super(props);
    // window.alert = function () {};
    this.unityContent = new UnityContent(
      "UnitySample/OutWebGL.json",
      "UnitySample/UnityLoader.js"
    );
    this.state = {
      value: 0,
    };
    this.unityContent.on("ShowMessage", (message) => {
      // Now we can use the score to for example
      // display it on our React app.

      this.setState({ value: message });
    });
  }
  componentDidMount() {
    // setTimeout(() => {
    //   this.unityContent.send("Main Camera", "ctrl", "1");
    // }, 20000);
  }
  onClick() {
    // this function sends a message to a game object
    // named "SpawnController" to the public method
    // "SpawnEnemies" with a value of "10".

    this.unityContent.send("Main Camera", "ctrl", "1");
  }
  render() {
    return (
      <div style={{ width: window.innerWidth, height: window.innerHeight }}>
        <button onClick={this.onClick.bind(this)}>Hello</button>
        {/* <h5>unity value: {this.state.value}</h5> */}
        <Unity unityContent={this.unityContent} />
      </div>
    );
  }
}

export default App;
