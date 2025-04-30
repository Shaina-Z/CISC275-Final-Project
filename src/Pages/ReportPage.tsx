import './Pages.css';
import stockImage3 from './stockimg3.png'

interface reportStates {
    notReport: boolean;
    setReport: React.Dispatch<React.SetStateAction<boolean>>;
  }

export function ReportPage({
    notReport,
    setReport
}: reportStates): React.JSX.Element{
    return(
        <span>
            <div className="Report-Page">
            <h1 className="report-header">Your Results: </h1>
            <p className="report-summary">
                    Based on your responses, you show strong preferences for analytical and creative roles. 
                    Careers in data science, design, or strategy might be great fits for your personality and interests.
                </p>
                <img hidden={notReport}
                src={stockImage3}
                alt="stockimage3" 
                style={{
                    zIndex: 8888,
                    position: 'absolute',
                    bottom: 60,    
                    right: 20,
                    width: '160px',
                    height: 'auto',
                }}/>
            </div>
        </span>
    );
};
