import React, { useState } from 'react';
import './App.css';
import './Pages/Pages.css'
import {BasicQuestions} from './Pages/BasicQuestions';
import {DetailedQuestions} from './Pages/DetailedQuestions';
import { Button, Form } from 'react-bootstrap';


//local storage and API Key: key should be entered in by the user and will be stored in local storage (NOT session storage)
let keyData = "$OPENAI_API_KEY";
const saveKeyData = "MYKEY";
const prevKey = localStorage.getItem(saveKeyData); //so it'll look like: MYKEY: <api_key_value here> in the local storage when you inspect
if (prevKey !== null) {
  keyData = JSON.parse(prevKey);
}

function App(): React.JSX.Element {
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
    <div>
      <div className="App">
        <p>Shaina Zaccagnino, Axel Rodriguez-Leon, Alexander Chambers</p>
        <header className="App-header">
          <p>Career Helpi</p>
          <div className="Basic-Questions" hidden={notBasic}>
        <BasicQuestions />
      </div>
      <div className="Detailed-Questions" hidden={notDetailed}>
        <DetailedQuestions />
      </div>
          <header className="Questions" hidden={isHome}>
            <p className="basic">
              Not sure where to start? Answer a few small questions to get some starting points on a career path.
            </p>
            <Button //Flips the visbility of the Basic and Home pages
              onClick={() => {
                setBasic(!notBasic);
                setHome(!isHome);
                console.log("User was sent to the Basic Page");
              }}
            >
              Basic Quiz
            </Button>
            <p className="detailed" hidden={isHome}>
              Have a few ideas of what you want? Take this quiz to help narrow those career choices down!
            </p>
          </header>
          <Button //Flips the visbility of the Detailed and Home pages
              onClick={() => {
                setDetailed(!notDetailed);
                setHome(!isHome);
                console.log("User was sent to the Detailed Page");
              }}
              hidden = {isHome}
            >
              Detailed Quiz
            </Button>
        </header>
        <Form>
          <Form.Label>API Key:</Form.Label>
          <Form.Control type="password" placeholder="Insert API Key Here" onChange={changeKey} />
          <br />
          <Button className="Submit-Button" onClick={handleSubmit}
            hidden={isHome}
          >
            Submit
          </Button>
        </Form>
      </div>
    </div>
  );
}

export default App;
