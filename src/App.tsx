import React, { useState } from 'react';
import './App.css';
import './Pages/Pages.css'
import {BasicQuestions} from './Pages/BasicQuestions';
import {DetailedQuestions} from './Pages/DetailedQuestions';
import { Button, Form } from 'react-bootstrap';
import stockImage from './careerquizwithbackground.png';
import stockImage2 from './stockimg2.png'

//local storage and API Key: key should be entered in by the user and will be stored in local storage (NOT session storage)
let keyData = "$OPENAI_API_KEY";
const saveKeyData = "MYKEY";
const prevKey = localStorage.getItem(saveKeyData); //so it'll look like: MYKEY: <api_key_value here> in the local storage when you inspect
if (prevKey !== null) {
  keyData = JSON.parse(prevKey);
}

function App() {
    //set the page depending by hiding contents of other pages unless a button is clicked
    const [isHome, setHome] = useState<boolean>(false);
    const [notBasic, setBasic] = useState<boolean>(true);
    const [notDetailed, setDetailed] = useState<boolean>(true);

  const [key, setKey] = useState<string>(keyData); //for api key input
  
  //sets the local storage item to the api key the user inputed
  function handleSubmit() {
    localStorage.setItem(saveKeyData, JSON.stringify(key));
    window.location.reload(); //when making a mistake and changing the key again, I found that I have to reload the whole site before openai refreshes what it has stores for the local storage variable
  }

  //whenever there's a change it'll store the api key in a local state called key but it won't be set in the local storage until the user clicks the submit button
  function changeKey(event: React.ChangeEvent<HTMLInputElement>) {
    setKey(event.target.value);
  }
  return (
    <div className="App">
      <Button hidden={!isHome}//Renders Home Page and hides Detailed and/or Basic Questions pages
              style={{backgroundColor: 'darkblue',
                color: 'white',
                fontSize: '30px',
                padding: '10px 20px',
                border: 'none',
                borderRadius: '20px',
                cursor: 'pointer',
                position: 'absolute',
                top: '60px',
                left: '60px',
                zIndex: 9999,}}
              onClick={() => {
                if (!notBasic){
                  setBasic(!notBasic);
                  setHome(!isHome);
                }
                if (!notDetailed){
                  setDetailed(!notDetailed);
                  setHome(!isHome);
                }
                console.log("User was sent to the Home Page");
              }}
            >
              Home Page
            </Button>
      <div className="take-quiz-button" hidden = {isHome}>Take our free career quiz now!</div>
      <div hidden={isHome} className="fade-strip">Career Helpi Quiz</div>
      <header className="App-header">
        <div className="Basic-Questions" hidden={notBasic}>
        <BasicQuestions />
        <div className="Detailed-Questions" hidden={notDetailed}>
        <DetailedQuestions />
      </div>
        </div>
        </header>
        <p className ="basic" style= {{zIndex: 5}} hidden = {isHome}>Not sure where to start? Answer a few small questions to get some starting points on a career path.
        <Button style={{backgroundColor: 'darkblue'}}//Flips the visibility of the Basic and Home pages
              onClick={() => {
                setBasic(!notBasic);
                setHome(!isHome);
                console.log("User was sent to the Basic Page");
              }}
      
            >
              Basic Quiz
            </Button></p> 
            
      {/* uncomment later when questions are finished */}
  <p className ="detailed" hidden = {isHome}> Have a few ideas of what you want? Take this quiz to help narrow those career choices down!
        <Button style={{backgroundColor: 'darkblue'}}//Flips the visibility of the Detailed and Home pages
              onClick={() => {
                setDetailed(!notDetailed);
                setHome(!isHome);
                console.log("User was sent to the Detailed Page");
              }}
            >
              Detailed Quiz
            </Button> </p>
          
            
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
        </a>
      
      <Form hidden={isHome} className="api-form-container">
        <Form.Label style={{ fontFamily: 'Verdana, sans-serif', color: 'white', fontSize: '20px', }}>API Key:</Form.Label>
        <Form.Control type="password" placeholder="Insert API Key Here" onChange={changeKey}></Form.Control>
        <br></br>
          <Button style={{
          backgroundColor: '#d3dced',
          color: 'black',
          fontSize: '16px',
          padding: '10px 20px',
          border: 'none',
          borderRadius: '20px',
          cursor: 'pointer'
          }} className="Submit-Button" onClick={handleSubmit}>Submit</Button>
          </Form>
          <img hidden={isHome}
          src={stockImage}
          alt="stockimage" 
          style={{
            zIndex: 1,
            position: 'fixed',
            bottom: 0,
            right: 10,
            width: '450px',
            height: 'auto',
          }} 
        />
        <img hidden={!isHome}
          src={stockImage2}
          alt="stockimage2" 
          style={{
            zIndex: 1,
            position: 'fixed',
            top: 0,
            right: 10,
            width: '250px',
            height: 'auto',
          }} 
        />
    </div>
  );
}

export default App;
