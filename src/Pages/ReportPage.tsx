import { useState } from 'react';
import './Pages.css';
import usagi from './usagiwithglasses-removebg-preview.png';
import hourglass from './time-9132_256.gif';
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
    setGPTReport,
}: reportStates): React.JSX.Element{
    const [chat,setChat] = useState<string>("")
    function updateChat(event: React.ChangeEvent<HTMLTextAreaElement>){
        setChat(event.target.value);
    }
    return(
        <span>
            {gptReport === "" ? <div className='loading-container'>
                <img src={hourglass} alt="Loading..." />
            </div>: null}
        <div className='report-image'><img
          src={usagi}
          alt="usagi" 
          style={{
            zIndex: 10000,
            position: 'fixed',
            width: '200px',
            height: '200px',
            top: '205px',
            left: '130px',
          }}
          hidden={notReport}/></div>
            {gptReport !== "" ? <div className="Report-Page">
            <h1 className="report-header">Your Results: </h1>
            <p className="report-summary">
                    {gptReport}
                </p>
                <Form.Group controlId="chatbox">
                <Form.Label>Have more questions?a ask our career bot here!</Form.Label>
                <Form.Control
                    as="textarea"
                    rows={3}
                    name="q3"
                    value={chat}
                    onChange={updateChat} />
                </Form.Group>
                <small></small>
            </div> : null}
        </span>
        
    );
};
