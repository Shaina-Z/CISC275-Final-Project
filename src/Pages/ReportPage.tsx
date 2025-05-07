import { useState } from 'react';
import './Pages.css';
import stockImage3 from './stockimg3.png'
import usagi from './usagiwithglasses.png'
import {Button, Form } from 'react-bootstrap';

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
    const[response,setResponse]=useState<string>("");
    function updateAnswer(event: React.ChangeEvent<HTMLTextAreaElement>){
        setResponse(event.target.value);
    }
    return(
        <span>
            <div className="Report-Page">
            <h1 className="report-header">Your Results: </h1>
            <p className="report-summary">
                    {gptReport}
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
                 <div className = "chatResponse">
                <Form.Group>
                <Form.Label>Have any more questions? Ask our career Assistant here!</Form.Label>
                <Form.Control
                    as="textarea"
                    rows={3}
                    name="chatbox"
                    value={response}
                    onChange={updateAnswer} />
                </Form.Group>
                <small>
                {response.length} Characters
                </small>
            </div>
        </span>
        
    );
};
