import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import Footer from './components/Footer';
import About from './components/About';
import React, {useState} from "react";
import Alert from './components/Alert';
import{
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom"





function App() {
  const [mode, setMode] = useState("light")
  const [alert, setAlert] = useState(null)

  const showAlert = (message, type) => {
    setAlert({
      msg : message,
      type : type
    })
    setTimeout(() => {
      setAlert(null);
    }, 1500)
  }

  const toggleMode = () => {
    if(mode === "light"){
      setMode("dark")
      document.body.style.backgroundColor = "#072038"
      showAlert("Mode Successfully Changed To Dark Mode", "success")
    }
    else{
      setMode("light")
      document.body.style.backgroundColor = "white"
      showAlert("Mode Successfully Changed To Light Mode", "success")
    }
  }
  return (
    <Router>
    <>
      <Navbar title = "textUtils" aboutUs = "about textUtils" mode = {mode} toggleMode = {toggleMode}/>
      <Alert alert = {alert}/>
        <Routes>
          <Route exact path="/about" element = {<About mode = {mode}/>}/>
          <Route exact path="/" element = {<TextForm heading = "Enter the text to Analyze" mode = {mode} showAlert = {showAlert}/>} />
        </Routes> 
      <Footer />
    </>
    </Router>
  );
}

export default App;
