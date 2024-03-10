import React, { useState, useEffect }  from "react";
import QuestionBox from "../components/QuestionBox";
import ScenarioBox from "../components/ScenarioBox";
import data from "../scenarios.json";
import {InflationCalc, DevelopingGraph, Investing, NatTool} from "./scripts";
import CanvasJSReact from '@canvasjs/react-charts';
import AdventureRequestFont from "../assets/fonts/AdventureRequest-j8W9.ttf";
import "./style.css";

const styles={
    /* answers:{
        backgroundColor:"#e5e5e5",
        borderRadius:"10px",
        display:'inline-block',
        cursor: 'pointer',
        margin:'10px',
        paddingLeft: '10px',
        paddingRight: '10px'
    }, */
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
        {currentDivIndex!=0 &&
            <div class="answers" onClick={handleBackClick}>Back</div>  
        }
            
            {currentDiv.type == "question" &&
            <div>
                <h1>{currentDiv.question}</h1>
                <p>{currentDiv.scenario}</p>
                <h3>Answers</h3>
                <div style={styles.answerContainer}>
                {/* <div style={styles.answers} onClick={handleNextClick}>
                        <p key={index}>{answer}</p>
                    </div> */}
                {currentDiv.answers.map((answer, index) => (
                    <React.Fragment>
                    <div class="answers" onClick={handleNextClick}>
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
                    <h1>{currentDiv.explanation[0]}</h1>
                    {currentDiv.explanation.slice(1).map((exp, index) => (
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
                        {currentDiv.name == "natTool" &&(
                            <div>
                                <NatTool />
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
                    {currentDiv.name == "investingGraph" &&(
                            <div style={styles.graph}>
                                <Investing />
                            </div>
                    )}
                </div>            
            }
            {currentDiv.image == true &&
                <div>
                    {currentDiv.name == "assetReturns" &&(
                        <div style={styles.graph}>
                            <img src="https://github.com/lewissimmonds/finance-adventure-game/blob/ant-test/frontend/src/Blackrock_asset_returns.png?raw=true"></img>
                        </div>
                    )}
                </div>            
            }
            {currentDiv.type == "answer" &&
                <div>
                    <div class="answers" onClick={handleNextClick}>Next</div> 
                </div>            
            }
            
             
        </div>
    );
  };

export default TestPage;
