import bytes from "bytes";
import sizeof from "firestore-size";
import {javascript} from "@codemirror/lang-javascript";
import CodeMirror from "@uiw/react-codemirror";
import {useCallback, useState} from "preact/hooks";

const NameCalculator = () => {

    const [code, setCode] = useState(null)

    const onChange = useCallback((value, viewUpdate) => {

        const convertedValue = value
        console.log(convertedValue)





    }, []);


    return (
        <>
            <div style={{width: "50%", float: "left", height: "200", display: "block", paddingRight: 20}}>
                <h3>Document name size</h3>
                Write the name of your document in format users/jeff/tasks/my_task_id
                <CodeMirror
                    value=""
                    // height="600px"
                    extensions={[]}
                    onChange={onChange}
                />
            </div>
            <div  style={{width: "50%", float: "right",height: "200", paddingLeft: 20}}>
                JOJO
            </div>
        </>
    )

}

export default NameCalculator;