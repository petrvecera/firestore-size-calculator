import { h } from "preact";
import { Router } from "preact-router";

// Code-splitting is automated for `routes` directory
import Home from "../routes/home";

const App = () => (
  <div id="app">
    <Router>
      <Home path="/" />
    </Router>
    <footer
      style={{
        width: "100%",
        textAlign: "center",
        position: "absolut",
        bottom: 0,
      }}
    >
      <h3>
        Based on{" "}
        <a href={"https://www.npmjs.com/package/firestore-size"} target={"_blank"}>
          {" "}
          firestore-size
        </a>{" "}
        package
      </h3>
    </footer>
  </div>
);

export default App;
