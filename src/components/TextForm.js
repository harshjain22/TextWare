import React, { useState } from "react";
import PropTypes from 'prop-types'

export default function TextForm(props) {

    const handleOnUpClick = () => {

        setText(text.toUpperCase());
    };

    const handleOnLoClick = () => {

        setText(text.toLowerCase());
    };
    
    const handleOnChange = (event) => {
        setText(event.target.value);
    };
    

    let wordCount = (text) => {
        let count = text.split(" ").length;
        if (text.lastIndexOf(" ")) {
            count -= 1;
        }
        return count;

    }
 

    const [text, setText] = useState("");

    // here we declared a variable 'text' having default value written int (..) and to modify the value of this variable we have to use the setText function we defined like-  setText("modified value").  we can't directly assign any other value in this state variables like text = "modified value"

    return (

        <div className="container my-5" style={{color: props.mode === 'dark'? 'white':'black'}} >
            
            <div className="mb-3">
                <textarea
                    className="form-control"
                    id="exampleFormControlTextarea1"
                    rows="7"
                    value={text}
                    onChange={handleOnChange}
                    style={{backgroundColor: props.mode === 'dark'? '#191948':'white',color: props.mode === 'dark'? 'white':'black'}}
                ></textarea>
            </div>

            <button className="btn btn-primary mx-3 my-3 " id="btnUp" onClick={handleOnUpClick}>
                Convert to UpperCase
            </button>

            <button className="btn btn-primary mx-3 my-3" id="btnUp" onClick={handleOnLoClick}>
                Convert to LowerCase
            </button>


            <h2 className="my-4" >Stats of your work</h2>

            <b> {wordCount(text)} </b> words <b>{text.length} </b> characters



        </div>
    );

}
