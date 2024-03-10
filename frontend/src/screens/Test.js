import React, { useState, useEffect }  from "react";
import QuestionBox from "../components/QuestionBox";
import ScenarioBox from "../components/ScenarioBox";
import data from "../scenarios.json";
import {InflationCalc, DevelopingGraph} from "./scripts";
import CanvasJSReact from '@canvasjs/react-charts';

const styles={
    answers:{
        backgroundColor:"#e5e5e5",
        borderRadius:"10px",
        display:'inline-block',
        cursor: 'pointer',
        margin:'10px',
        padding:'5px',
    },
    answerContainer:{
        display:"flex",
    },
    graph:{
        width:"50vw",
    }
}

const TestPage = () => {
    const [divs, setDivs] = useState(data);
    const [currentDivIndex, setCurrentDivIndex] = useState(0);

    const handleNextClick = () => {
      if (currentDivIndex < divs.length - 1) {
        setCurrentDivIndex(currentDivIndex + 1);
        
      } else {
        console.log("End of scenarios reached");
      }
    };

    const handleBackClick = () => {
        if (currentDivIndex < divs.length - 1) {
          setCurrentDivIndex(currentDivIndex - 1);
          
        } else {
          console.log("End of scenarios reached");
        }
      };
    
    const currentDiv = divs[currentDivIndex];    
    
    return(
        <div>
            
            {currentDiv.type == "question" &&
            <div>
                <h1>{currentDiv.question}</h1>
                <p>{currentDiv.scenario}</p>
                <h3>Answers</h3>
                <div style={styles.answerContainer}>
                {currentDiv.answers.map((answer, index) => (
                    <React.Fragment>
                    <div style={styles.answers} onClick={handleNextClick}>
                    <p key={index}>{answer}</p>
                    </div>
                    <br />
                    </React.Fragment>
                ))}
                </div>               
            </div>                      
            }
            {currentDiv.type == "answer" &&
                <div>
                    {currentDiv.explanation.map((exp, index) => (
                        <p>{exp}</p>
                    ))}
                </div>            
            }
            {currentDiv.script == true &&(
                    <div>
                        {currentDiv.name == "inflationScript" &&(
                            <div>
                                <InflationCalc />
                            </div>
                        )}
                    </div>
            )}
            {currentDiv.graph == true &&
                <div>
                    {currentDiv.name == "developingGraph" &&(
                            <div style={styles.graph}>
                                <DevelopingGraph />
                            </div>
                    )}
                </div>            
            }
            {currentDiv.image == true &&
                <div>
                    {currentDiv.name == "assetReturns" &&(
                        <div>
                            <img src="https://github.com/lewissimmonds/finance-adventure-game/blob/ant-test/frontend/src/Blackrock_asset_returns.png"></img>
                        </div>
                    )}
                </div>            
            }
            {currentDivIndex!=0 &&
                <button onClick={handleBackClick}>Back</button>  
            }
            {currentDiv.type == "answer" &&
                <div>
                    <button onClick={handleNextClick}>Next</button> 
                </div>            
            }
            
             
        </div>
    );
  };

export default TestPage;
