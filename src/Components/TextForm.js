import React, { useState } from 'react'

export default function TextForm(props) {
    // Set value to upper Case
    // setText is state for replacing text field
    const handleUpClick = () => {
        let newText = text.toUpperCase();
        setText(newText);
        props.showAlert("Converted to Upper Case", "success");
    };

    // handling lower case
    const handleLoClick = () => {
        let newText = text.toLowerCase();
        setText(newText);
        props.showAlert("Converted to Lower Case", "success");

    };
    const handleOnChange = (event) => {
        setText(event.target.value)
    };
    const handleClearClick = () => {
        let newText = '';
        setText(newText);
        props.showAlert("Clear Text", "success");

    }
    const [text, setText] = useState('');
    return (
        <>
        <div className='container' style={{color: props.mode==="dark"?"white":"#042743"}}>
            <div className="mb-3">
                <h1>{props.heading}</h1>
                <textarea className="form-control" value={text} style={{backgroundColor: props.mode==="dark"?"#5a646c":"white"}} onChange={handleOnChange} id="mybox" rows="8"></textarea>
            </div>
            <button disabled={text.length===0} className=" btn btn-primary mx-1" onClick={handleUpClick}>Convert to Uppercase</button>
            <button disabled={text.length===0} className=" btn btn-primary mx-1 my-1" onClick={handleLoClick}>Convert to Lowercase</button>
            <button disabled={text.length===0} className=" btn btn-primary mx-1 my-1" onClick={handleClearClick}>Clear Text</button>
        </div>
        <div className="container my-3" style={{color: props.mode==="dark"?"white":"#042743"}}>
            <h2>Your Text summary</h2>
            <p>{text.split(" ").filter((element)=>{return element.length!==0}).length} words and {text.length} characters</p>
            <p>{ 0.008 * text.split(' ').filter((element)=>{return element.length!==0}).length} minutes read</p>
            <h2>Preview</h2>
            <p>{text.length>0?text:"Enter something in the textbox"}</p>
        </div>
        </>
    )
}
