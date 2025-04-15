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
            <div className = "Detailed-Question">
                <header> Detailed Quiz</header>
                <Form.Group controlId="formQuestion1">
                <Form.Label>Question 1:</Form.Label>
                <Form.Control
                    as="textarea"
                    rows={3}
                    value={response.q1}
                    onChange={updateAnswer} />
                </Form.Group>
            </div>
            <div>
                {response.q1.length}
            </div>
        </span>
    )
}