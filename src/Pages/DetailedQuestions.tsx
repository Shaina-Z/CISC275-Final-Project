import React, { useState } from 'react';
import './Pages.css';
import {Form } from 'react-bootstrap';

const QTYPEAANSWER = [
    "Strongly disagree",
    "Disagree",
    "Unsure",
    "Agree",
    "Strongly agree"
]


export function DetailedQuestions(): React.JSX.Element{
    const [answer1, setAnswer1] = useState<string>(QTYPEAANSWER[0]);
    const [answer2, setAnswer2] = useState<string>(QTYPEAANSWER[0]);
    const [answer3, setAnswer3] = useState<string>(QTYPEAANSWER[0]);
    
    return( 
        <span>  
                <div className = "Detailed-Question">
                    <header> Detailed Quiz</header>
                    <h3>1. I would like to develop new medicine</h3>
                    <Form.Group controlId={"Question 1"}>
                            {QTYPEAANSWER.map((ananswer) => (
                                <Form.Check
                                inline
                                type={"radio"}
                                name={"response1"}
                                key={ananswer}
                                value={ananswer}
                                label={ananswer}
                                onChange={(e) => {
                                    setAnswer1(e.target.value);
                                }}
                                checked={answer1 === ananswer}
                            />
                        ))}
                    </Form.Group>
                    <h3>2. I would like to write books or plays</h3>
                    <Form.Group controlId={"Question 2"}>
                            {QTYPEAANSWER.map((ananswer2) => (
                                <Form.Check
                                inline
                                type={"radio"}
                                name={"response2"}
                                key={ananswer2}
                                value={ananswer2}
                                label={ananswer2}
                                onChange={(e) => {
                                    setAnswer2(e.target.value);
                                }}
                                checked={answer2 === ananswer2}
                            />
                        ))}
                    </Form.Group>
                    <h3>3. I would like to install software across computers on a large network</h3>
                    <Form.Group controlId={"Question 3"}>
                            {QTYPEAANSWER.map((ananswer3) => (
                                <Form.Check
                                inline
                                type={"radio"}
                                name={"response3"}
                                key={ananswer3}
                                value={ananswer3}
                                label={ananswer3}
                                onChange={(e) => {
                                    setAnswer3(e.target.value);
                                }}
                                checked={answer3 === ananswer3}
                            />
                        ))}
                </Form.Group>
                </div>
        </span>
    )
}