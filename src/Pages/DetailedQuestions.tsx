import React, { useState } from 'react';
import './Pages.css';
import {Form } from 'react-bootstrap';


export function DetailedQuestions(): React.JSX.Element{
    const [response, setResponse] = useState(
        { q1: "Type your answer here!", q2: "Type your answer here!", q3: "Type your answer here!",
            q4: "Type your answer here!", q5: "Type your answer here!", q6: "Type your answer here!",
            q7: "Type your answer here!"
        }
    );

    function updateAnswer(event: React.ChangeEvent<HTMLTextAreaElement>){
        const {name, value} = event.target
        setResponse(prev => ({...prev, [name]: value}));
    }
    
    return(
        
        <span> 
            <header> Detailed Quiz</header> 
            <div className = "Detailed-Question">
                <Form.Group controlId="formQuestion1">
                <Form.Label>Question 1:</Form.Label>
                <Form.Control
                    as="textarea"
                    rows={3}
                    name="q1"
                    value={response.q1}
                    onChange={updateAnswer} />
                </Form.Group>
            </div>
            <small>
                {response.q1.length} Characters
            </small>

            <div className = "Detailed-Question">
                <Form.Group controlId="formQuestion2">
                <Form.Label>Question 2:</Form.Label>
                <Form.Control
                    as="textarea"
                    rows={3}
                    name="q2"
                    value={response.q2}
                    onChange={updateAnswer} />
                </Form.Group>
            </div>
            <small>
                {response.q2.length} Characters
            </small>

            <div className = "Detailed-Question">
                <Form.Group controlId="formQuestion3">
                <Form.Label>Question 3:</Form.Label>
                <Form.Control
                    as="textarea"
                    rows={3}
                    name="q3"
                    value={response.q3}
                    onChange={updateAnswer} />
                </Form.Group>
            </div>
            <small>
                {response.q3.length} Characters
            </small>
        </span>
    )
}