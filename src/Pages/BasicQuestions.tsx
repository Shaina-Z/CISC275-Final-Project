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

interface PageProps{
    pageName: string;
    question: string;
    answers: string[];
}

export function BasicQuestions(props: PageProps): React.JSX.Element{
    const [page, setPage] = useState<string>("");
    const [answer1, setAnswer1] = useState<string>(Q1ANSWER[0]);
    const [answer2, setAnswer2] = useState<string>(Q2ANSWER[0]);
    const [answer3, setAnswer3] = useState<string>(Q3ANSWER[0]);
    
    return(
        <span>
            <Button
                onClick={() =>{
                    setPage("BasicQuestions");
                    console.log("User was sent to the Basic Page");
                }}
                >
                    Basic Quiz
                </Button>
                <div className = "Basic Questions">
        <h3>Question 1</h3>
        <Form.Group controlId={"Question1"}>
                    {Q1ANSWER.map((ananswer) => (
                        <Form.Check
                            inline
                            type={"radio"}
                            name={"response"}
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
        </div>
        <div className = "Basic Questions">
        <h3>Question 1</h3>
        <Form.Group controlId={"Question1"}>
                    {Q1ANSWER.map((ananswer) => (
                        <Form.Check
                            inline
                            type={"radio"}
                            name={"response"}
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
        </div>
        <div className = "Basic Questions">
        <h3>Question 1</h3>
        <Form.Group controlId={"Question1"}>
                    {Q1ANSWER.map((ananswer) => (
                        <Form.Check
                            inline
                            type={"radio"}
                            name={"response"}
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
        </div>
        </span>
    )
}


/*function basicButton(props: PageProps): React.JSX.Element{
    const [page, setPage] = useState<string>("");
    return(
        <span>
            <Button
                onClick={() =>{
                    setPage("BasicQuestions");
                    console.log("User was sent to the Basic Page");
                }}
                >
                    Basic Quiz
                </Button>
                to {page}.
        </span>
    );
}

export function BasicQuestions({setPage, page}: basicButton): React.JSX.Element {
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
        
}*/