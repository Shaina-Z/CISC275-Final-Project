import './Pages.css';
import stockImage3 from './stockimg3.png'
import genResponse from './GPT';
import usagi from './usagiwithglasses.png'

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
        </span>
    );
};
