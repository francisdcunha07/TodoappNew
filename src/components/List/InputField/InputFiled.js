import react, { useState, useRef} from 'react';

const InputField = ({ btnSubmit, refr }) => {
    const [inputVal, setInputVal] = useState("");
    const inputRef = useRef();

    

return(
    
<>
      <input ref={inputRef} type="text"    placeholder="Enter text" />
        <button onClick={() => btnSubmit(inputRef)}>Submit</button>
    </>
)
}

export default InputField;