import React from 'react';
import styled, { ThemeProvider } from 'styled-components'
import greenCheck from '../../assets/images/greenCheck'

const CheckMark = styled.img`
  
  max-height: ${ props => props.showStatusCheck.toString() == "true" ? "100%" : "0px"};
  opacity: ${ props => props.showStatusCheck.toString() == "true" ? "1" : "0"};
  transition: opacity .4s;
  transition-timing-function: ease-out;
  padding-left: 6px;
  height: 11px;

`;

const CheckMark2 = styled.img`
  
  max-height: ${ props => props.showStatusCheck2.toString() == "true" ? "100%" : "0px"};
  opacity: ${ props => props.showStatusCheck2.toString() == "true" ? "1" : "0"};
  transition: opacity .4s;
  transition-timing-function: ease-out;
  padding-left: 6px;
  height: 11px;

`;

const StepsContainer = styled.div`
    
        
        display: grid;
        
        
        height: 75px;
        min-width: 300px;
        max-width: 750px;
        width: 100vw;
        //padding: 20px;
        margin: 0 auto;
        align-items:center;
        //grid-gap: 5px;
        justify-content: center;
        grid-template-columns: repeat(18, 1fr);
        grid-template-rows: 1fr 1fr 8px;
        grid-template-areas:
        
            " step1 step1 step1 step1 step1 step1 step2 step2 step2 step2 step2 step2 step3 step3 step3 step3 step3 step3"
            "  .      .     b1    b1   bar1  bar1  bar1  bar1   b2a    b2b   bar2   bar2  bar2  bar2  b3    b3      .     .  "
            "  .      .     b1    b1   bar1  bar1  bar1  bar1   b2a    b2b   bar2   bar2  bar2  bar2  b3    b3      .     .  ";
    
    
    `;

    const Step1 = styled.div`
        
        text-align: center;
        grid-area: step1;
        //color: #5fcc61;
        font-size: .666em;
        
        
        
    `;

    const Step2 = styled.div`
            
        text-align: center;
        grid-area: step2;
        //color: #5fcc61;
        font-size: .666em;



    `;

    const Step3 = styled.div`
        
        text-align: center;
        grid-area: step3;
        //color: #5fcc61;
        font-size: .666em;
        
        
        
    `;

    const Bullet1wrapper = styled.div`
    
        grid-area: 2/3/3/5;
        
        justify-self: center;
        
    
    
    `;

    const Bullet2wrapper = styled.div`
        
        grid-area: 2/9/3/11;
        justify-self: center;
        
        z-index: 2;
        //width: 40%;
        
        


    `;

    const Bullet3wrapper = styled.div`
    
        grid-area: 2/15/3/17;
        
        //width: 40%;
        justify-self: center;
    
    `;


    const Bullet1 = styled.div`

        display: flex;
        justify-content: center;
        align-items: center;
        
        
        text-align: center;
        
        
        border-radius: 100%;
        
        color: white;
        background-color: #5fcc61;
        //display: inline-block;
        position: relative;
        padding: 2px 7px;
        transition: background-color 500ms;
        line-height: 100%;
        z-index: 2;
        
        

            &:before{
                content: "";
                display: inline-block;
                width: 1px;
                height: 0;
                padding-bottom: calc(100% / (1/1));
            }  
    
    `;

    const Bullet2 = styled(Bullet1)`
    
        border: ${props => props.bullet1 == "COMPLETED" ? "1px solid #5fcc61" : "1px solid gray"};
        color: ${props => props.bullet1 == "COMPLETED" ? props.bullet2 == "COMPLETED" ? "white" : "white" : "gray"};
        background-color: ${props => props.bullet1 == "COMPLETED" ? "#5fcc61" : "#fcfcfc"};
        filter: ${props => props.bullet1 == "COMPLETED" ? "blur(0px)" : "blur(.2px)"};
        //min-width: ${props => props.bullet1 == "COMPLETED" ? "50px" : "35px" };
    
    `;

    const Bullet3 = styled(Bullet1)`
        
        border: ${props => props.bullet2 == "COMPLETED" ? "1px solid #5fcc61" : "1px solid gray"};
        color: ${props => props.bullet2 == "COMPLETED" ? "white" : "gray"};
        background-color: ${props => props.bullet2 == "COMPLETED" ? "#5fcc61" : "#fcfcfc"};
        //min-width: ${props => props.bullet2 == "COMPLETED" ? "50px" : "35px" };
        filter: ${props => props.bullet2 == "COMPLETED" ? "blur(0px)" : "blur(.2px)"};

    `;

    const Bar1 = styled.div`
    
        height: ${props => props.bullet1 == "COMPLETED" ? "4px" : "1.1px"};
        width: 100%;
        justify-self: center;
        background-color: ${props => props.bullet1 == "COMPLETED" ? "#5fcc61" : "gray"};
        grid-area: 2/4/3/10;
        filter: ${props => props.bullet1 == "COMPLETED" ? "blur(0px)" : "blur(.8px)"};
        //padding-left: 10px;
        
    `;

    const Bar2 = styled.div`
        
        height: ${props => props.bullet2 == "COMPLETED" ? "4px" : "1.1px"};
        width: 100%;
        justify-self: center;
        background-color: ${props => props.bullet2 == "COMPLETED" ? "#5fcc61" : "gray"};
        grid-area: 2/10/3/16;
        filter: ${props => props.bullet2 == "COMPLETED" ? "blur(0px)" : "blur(.8px)"};

    `;


function Steps(props){

   
    
    
    
    
    

    
    return (
        
        
        <StepsContainer className="sticky-inner">

            <Step1>
                
                {props.bullet1msg}
                <CheckMark showStatusCheck={props.showStatusCheck} src={greenCheck}></CheckMark>
                
            </Step1>

            <Step2>
                
                {props.bullet2msg}
                <CheckMark2 showStatusCheck2={props.showStatusCheck2} src={greenCheck}></CheckMark2>
                
            </Step2>

            <Step3>
                
                {props.bullet2 == "COMPLETED" ? "YOU'RE AWESOME !!!" : "Finish"}
                
            </Step3>


            <Bullet1wrapper bullet1={props.bullet1} bullet2={props.bullet2} >

                <Bullet1 bullet1={props.bullet1} bullet2={props.bullet2}>
                    <h5 style={{padding: "5px"}}>1</h5>
                </Bullet1>
                
            </Bullet1wrapper>    


            <Bullet2wrapper bullet1={props.bullet1} bullet2={props.bullet2} >
                <Bullet2 bullet1={props.bullet1} bullet2={props.bullet2}>
                <h5 style={{padding: "5px"}}>2</h5>
                </Bullet2>   
            </Bullet2wrapper>

            
            <Bullet3wrapper bullet1={props.bullet1} bullet2={props.bullet2} >
                <Bullet3 bullet1={props.bullet1} bullet2={props.bullet2}>
                <h5 style={{padding: "5px"}}>3</h5>
                </Bullet3>  
            </Bullet3wrapper>              

            <Bar1 bullet1={props.bullet1} bullet2={props.bullet2}>
                
            </Bar1>
            <Bar2 bullet1={props.bullet1} bullet2={props.bullet2}>
                
            </Bar2>
              



        </StepsContainer>
        
        
        
    );  
}


export default Steps;