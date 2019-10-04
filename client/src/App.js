import React, { useState } from 'react';
import './App.css';
import ClassComponent from './Component/ClassComponent';
import useDarkMode from './Component/hooks/useDarkMode';
import { Button } from 'semantic-ui-react';

function App() {

  const [darkMode, setDarkMode] = useDarkMode(); 
  const [buttonState, setButtonState] = useState(darkMode);

  const handleClick = () =>{
    setButtonState(!buttonState)
    setDarkMode(!darkMode);
  }

  return (
    <div className="App">
      <div className='navBar'>
        <h1 data-testid='main-header'>Women's World Cup - Google Trends</h1>
        <Button data-testid='dark-mode-button' toggle active={buttonState} onClick={()=>handleClick()} className="darkModeButton"> Switch Screen Mode </Button>
      </div>
      <hr />
      <ClassComponent data-testid='player-card'/>
    </div>
  );
}

export default App;
