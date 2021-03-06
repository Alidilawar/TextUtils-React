import './App.css';
// import About from './component/About';
import Navbar from './component/Navbar';
import Textform from './component/Textform';
import React, { useState } from 'react'
import Alert from './component/Alert';
// import {
//   BrowserRouter as Router,
//   Switch,
//   Route  
// } from "react-router-dom";


function App() {
  const [mode, setMode] = useState('light'); //weather dark mode enable or not

  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type
    })
    setTimeout(() => {
      setAlert(null);
    }, 1500);
  }

  const toggleMode = () => {
    if (mode === 'light') {
      setMode('dark');
      document.body.style.backgroundColor = '#042743';
      showAlert('Dark mode has been enabled', 'success');
      document.title = 'TextUtils - Dark Mode';
      // setInterval(() => {
      //   document.title = 'TextUtils is amazing';
      // }, 2000);
      // setInterval(() => {
      //   document.title = 'Install TextUtils Now';
      // }, 1500);
    }
    else {
      setMode('light')
      document.body.style.backgroundColor = 'white';
      showAlert('Light mode has been enabled', 'success');
      document.title = 'TextUtils - Light Mode';
    }
  }

  return (
    <>
      {/* <Navbar title='TextUtils' aboutText='About TextUtils'/> */}
      {/* <Navbar/> */}
      {/* <Router> */}
        <Navbar title='TextUtils' mode={mode} toggleMode={toggleMode} />
        <Alert alert={alert} />
        <div className="container my-3">
          {/* <Switch>
            <Route exact path="/about">
              <About />
            </Route>
            <Route exact path="/"> */}
              <Textform showAlert={showAlert} heading="Enter the text to analyze below" mode={mode} />
              {/* <About/> */}
            {/* </Route>
          </Switch> */}
        </div>
      {/* </Router> */}
    </>
  );
}

export default App;
