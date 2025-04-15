import React, { useState } from 'react';
import './Pages.css';
import {Form } from 'react-bootstrap';

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

const Q4ANSWER = [
    "Choice A",
    "Choice B",
    "Choice C",
    "Choice D"
]

const Q5ANSWER = [
    "Choice A",
    "Choice B",
    "Choice C",
    "Choice D"
]

const Q6ANSWER = [
    "Choice A",
    "Choice B",
    "Choice C",
    "Choice D"
]

const Q7ANSWER = [
    "Choice A",
    "Choice B",
    "Choice C",
    "Choice D"
]
export function BasicQuestions(): React.JSX.Element{
    const [answer1, setAnswer1] = useState<string>(Q1ANSWER[0]);
    const [answer2, setAnswer2] = useState<string>(Q2ANSWER[0]);
    const [answer3, setAnswer3] = useState<string>(Q3ANSWER[0]);
    const [answer4, setAnswer4] = useState<string>(Q4ANSWER[0]);
    const [answer5, setAnswer5] = useState<string>(Q5ANSWER[0]);
    const [answer6, setAnswer6] = useState<string>(Q6ANSWER[0]);
    const [answer7, setAnswer7] = useState<string>(Q7ANSWER[0]);
    const [progress,setProgress]=useState<number>(0)

    function UpdateProgress(){
      setProgress(progress+1);
      console.log(progress);
    }
    return(
        
        <span>  
                <div className = "Basic-Questions">
                    <header> Basic Quiz</header>
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
                                    UpdateProgress();
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
                                    UpdateProgress();
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
                                    setAnswer3(e.target.value
                                     );
                                     UpdateProgress();
                                }}
                                checked={answer3 === ananswer3}
                            />
                        ))}
                </Form.Group>
                <h3>Question 4</h3>
                    <Form.Group controlId={"Question 3"}>
                            {Q4ANSWER.map((ananswer4) => (
                                <Form.Check
                                inline
                                type={"radio"}
                                name={"response4"}
                                key={ananswer4}
                                value={ananswer4}
                                label={ananswer4}
                                onChange={(e) => {
                                    setAnswer4(e.target.value
                                     );
                                     UpdateProgress();
                                }}
                                checked={answer4 === ananswer4}
                            />
                        ))}
                </Form.Group>
                <h3>Question 5</h3>
                    <Form.Group controlId={"Question 5"}>
                            {Q5ANSWER.map((ananswer5) => (
                                <Form.Check
                                inline
                                type={"radio"}
                                name={"response5"}
                                key={ananswer5}
                                value={ananswer5}
                                label={ananswer5}
                                onChange={(e) => {
                                    setAnswer5(e.target.value
                                     );
                                     UpdateProgress();
                                }}
                                checked={answer5 === ananswer5}
                            />
                        ))}
                </Form.Group>
                <h3>Question 6</h3>
                    <Form.Group controlId={"Question 6"}>
                            {Q6ANSWER.map((ananswer6) => (
                                <Form.Check
                                inline
                                type={"radio"}
                                name={"response6"}
                                key={ananswer6}
                                value={ananswer6}
                                label={ananswer6}
                                onChange={(e) => {
                                    setAnswer6(e.target.value
                                     );
                                     UpdateProgress();
                                }}
                                checked={answer6 === ananswer6}
                            />
                        ))}
                </Form.Group>
                <h3>Question 7</h3>
                    <Form.Group controlId={"Question 7"}>
                            {Q7ANSWER.map((ananswer7) => (
                                <Form.Check
                                inline
                                type={"radio"}
                                name={"response7"}
                                key={ananswer7}
                                value={ananswer7}
                                label={ananswer7}
                                onChange={(e) => {
                                    setAnswer7(e.target.value
                                     );
                                     UpdateProgress();
                                }}
                                checked={answer7 === ananswer7}
                            />
                        ))}
                </Form.Group>
                <progress value={progress} max={7} ></progress>
                <div className='Ready' hidden={progress!==7}>Ready to Submit?</div>
                </div>
        </span>
    )
}