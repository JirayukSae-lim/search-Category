import React,{useState, useEffect} from 'react'
import * as AiIcons from "react-icons/ai";
import './App.css';

function App() {

  const [data,setData] = useState([]);
  const [keyWord,setKeyWord] = useState('');

  useEffect(initialValue,[]);

  function initialValue(){
    fetch('https://api.publicapis.org/categories')
    .then(res=>res.json())
    .then((response)=>{
      setData(response.categories);
    })
  }
  
  return (
    <div className="App">
      <p id='title'>What are you looking for?</p>
      <div className='boxSearch'>
        <AiIcons.AiOutlineSearch className='icon'/>
        <input type='text' placeholder='enter your text' onChange={(e)=>{setKeyWord(e.target.value)}}/>
      </div>

      <div className='boxText'>
        {data?
          data.filter(word=>word.toLowerCase().includes(keyWord)).map(item=>{
            return(
              
                <p>{item}</p>
              
            )
          })
        :null}
      </div>
    </div>
  );
}

export default App;
