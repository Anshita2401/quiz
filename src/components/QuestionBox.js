import React, { useState } from "react";

const QuestionBox = ({question, options, selected }) => {
    const [answer , setAnswer] = useState(options);
    return (
        <div className="questionBox">
            <div className="question">{question}</div>
            {answer.map((text,index) => (
                <button hey={index} className="answerBtn"
                onClick={()=> {
                    setAnswer([text]);
                    selected(text);
                }}
                >
                    {text}
                </button>
            ))}
        </div>
    );
};

export default QuestionBox;