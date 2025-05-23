import React, { useState } from 'react';
import './Pages.css';
import {Button, Form } from 'react-bootstrap';
import genResponse from './GPT';


const QTYPEAANSWER = [
    "Strongly disagree",
    "Disagree",
    "Unsure",
    "Agree",
    "Strongly agree"
]

interface basicStates {
    notBasic: boolean;
    setBasic: React.Dispatch<React.SetStateAction<boolean>>;
    notReport: boolean;
    setReport: React.Dispatch<React.SetStateAction<boolean>>;
    gptReport: string;
    setGPTReport: React.Dispatch<React.SetStateAction<string>>;
  }

export function BasicQuestions({
    notBasic,
    setBasic,
    notReport,
    setReport,
    gptReport,
    setGPTReport,
}: basicStates): React.JSX.Element{

        const [answer1, setAnswer1] = useState<string>(QTYPEAANSWER[0]);
        const [answer2, setAnswer2] = useState<string>(QTYPEAANSWER[0]);
        const [answer3, setAnswer3] = useState<string>(QTYPEAANSWER[0]);
        const [answer4, setAnswer4] = useState<string>(QTYPEAANSWER[0]);
        const [answer5, setAnswer5] = useState<string>(QTYPEAANSWER[0]);
        const [answer6, setAnswer6] = useState<string>(QTYPEAANSWER[0]);
        const [answer7, setAnswer7] = useState<string>(QTYPEAANSWER[0]);
        const [progress,setProgress]=useState<number>(0)
        
        const basic_answers=[`I would like to develop new medicine: ${answer1}`,
        `I would like to write books or plays: ${answer2}`,
        `I would like to install software across computers on a large network: ${answer3}`,
        `I would like to study ways to reduce water pollution: ${answer4}`,
        `I would like to repair household appliances: ${answer5}`,
        `I would like to compose or arrange music: ${answer6}`,
        `I would like to manage a department in a large company: ${answer7}`];

        async function generateReportForUser() {
            setBasic(!notBasic); 
            setReport(!notReport);
            const userResponses=basic_answers.join();
            const result = await genResponse(userResponses);
            setGPTReport(result);
        }
  
    function UpdateProgress(){
            setProgress(progress+1);
            console.log(progress);
          }
    return(
        <span>  
            <div className="page-wrapper">
                <div className = "Basic-Questions">
                    <header className="Basic-Title" style={{fontSize:40}}> Basic Quiz</header>
                    <h3 style={{color: 'white'}}>1. I would like to develop new medicine</h3>
                    <Form.Group controlId={"Question 1"}>
                            {QTYPEAANSWER.map((ananswer) => (
                                <Form.Check style={{color: 'white'}}
                                inline
                                type={"radio"}
                                name={"response1"}
                                key={ananswer}
                                value={answer1}
                                label={ananswer}
                                onChange={(e) => {
                                    setAnswer1(e.target.value);
                                    UpdateProgress();
                                }}
                               //checked={answer1 !== ananswer}
                            />
                        ))}
                    </Form.Group>
                    <h3 style={{color: 'white'}}>2. I would like to write books or plays</h3>
                    <Form.Group controlId={"Question 2"}>
                            {QTYPEAANSWER.map((ananswer2) => (
                                <Form.Check style={{color: 'white'}}
                                inline
                                type={"radio"}
                                name={"response2"}
                                key={ananswer2}
                                value={answer2}
                                label={ananswer2}
                                onChange={(e) => {
                                    setAnswer2(e.target.value);
                                    UpdateProgress();
                                }}
                                //checked={answer2 !== ananswer2}
                            />
                        ))}
                    </Form.Group>
                    <h3 style={{color: 'white'}}>3. I would like to install software across computers on a large network</h3>
                    <Form.Group controlId={"Question 3"}>
                            {QTYPEAANSWER.map((ananswer3) => (
                                <Form.Check style={{color: 'white'}}
                                inline
                                type={"radio"}
                                name={"response3"}
                                key={ananswer3}
                                value={answer3}
                                label={ananswer3}
                                onChange={(e) => {
                                    setAnswer3(e.target.value
                                     );
                                     UpdateProgress();
                                }}
                                //checked={answer3 !== ananswer3}
                            />
                        ))}
                </Form.Group>
                <h3 style={{color: 'white'}}>4. I would like to study ways to reduce water pollution</h3>
                    <Form.Group controlId={"Question 4"}>
                            {QTYPEAANSWER.map((ananswer4) => (
                                <Form.Check style={{color: 'white'}}
                                inline
                                type={"radio"}
                                name={"response4"}
                                key={ananswer4}
                                value={answer4}
                                label={ananswer4}
                                onChange={(e) => {
                                    setAnswer4(e.target.value);
                                    UpdateProgress();
                                }}
                                //checked={answer4 !== ananswer4}
                            />
                        ))}
                </Form.Group>
                <h3 style={{color: 'white'}}>5. I would like to repair household appliances</h3>
                    <Form.Group controlId={"Question 5"}>
                            {QTYPEAANSWER.map((ananswer5) => (
                                <Form.Check style={{color: 'white'}}
                                inline
                                type={"radio"}
                                name={"response5"}
                                key={ananswer5}
                                value={answer5}
                                label={ananswer5}
                                onChange={(e) => {
                                    setAnswer5(e.target.value);
                                    UpdateProgress();
                                }}
                                //checked={answer5 !== ananswer5}
                            />
                        ))}
                </Form.Group>
                <h3 style={{color: 'white'}}>6. I would like to compose or arrange music</h3>
                    <Form.Group controlId={"Question 6"}>
                            {QTYPEAANSWER.map((ananswer6) => (
                                <Form.Check style={{color: 'white'}}
                                inline
                                type={"radio"}
                                name={"response6"}
                                key={ananswer6}
                                value={answer6}
                                label={ananswer6}
                                onChange={(e) => {
                                    setAnswer6(e.target.value);
                                    UpdateProgress();
                                }}
                                //checked={answer6 !== ananswer6}
                            />
                        ))}
                </Form.Group>
                <h3 style={{color: 'white'}}>7. I would like to manage a department in a large company</h3>
                    <Form.Group controlId={"Question 7"}>
                            {QTYPEAANSWER.map((ananswer7) => (
                                <Form.Check style={{color: 'white'}}
                                inline
                                type={"radio"}
                                name={"response7"}
                                key={ananswer7}
                                value={answer7}
                                label={ananswer7}
                                onChange={(e) => {
                                    setAnswer7(e.target.value);
                                    UpdateProgress();
                                }}
                                //checked={answer7 !== ananswer7}
                            />
                        ))}
                </Form.Group>
                <progress value={progress} max={7} ></progress>
                <br></br>
                <Button hidden={progress<=6}onClick={generateReportForUser} style={{backgroundColor: 'rgb(58, 17, 130)'}}>Ready to Submit?</Button>
                </div>
            </div>    
        </span>
    )
}

