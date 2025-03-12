import '../App.css'
import { useState} from 'react'

export default function Info(){

    const ChangeUp = () => {
        let newValue = text.toUpperCase();
        setText(newValue);
    }

    const ChangeLow = () => {
        let newValue = text.toLowerCase();
        setText(newValue);
    }

    const ChangeClear = () => {
        let newValue = "";
        setText(newValue);
    }

    const CollectValue = (event) => {

        setText(event.target.value);
        
    }

    const speak = () => {
        let msg = new SpeechSynthesisUtterance();
        msg.text = text;
        window.speechSynthesis.speak(msg);
      }

    const capitalize = () => {
        if(text && typeof text === 'string'){
            let value = text.toLowerCase();
        let newValue = value[0].toUpperCase() + value.slice(1);
        setText(newValue);
        }else{
            console.log("error");
            
        }
    }
    
    let [text,setText] = useState("");

    return(
     <>
      <div className="container">
            <div className="mb-3">
            <label  className="text form-label mt-5"><b>Enter Your Text:</b></label>
            <textarea className="form-control" onChange={CollectValue} value={text}  id="FormText" rows="3"></textarea>
            </div>
            <button className="btn btn-primary my-1" onClick={ChangeUp}>Uppercase</button>
            <button className="btn btn-primary mx-3 my-1" onClick={ChangeLow}>Lowercase</button>
            <button className="btn btn-primary my-1" onClick={ChangeClear}>Clear</button>
            <button type="submit" onClick={speak} className="btn btn-primary mx-3 my-1">Speak</button>
            <button type="submit" onClick={capitalize} className="btn btn-primary my-1">capitalize</button>
      </div>
      <div className="container">
        <h3 className='my-3 text'>About your Text:</h3>
        <p className='text'>characters: {text.length}</p>
        <p className='text'>words: {text.split(/\s+/).filter((element)=>{return element.length!==0}).length} </p>
        <h3 className='text'>Time you will take to read text:</h3>
        <p className='text'>In Minute: {0.008 * text.split(" ").filter((element)=>{return element.length!==0}).length} min</p>
        <p className='text'>In Seconds: {0.48 * text.split(" ").filter((element)=>{return element.length!==0}).length} sec</p>
        <h3 className='text'>Preview of your text:</h3>
        <textarea value={text?text:"Enter text to preview"} name="" id="view" readOnly></textarea>
      </div>
      </>
    );
}