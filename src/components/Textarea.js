import React ,{useState} from 'react'
import PropTypes from 'prop-types'


export default function Textarea(props) {
   function Uppercase (){
    let newtext = text.toUpperCase();
    setText(newtext);
 }
 function Lowercase(){
  let  newtext = text.toLowerCase();
  setText(newtext);
 }
 function handleonchange (event){
     setText(event.target.value)

 }
     
    const [text , setText] = useState("Enter Text here")

   let word = text.split(" ").length;
   let newword =word;
   if(text.length<=0){
    word = 0;
   }
 
   
  return (
    <>
    <div className='container'>
      <div className="mb-3" >
      <h1>{props.title}</h1>
      <textarea className="form-control" value = {text} onChange={handleonchange} id="my-box" rows="8"></textarea>
      </div>
      <button className="btn btn-primary mx-1" onClick={Uppercase}>Convert to Upper cases</button>
      <button className="btn btn-primary mx-1"onClick={Lowercase}>Convert to lower case</button>
        
    </div>
    <div className='container my-3'>
      
      <h3>Your Text Summary</h3>
      <p>{word} words and {text.length} character</p>
      <h3>Preview</h3>
      <p>{text}</p>
    </div>
    </>
  )
}
Textarea.propTypes={title: PropTypes.string}

