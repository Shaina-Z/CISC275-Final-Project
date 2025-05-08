import { useState } from 'react';
import './Pages.css';
import stockImage3 from './stockimg3.png'
import usagi from './usagiwithglasses.png'
import {Button, Form } from 'react-bootstrap';
import chatResponse from './GPT'

interface reportStates {
    notReport: boolean;
    setReport: React.Dispatch<React.SetStateAction<boolean>>;
    gptReport: string;
    setGPTReport: React.Dispatch<React.SetStateAction<string>>;
  }

export function ReportPage({
    notReport,
    setReport,
    gptReport,
    setGPTReport
}: reportStates): React.JSX.Element{
    const[chat,setChat]=useState<string>("");
    const[response,setResponse]=useState<string>("");
    function updateAnswer(event: React.ChangeEvent<HTMLTextAreaElement>){
        setChat(event.target.value);
    }
    async function respond(){
        const result = await chatResponse(chat);
        setResponse(result);
    }
    return(
        <span>
            
            <div className="Report-Page">
            <h1 className="report-header">Your Results: </h1>
            <p className="report-summary">
                    {gptReport}
                </p>
                <div className="chatbox">
                <Form.Group controlId="chatbox">
                <Form.Label>Have any more questions? Ask our career Assistant here!</Form.Label>
                <Form.Control
                    as="textarea"
                    rows={3}
                    value={chat}
                    onChange={updateAnswer} />
                </Form.Group>
                <Button onClick={respond}>Submit</Button>
            </div>
            <p className="gpt-response">
                    {response}
                </p>
                <img hidden={notReport}
                src={stockImage3}
                alt="stockimage3" 
                style={{
                    zIndex: 8888,
                    position: 'absolute',
                    bottom: 60,    
                    right: 20,
                    width: '120px',
                    height: 'auto',
                }}/>
            </div>
           
            <img hidden={notReport}
                src={usagi}
                alt="usagi" 
                style={{
                    zIndex: 8889,
                    position: 'fixed',
                    bottom: 80,    
                    left: 30,
                    width: '280px',
                    height: 'auto',
                }}/>
                 
        </span>
        
    );
};
