import React, {useState} from 'react'

export default function TextForm(props) {
    const countWords = (text) => {
        let newText = text.split(/[ ]+/)
        if(newText[newText.length - 1] === ""){
            return newText.length - 1
        }
        return newText.length;

    }
    const handleUppercaseClick = () => {
        console.log("Uppercase was clicked")
        let newText = text.toUpperCase();
        setText(newText);
        props.showAlert("Coverted to uppercase", "success");
    }

    const handleLowercaseClick = () => {
        let newText = text.toLowerCase();
        setText(newText);
        props.showAlert("Coverted to lowercase", "success");
    }

    const clearText = () => {
        setText("");
        props.showAlert("Text Cleared", "success");
    }

    const copyText = () => {
        let copyText = document.getElementById("myBox")
        copyText.select()
        copyText.setSelectionRange(0, 99999)
        navigator.clipboard.writeText(copyText.value)
        props.showAlert("Text Copied to Clipboard", "success");
    }

    const removeSpaces = () => {
        let newText = text.split(/[ ]+/)
        setText(newText.join(" "))
        props.showAlert("Removed extra spaces", "success");
    }

    const handleOnChange = (event) => {
        setText(event.target.value)
    }
    const [text, setText] = useState("")  // here text is variable and setText is a function
    return (
        <div className="container" style = {{color : props.mode === "light"?"black":"white"}}>
            <div>
                <h1>{props.heading}</h1>
                <div className="form-group my-3">
                    <textarea className="form-control" value={text} style = {{backgroundColor : props.mode==="light"?"white":'black', color : props.mode === "light"?"black":"white"}} onChange = {handleOnChange} id="myBox" rows="8"></textarea>
                </div>
                <button className = "btn btn-primary mx-3" onClick={handleUppercaseClick}>Convert to Uppercase</button>
                <button className = "btn btn-primary" onClick={handleLowercaseClick}>Convert to Lowercase</button>
                <button className = "btn btn-primary mx-3" onClick={clearText}>Clear Text</button>
                <button className = "btn btn-primary" onClick={copyText}>Copy Text</button>
                <button className = "btn btn-primary mx-3" onClick={removeSpaces}>Remove Spaces</button>
            </div>
            <div className="container my-2">
                <h1>Your text summary</h1>
                <p>{countWords(text)} Words and {text.length} Characters</p>
                <p>You can read it in {0.008 * text.split(" ").length} minutes</p>
                <h2>Preview</h2>
                <p>{text.length > 0 ? text : "Enter something in the above text to preview it here"}</p>
            </div>
        </div>
    )
}
