import React ,{useState} from 'react'
import PropTypes from 'prop-types'


export default function Textarea(props) {
   function handleupclick (){
    let newtext = text.toUpperCase();
    setText(newtext);
 }
 function handleonchange (event){
     setText(event.target.value)

 }
     
    const [text , setText] = useState("Enter Text here")

   
  return (
    <div className='container'>
      <div className="mb-3" >
      <h1>{props.title}</h1>
      <textarea className="form-control" value = {text} onChange={handleonchange} id="my-box" rows="8"></textarea>
      </div>
      <button className="btn btn-primary" onClick={handleupclick}>Convert to Upper cases</button>
     
    </div>
  )
}
Textarea.propTypes={title: PropTypes.string}

