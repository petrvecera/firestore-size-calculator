import { h } from "preact";
import { useState, useCallback } from "preact/hooks";

import CodeMirror from "@uiw/react-codemirror";
import { javascript } from "@codemirror/lang-javascript";
import DisplaySize from "../../components/display-size";
import NameCalculator from "../../components/name-calculator";

const Home = () => {
  const [code, setCode] = useState(null);

  const onChange = useCallback((value, viewUpdate) => {
    setCode(null);
    setCode(eval(`(${value})`));
  }, []);

  return (
    <div style={{ padding: 10, maxWidth: 1800, margin: "auto" }}>
      <div style={{ textAlign: "center" }}>
        <h1>Firestore Document Size Calculator</h1>
        <h3>Calculates the size of your document in the Firestore DB.</h3>
      </div>
      <div style={{ height: 250 }}>
        <NameCalculator />
      </div>
      <div style={{ height: "50vh" }}>
        <div
          style={{
            width: "50%",
            float: "left",
            height: "90%",
            display: "block",
            paddingRight: 20,
          }}
        >
          <h3>Firestore Document body size</h3>
          <div>Paste your document</div>
          <CodeMirror value="" height="350px" extensions={[javascript()]} onChange={onChange} />
        </div>
        <div style={{ width: "50%", float: "right", paddingLeft: 20 }}>
          <div style={{ textAlign: "center" }}>
            <h2>The size of the document body would be approximately</h2>
            <h1>
              <DisplaySize code={code} />
            </h1>
          </div>
          <div>
            <h2>How it works</h2>
            <ul>
              <li>Array - The sum of the sizes of its values</li>
              <li>Boolean - 1 byte</li>
              <li>Bytes - Byte length</li>
              <li>Date and time - 8 bytes</li>
              <li>Floating-point number - 8 bytes</li>
              <li>Geographical point - 16 bytes</li>
              <li>Integer - 8 bytes</li>
              <li>Map - The size of the map, calculated the same way as document size</li>
              <li>Null - 1 byte</li>
              <li>Reference - The document name size</li>
              <li>Text string - Number of UTF-8 encoded bytes + 1</li>
            </ul>
            More info how it's calculated can be found in{" "}
            <a
              href={"https://firebase.google.com/docs/firestore/storage-size#document-name-size"}
              target={"_blank"}
            >
              Firestore docs
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
