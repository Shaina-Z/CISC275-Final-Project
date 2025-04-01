import React, { useState } from 'react';
import './App.css';
import { Button, Form } from 'react-bootstrap';

const Q1ANSWER = [
    "Choice A",
    "Choice B",
    "Choice C",
    "Choice D"
]
const Q2ANSWER = [
    "Choice A",
    "Choice B",
    "Choice C",
    "Choice D"
]
const Q3ANSWER = [
    "Choice A",
    "Choice B",
    "Choice C",
    "Choice D"
]

export function BasicQuestions(): React.JSX.Element {
    const [answer, setAnswer] = useState<string>(Q1ANSWER[0]);
    
    return(
    <div className = "Basic Questions">
        <h3>Basic Quiz Questions</h3>
        <Form.Group controlId={"Colors"}>
                    {Q1ANSWER.map((ananswer) => (
                        <Form.Check
                            inline
                            type={"radio"}
                            name={"response"}
                            key={ananswer}
                            value={ananswer}
                            label={ananswer}
                            onChange={(e) => {
                                setAnswer(e.target.value);
                            }}
                            checked={answer === ananswer}
                        />
                    ))}
                </Form.Group>
        </div>
    )
}