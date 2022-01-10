import Navbar from './components/Navbar';
import Textarea from './components/Textarea';
import React, { useState } from 'react'

function App() {
  const [mode, setMode] = useState('light');
const toggleMode=()=>{
  if(mode==='light'){
    setMode ('dark');
    document.body.style.backgroundColor="#154f83";
  }
  else{
    setMode ('light')
    document.body.style.backgroundColor="white";


  }
}
  return (
    <>
    <Navbar title="Textutils" About="About us" mode={mode} toggleMode={toggleMode} />
    <div className="container">
    <Textarea heading="Enter the Text" mode={mode}/>
    </div>
    </>
  );
}

export default App;
