import bytes from "bytes";
import CodeMirror from "@uiw/react-codemirror";
import { useCallback, useState } from "preact/hooks";
import { lengthOfString } from "../helper";

const ElementDisplay = ({ elements }) => {
  if (!elements || elements.length === 0) return <></>;

  const modifiedElements = elements.map((element) => {
    return (
      <div key={element.element}>
        +{bytes(element.sizeInBytes, {})} {element.element}
      </div>
    );
  });

  return (
    <div style={{ padding: 10 }}>
      {modifiedElements}
      <div>+16B Default Firestore Doc size</div>
    </div>
  );
};

const NameCalculator = () => {
  const [allElements, setAllElements] = useState(null);
  const [totalSize, setTotalSize] = useState(0);

  const onChange = useCallback((value, viewUpdate) => {
    const eachElementArray = `${value}`.split("/");
    let totalSize = 16; // we start with 16 which is default size

    setAllElements(
      eachElementArray
        .filter((el) => el.length !== 0)
        .map((element) => {
          const size = lengthOfString(element);
          totalSize += size;
          return {
            element,
            sizeInBytes: size,
          };
        }),
    );

    setTotalSize(totalSize);
  }, []);

  return (
    <>
      <div
        style={{ width: "50%", float: "left", height: "200", display: "block", paddingRight: 20 }}
      >
        <h3>Firestore Document name size</h3>
        Write the name of your document in format users/jeff/tasks/my_task_id
        <CodeMirror
          value=""
          // height="600px"
          extensions={[]}
          onChange={onChange}
        />
        <div>
          <ElementDisplay elements={allElements} />
        </div>
      </div>
      <div
        style={{
          width: "50%",
          float: "right",
          height: "200",
          paddingLeft: 20,
          paddingTop: 40,
          textAlign: "center",
        }}
      >
        <h2>The size of the document name would be approximately</h2>
        <h1>{bytes(totalSize, {})}</h1>
      </div>
    </>
  );
};

export default NameCalculator;
