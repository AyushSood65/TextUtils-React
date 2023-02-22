import { useState } from 'react';
import './App.css';
import Alert from './Components/Alert';
// import About from './Components/About';
import Navbar from './Components/Navbar';
import TextForm from './Components/TextForm';
// import {
//   BrowserRouter as Router,
//   Switch,
//   Route
// } from "react-router-dom";
function App() {
  // check if dark mode is enabled or not
  const [mode, setMode] = useState('light');
  const [alert, setAlert] = useState(null);
  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type
    })
    setTimeout(() => {
      setAlert(null)
    }, 1500);
  }
  let toggleMode = () => {
    if (mode === 'light') {
      setMode('dark')
      document.body.style.backgroundColor = '#042743'
      showAlert("Dark Mode is Enabled", "success")
      // document.title = "TextUtil-Dark";
    } else {
      setMode('light')
      document.body.style.backgroundColor = 'white'
      showAlert("Light Mode is Enabled", "success")
      // document.title = "TextUtil-Light";
    }
  }
  return (
    // <Router>
    <>
        <Navbar title="TextUtils" mode={mode} toggleMode={toggleMode} aboutText="About TextUtils" />
        <Alert alert={alert} />
        {/* <Navbar/> */}
        <div className="container my-3">
          {/* <Switch>
            <Route exact path="/about">
              <About />
            </Route>
            <Route exact path="/">
            <TextForm showAlert={showAlert} heading="Enter a text to analyze" mode={mode} />
            </Route>
          </Switch> */}
                      <TextForm showAlert={showAlert} heading="Enter a text to analyze" mode={mode} />
        </div>
    </>
    // </Router>
  );
}

export default App;
