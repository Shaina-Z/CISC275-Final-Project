import React, { useState } from 'react';
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
                    <Form.Group controlId={"Question 1"}>
                            {Q1ANSWER.map((ananswer) => (
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
                    <h3>Question 2</h3>
                    <Form.Group controlId={"Question 2"}>
                            {Q2ANSWER.map((ananswer2) => (
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
                    <h3>Question 3</h3>
                    <Form.Group controlId={"Question 3"}>
                            {Q3ANSWER.map((ananswer3) => (
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