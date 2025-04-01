import React, {useState} from "react";
import {Button} from "react-bootstrap";

export function BasicButton(): React.JSX.Element{
    const [page, setPage] = useState<string>("");
    return(
        <span>
            <Button
                onClick={() =>{
                    setPage("BasicQuestions.tsx");
                    console.log("User was sent to the Basic Page");
                }}
                >
                    Basic Quiz
                </Button>
                to {page}.
        </span>
    );
}