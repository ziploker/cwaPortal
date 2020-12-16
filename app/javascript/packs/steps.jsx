import React from 'react';
import styled, { ThemeProvider } from 'styled-components'



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
        color: "#28a745";
        
        
        
    `;

    const Step2 = styled.div`
            
        text-align: center;
        grid-area: step2;
        color: "#28a745";



    `;

    const Step3 = styled.div`
        
        text-align: center;
        grid-area: step3;
        color: "#28a745";
        
        
        
    `;

    const Bullet1wrapper = styled.div`
    
        grid-area: 2/3/3/5;
        
        justify-self: center;
        
    
    
    `;

    const Bullet2wrapper = styled.div`
        
        grid-area: 2/9/3/11;
        justify-self: center;
        //padding: ${props => props.bulletStatus.bullet1 == "COMPLETED" ? props.bulletStatus.bullet2 == "COMPLETED" ? "10px 10px 10px 10px" : "0px" : "10px 10px 10px 10px"};
        z-index: 2;
        //width: 40%;
        
        


    `;

    const Bullet3wrapper = styled.div`
    
        grid-area: 2/15/3/17;
        //padding: ${props => props.bulletStatus.bullet2 == "COMPLETED" ? "0px" : "10px 10px 10px 10px"};
        //width: 40%;
        justify-self: center;
    
    `;


    const Bullet1 = styled.div`

        display: flex;
        justify-content: center;
        align-items: center;
        //min-width: ${props => props.bulletStatus.bullet1 == "COMPLETED" ? "35px" : "50px" };
        
        text-align: center;
        
        
        border-radius: 100%;
        
        color: white;
        background-color: #28a275;
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
    
        border: ${props => props.bulletStatus.bullet1 == "COMPLETED" ? "4px solid #28a275" : "1px solid gray"};
        color: ${props => props.bulletStatus.bullet1 == "COMPLETED" ? props.bulletStatus.bullet2 == "COMPLETED" ? "white" : "white" : "gray"};
        background-color: ${props => props.bulletStatus.bullet1 == "COMPLETED" ? "#28a275" : "#D8DED9"};
        filter: ${props => props.bulletStatus.bullet1 == "COMPLETED" ? "blur(0px)" : "blur(.2px)"};
        //min-width: ${props => props.bulletStatus.bullet1 == "COMPLETED" ? "50px" : "35px" };
    
    `;

    const Bullet3 = styled(Bullet1)`
        
        border: ${props => props.bulletStatus.bullet2 == "COMPLETED" ? "4px solid #28a275" : "1px solid gray"};
        color: ${props => props.bulletStatus.bullet2 == "COMPLETED" ? "white" : "gray"};
        background-color: ${props => props.bulletStatus.bullet2 == "COMPLETED" ? "#28a275" : "#D8DED9"};
        //min-width: ${props => props.bulletStatus.bullet2 == "COMPLETED" ? "50px" : "35px" };
        filter: ${props => props.bulletStatus.bullet2 == "COMPLETED" ? "blur(0px)" : "blur(.2px)"};

    `;

    const Bar1 = styled.div`
    
        height: ${props => props.bulletStatus.bullet1 == "COMPLETED" ? "4px" : "1.1px"};
        width: 100%;
        justify-self: center;
        background-color: ${props => props.bulletStatus.bullet1 == "COMPLETED" ? "#28a275" : "gray"};
        grid-area: 2/4/3/10;
        filter: ${props => props.bulletStatus.bullet1 == "COMPLETED" ? "blur(0px)" : "blur(.8px)"};
        //padding-left: 10px;
        
    `;

    const Bar2 = styled.div`
        
        height: ${props => props.bulletStatus.bullet2 == "COMPLETED" ? "4px" : "1.1px"};
        width: 100%;
        justify-self: center;
        background-color: ${props => props.bulletStatus.bullet2 == "COMPLETED" ? "#28a275" : "gray"};
        grid-area: 2/10/3/16;
        filter: ${props => props.bulletStatus.bullet2 == "COMPLETED" ? "blur(0px)" : "blur(.8px)"};

    `;


function Steps({bulletStatus, setBulletStatus}){

   
    
    
    
    
    

    
    return (
        
        
        <StepsContainer className="sticky-inner">

            <Step1>
                
                Enter address
                
            </Step1>

            <Step2>
                
                Send Message
                
            </Step2>

            <Step3>
                
                {bulletStatus.bullet2 == "COMPLETED" ? "YOU'RE AWESOME !!!" : "Finish"}
                
            </Step3>


            <Bullet1wrapper bulletStatus={bulletStatus} >

                <Bullet1 bulletStatus={bulletStatus}>
                    <h5 style={{padding: "5px"}}>1</h5>
                </Bullet1>
                
            </Bullet1wrapper>    


            <Bullet2wrapper bulletStatus={bulletStatus} >
                <Bullet2 bulletStatus={bulletStatus}>
                <h5 style={{padding: "5px"}}>2</h5>
                </Bullet2>   
            </Bullet2wrapper>

            
            <Bullet3wrapper bulletStatus={bulletStatus} >
                <Bullet3 bulletStatus={bulletStatus}>
                <h5 style={{padding: "5px"}}>3</h5>
                </Bullet3>  
            </Bullet3wrapper>              

            <Bar1 bulletStatus={bulletStatus}>
                
            </Bar1>
            <Bar2 bulletStatus={bulletStatus}>
                
            </Bar2>
              



        </StepsContainer>
        
        
        
    );  
}


export default Steps;