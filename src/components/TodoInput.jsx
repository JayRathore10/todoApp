import { useState } from 'react';
import './TodoInput.css';

export function TodoInput({addList}){

  const [inputText , setInputText] = useState(""); 

  const enterHandler = (e)=>{
    if(e.key == 'Enter' && inputText !== ''){
      addList(inputText);
      setInputText("");
    }
  }

  return (
    <>
      <div className="input-container">
        <input 
        type="text" 
        className="input-box"
        placeholder="Enter Your Todo"
        value={inputText}
        onChange={(e)=>{
          setInputText(e.target.value)
        }}
        onKeyDown={(e)=>{
          enterHandler(e)
        }}
        />
        <button className="add-btn"
          onClick={()=>{
            if(inputText !== ''){
              addList(inputText)
              setInputText('');
            }
          }}
        >Add</button>
      </div>
    </>
  );
}