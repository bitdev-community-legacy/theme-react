import React from 'react';
import './App.css';
import Notification from './components/Notification';
import setTheme from './utils/setTheme.js';

  let theme = 'light';

  const toggleThemes = () => {
    if (theme === 'light') {
      setTheme('dark');
      theme = 'dark';
    } else {
      setTheme('light');
      theme = 'light'
    }
  }

 const App = () =>  {
  return (
    <div className="app">
      <Notification text="Click to change the theme." buttonLabel="Toggle" onClickMethod={toggleThemes} />
    </div>
  );
}

export default App;
