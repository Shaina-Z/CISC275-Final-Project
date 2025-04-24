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
    const [progress,setProgress]=useState<number>(0)
    function updateAnswer(event: React.ChangeEvent<HTMLTextAreaElement>){
        const {name, value} = event.target
        setResponse(prev => ({...prev, [name]: value}));
        setProgress(progress+1);
    }

    const [question, setQuestion] = useState(
        {
            dq1: false, dq2: true, dq3: true, dq4: true,
            dq5: true, dq6: true, dq7: true
        }
    );
    function updateQuestion(index: number){
        const current = `dq${index + 1}` as keyof typeof question;

        setQuestion(() => {
            const newVisibility = {
                dq1: true,
                dq2: true,
                dq3: true,
                dq4: true,
                dq5: true,
                dq6: true,
                dq7: true
            };
            newVisibility[current] = false;
            return newVisibility;
        });
    }
    
    return(
        
        <span> 
            <header> Detailed Quiz</header> 
            <div className = "Detailed-Question">
                <Form.Group controlId="formQuestion1">
                <Form.Label>What kind of work environment sounds most appealing to you?</Form.Label>
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
                <Form.Label>What kinds of problems do you enjoy solving?</Form.Label>
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
                <Form.Label>Do you care more about the kind of work you do than the pay?</Form.Label>
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

            <div className = "Detailed-Question">
                <Form.Group controlId="formQuestion4">
                <Form.Label>When faced with a problem, how do you tend to respond, either instinctively or analytically?</Form.Label>
                <Form.Control
                    as="textarea"
                    rows={3}
                    name="q4"
                    value={response.q4}
                    onChange={updateAnswer} />
                </Form.Group>
            </div>
            <small>
                {response.q4.length} Characters
            </small>

            <div className = "Detailed-Question">
                <Form.Group controlId="formQuestion5">
                <Form.Label>What kind of learning or training appeals to you most?</Form.Label>
                <Form.Control
                    as="textarea"
                    rows={3}
                    name="q5"
                    value={response.q5}
                    onChange={updateAnswer} />
                </Form.Group>
            </div>
            <small>
                {response.q5.length} Characters
            </small>

            <div className = "Detailed-Question">
                <Form.Group controlId="formQuestion5">
                <Form.Label>If you had unlimited time and resources, what type of project would you love to start?</Form.Label>
                <Form.Control
                    as="textarea"
                    rows={3}
                    name="q6"
                    value={response.q6}
                    onChange={updateAnswer} />
                </Form.Group>
            </div>
            <small>
                {response.q6.length} Characters
            </small>

            <div className = "Detailed-Question">
                <Form.Group controlId="formQuestion5">
                <Form.Label>What would make your work feel meaningful or fulfilling?</Form.Label>
                <Form.Control
                    as="textarea"
                    rows={3}
                    name="q7"
                    value={response.q7}
                    onChange={updateAnswer} />
                </Form.Group>
            </div>
            <small>
                {response.q7.length} Characters
            </small>

            <progress value={progress} max={7} ></progress>
            <div hidden={progress<=7}>Ready to Submit?</div>
        </span>
    )
}