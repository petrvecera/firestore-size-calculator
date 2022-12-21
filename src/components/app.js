import {h} from "preact";
import {Router} from "preact-router";
import GitHubForkRibbon from 'react-github-fork-ribbon';


// Code-splitting is automated for `routes` directory
import Home from "../routes/home";

const App = () => (
  <div id="app">
    <Router>
      <Home path="/"/>
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
    <GitHubForkRibbon href="https://github.com/petrvecera/firestore-size-calculator"
                      target="_blank"
                      position="right">
      Fork me on GitHub
    </GitHubForkRibbon>
  </div>
);

export default App;
