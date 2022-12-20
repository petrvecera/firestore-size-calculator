import bytes from "bytes";
import sizeof from "firestore-size";

const DisplaySize = ({ code }) => {
  const displayValue = code ? bytes(sizeof(code),{}) : "0B";

  return <>{displayValue}</>;
};

export default DisplaySize;
