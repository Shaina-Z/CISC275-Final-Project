import React, { useState } from 'react';
import './App.css';
import { Button, Form } from 'react-bootstrap';
import stockImage from './careerquizwithbackground.png';

//local storage and API Key: key should be entered in by the user and will be stored in local storage (NOT session storage)
let keyData = "$OPENAI_API_KEY";
const saveKeyData = "MYKEY";
const prevKey = localStorage.getItem(saveKeyData); //so it'll look like: MYKEY: <api_key_value here> in the local storage when you inspect
if (prevKey !== null) {
  keyData = JSON.parse(prevKey);
}

function App() {
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
      <Button className="take-quiz-button">Take our free career quiz now!</Button>
      <div className="fade-strip">Career Helpi Quiz</div>
      <header className="App-header"></header>
      {/* uncomment later when questions are finished */}
      {/* <header className ="Questions"></header> */}
        <p className ="basic">Not sure where to start? Answer a few small questions to get some starting points on a career path.</p> 
        <p className ="detailed"> Have a few ideas of what you want? Take this quiz to help narrow those career choices down!</p>      
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
        </a>
      <Form className="api-form-container">
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
          <img 
          src={stockImage}
          alt="stockimage" 
          style={{
            position: 'fixed',
            bottom: 0,
            right: 10,
            width: '450px',
            height: 'auto',
          }} 
        />
    </div>
  );
}

export default App;
