import React,{useState} from 'react'

export default function Textarea(props) {
    const handleupclick=()=>{
       console.log("Upper case was click!",+ text);
       let newtext= text.toLocaleUpperCase();
       settext(newtext);
    }

    const handleonClick=(event)=>{
        console.log("On Change!");
        settext(event.target.value);
     }

     const handledownclick=()=>{
        console.log("Lower case was click!",+ text);
        let newdtext=text.toLocaleLowerCase();
        settext(newdtext);
     }
     
     const handleclrclick=()=>{
      
      let newtext=" "
      settext(newtext);
   }
    


    const[text,settext]=useState("");
    return (
      <>
      <div className='container'  style={{color :props.mode==='dark'?'white':'black'}}>
          <h1>{props.heading}</h1>
        <div className='mb-3'>
          
          <textarea
            className="form-control"
            id="my-box"
            value={text}
            onChange={handleonClick}
            rows="8"
          ></textarea>
        </div>
        <button className="btn btn-primary" onClick={handleupclick} >Convert to UpperCase</button>
        <button style={{marginLeft:5}} className="btn btn-primary" onClick={handledownclick}>Convert to LowerCase</button>
        <button style={{marginLeft:5}} className="btn btn-primary" onClick={handleclrclick}>Clear Text</button>

      </div>
       <div className="container" style={{color :props.mode==='dark'?'white':'black'}}>
         <h2>Your text Summary</h2>
        <p>{text.split(" ").length} words and {text.length} characters</p>
        <p>{0.008 * text.split(" ").length } Minutes read</p>
        <h2>Preview</h2>
        <p>{text}</p>
       </div>
      </>
    );
}
