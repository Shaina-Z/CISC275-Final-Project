import React, {useState} from "react";
import {Button} from "react-bootstrap";

export function ToBasic(): React.JSX.Element{
    const [page, setPage] = useState<string>("");
    return(
        <span>
            <Button
                onClick={() =>{
                    setPage("BasicQuestions.tsx");
                }}
                >
                    Basic Quiz
                </Button>
                to {page}.
        </span>
    );
}