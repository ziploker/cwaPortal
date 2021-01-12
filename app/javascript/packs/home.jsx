import React, {useEffect, useState} from 'react'
import styled, { ThemeProvider } from 'styled-components'
import { Parallax, Background } from 'react-parallax';
import slide1 from '../../assets/images/crew2dark'
import slide2 from '../../assets/images/covid'
import slide3 from '../../assets/images/building'
import leftArrowSmall from '../../assets/images/leftArrowSmall'
import leftArrowSmallActive from '../../assets/images/leftArrowSmallActive'
import rightArrowSmall from '../../assets/images/rightArrowSmall'
import rightArrowSmallActive from '../../assets/images/rightArrowSmallActive'
import rightArrow from '../../assets/images/rightArrow'
import Login from './pages/login'
import useFitText from "use-fit-text";
import {gsap} from 'gsap'

let targets = null
let count = 0;
let waitCuzLeftOrRightWasClicked = false;

const HomeWrapper = styled.div`

    margin-top: 45px;
    position: relative;
    height: 100%;
    
    

`;

const TopContent = styled.div`
    margin: 0 auto;
    text-align: center;
    display: grid;
    //width: 100vw;
    //height: 100vh;
    display: absolute;
    top: 0;
    left: 0;
    right: 0;
    max-height: 500px;
    justify-content: center;
    justify-items: center;
    align-items: center;
    grid-row-gap: 30px;
    grid-template-columns: 10% minmax(200px, 1fr) 10%;
    grid-template-rows: 75px minmax(100px, 30%) minmax(20px, auto) minmax(0px, 1fr);

    grid-template-areas:

        ". .  ."
        "headline headline headline"
        "call2action call2action call2action"
        "navigationLeft . navigationRight"
        ". . ."
    ;



    position: relative;
    overflow: hidden;

`;

const Button = styled.button`

  background: linear-gradient(to bottom, #6371c7, #5563c1);
  /* border-color: ${props => props.isBtnDisabled ? "#cccccc" : "#3f4eae"} ;*/
  border-radius: 3px;
  padding: 1rem;
  color: white;
  font-weight: 700;
  
  margin-bottom: 1rem;
  font-size: 0.8rem;

  align-self: bottom;
  cursor: pointer;
  grid-area: call2action;
  text-decoration: none;
  width: 11em;
  border-color: #3f4eae;


`;

const Container = () => (
    <Parallax strength={200}>

        <Background className="custom-bg">
            <img src={crowd} alt="large crowd" />
        </Background>
    
        <TopContent>
        
            <h1 style={{gridArea: "headline", fontSize: "3em", lineHeight: "1.1em", color: "#EDEAEA", fontFamily: "'Quantico', sans-serif"}}>CWA members guide to 2021 benefits.</h1>
            <Button>READ MORE</Button>
            <img style={{cursor: "pointer", gridArea: "navigationLeft", justifySelf: "end", alignSelf: "center"}} src={leftArrowSmall}></img>
            <img style={{cursor: "pointer", gridArea: "navigationRight", justifySelf: "start", alignSelf: "center"}} src={rightArrow}></img>
        </TopContent>
    </Parallax>
);

const BoxContainer = styled.div`

    width: 100vw;
    height: 92vh;
    min-height: 100%;
    
    position: relative;
    
    overflow: hidden;
    


`;

const Box = styled.div`

    position: absolute;
    width: 100%;
    height: 100%;
    display: grid;
    place-items: center;


    //background-image: url(${crowd});
    //background-size: contain;
    //background-position: center;
    //background-repeat: no-repeat;
    margin: 0 auto;
    text-align: center;
    display: grid;
    //width: 100vw;
    //height: 100vh;
    display: absolute;
    top: 0;
    left: 0;
    right: 0;
    min-height: 500px;
    justify-content: center;
    justify-items: center;
    align-items: center;
    grid-row-gap: 40px;
    grid-template-columns: 10% minmax(200px, 1fr) 10%;
    grid-template-rows: 1fr minmax(100px, auto) minmax(20px, auto)  minmax(0px, 1fr);

    grid-template-areas:

        ". .  ."
        "headline headline headline"
        "call2action call2action call2action"
       
        ". . ."
    ;



    
    overflow: hidden;




`;


const Box2 = styled(Box)`

    //background-image: url(${crowd2});
    

`;

const LeftArrowImage = styled.img`

    cursor: pointer;
    position: absolute;
    left: 20px;
    bottom: 50vh; 
    


`;
const LeftArrowImageActive = styled(LeftArrowImage)`

    opacity: ${props => props.leftHover ? "1" : "0" };
    transition: opacity .2s linear;
    transform: ${props => props.leftHover ? 'scale(1.2,1.2)' : 'scale(1,1)'}
    
    

`;

const RightArrowImage = styled.img`

    cursor: pointer;
    position: absolute;
    right: 20px;
    bottom: 50vh; 
    


`;
const RightArrowImageActive = styled(RightArrowImage)`

    opacity: ${props => props.rightHover ? "1" : "0" };
    transition: opacity .2s linear;
    transform: ${props => props.rightHover ? 'scale(1.2,1.2)' : 'scale(1,1)'}
    
    

`;



function Home(props){

    const [screenIsAtTop, setScreenIsAtTop] = React.useState(true);
    const { fontSize, textRef } = useFitText();
    const [leftHover, setLeftHover] = React.useState(false);
    const [rightHover, setRightHover] = React.useState(false);

    
    

    console.log("<---- INTRO HOME  --------------------------------->")
    console.log("window.pageYOffset = " + window.pageYOffset)

    
    
    
    
    
    useEffect( () => {

        window.addEventListener('scroll', handleScroll);

        console.log("<---- IN USE EFFECT HOOK --------------------------------->")
        console.log("window.pageYOffset = " + window.pageYOffset)
        
        targets = document.querySelectorAll(".box");
        console.log("TARGETS IS" + targets.toString());
        
        gsap.set(targets, { xPercent: -100 });
        gsap.set(targets[0], { xPercent: 0 });
        
        function slideIt() {

            console.log("<---- IN slideIT --------------------------------->")
            console.log("window.pageYOffset = " + window.pageYOffset)
            console.log("SCREENisATTOP = " + screenIsAtTop.toString())
            
            if (window.pageYOffset < 206 && !waitCuzLeftOrRightWasClicked){

                gsap.to(targets[count], { xPercent: 100 });
                count = count < targets.length - 1 ? ++count : 0;
                gsap.fromTo(targets[count], { xPercent: -100 }, { xPercent: 0 });
                gsap.to({}, { duration: 5, onComplete: slideIt });

            }else{
                console.log("EEELLLSSSEE")
                gsap.to({}, { duration: 5, onComplete: slideIt });
            }
        }
        
        gsap.delayedCall(2, () => slideIt());
        

        return () => window.removeEventListener("scroll", handleScroll);



    },[],); 



    function handleScroll(){
        
        console.log("<---- IN Handle scroll --------------------------------->")
        console.log("window.pageYOffset = " + window.pageYOffset)
        
        if (window.pageYOffset >= 205){
            console.log("itwasbigger")
            setScreenIsAtTop(false)
            
        }else{
            setScreenIsAtTop(true)
            console.log("itwasSmaller")
        }
    
    }

    function leftClicked(){

        console.log("LEFT was clicked and ")

        if (waitCuzLeftOrRightWasClicked == false){

            waitCuzLeftOrRightWasClicked = true;

            setTimeout(()=> {
                
                waitCuzLeftOrRightWasClicked = false
            }, 7000)

            gsap.to(targets[count], { xPercent: -100 });
            count = count < targets.length - 1 ? ++count : 0;
            gsap.fromTo(targets[count], { xPercent: 100 }, { xPercent: 0 });

        }else{

            gsap.to(targets[count], { xPercent: -100 });
            count = count < targets.length - 1 ? ++count : 0;
            gsap.fromTo(targets[count], { xPercent: 100 }, { xPercent: 0 });

        }
        
    }

    function rightClicked(){

        if (waitCuzLeftOrRightWasClicked == false){

            waitCuzLeftOrRightWasClicked = true;

            setTimeout(()=> {
                
                waitCuzLeftOrRightWasClicked = false
            }, 7000)

            gsap.to(targets[count], { xPercent: 100 });
            count = count < targets.length - 1 ? ++count : 0;
            gsap.fromTo(targets[count], { xPercent: -100 }, { xPercent: 0 });

        }else{

            gsap.to(targets[count], { xPercent: 100 });
            count = count < targets.length - 1 ? ++count : 0;
            gsap.fromTo(targets[count], { xPercent: -100 }, { xPercent: 0 });


        }


    }
    
    function leftOnMouseOverHandler(){

        setLeftHover(true);
        console.log("LLEEFFTT inonmouseoverhandlerr")

    }

    function leftOnMouseOutHandler(){

        setLeftHover(false);

    }


    function rightOnMouseOverHandler(){

        setRightHover(true);
        console.log("RRIIGGHHT inonmouseoverhandlerr")

    }

    function rightOnMouseOutHandler(){

        setRightHover(false);

    }
    
    

    
    return (
        <>
            <HomeWrapper>
            
                <BoxContainer>
                    
                    <Box className="box">

                        <img style={{zIndex: "-1", position: "absolute", minWidth: "666px", width: "100%", height: "100%"}} src={slide1}></img>
                        <h1 ref={textRef} style={{fontSize, padding: "0px 60px", gridArea: "headline", fontSize: "3em", lineHeight: "1.1em", color: "#EDEAEA", fontFamily: "'Quantico', sans-serif"}}>CWA members guide to new 2021 benefits.</h1>
                        <Button>READ MORE</Button>

                        
                    </Box>

                    <Box className="box">

                        <img style={{zIndex: "-1", position: "absolute", minWidth: "666px", width: "100%", height: "100%"}} src={slide2}></img>
                        <h1 ref={textRef} style={{fontSize, padding: "0px 60px", gridArea: "headline", fontSize: "3em", lineHeight: "1.1em", color: "#EDEAEA", fontFamily: "'Quantico', sans-serif"}}>COVID-19 resources.</h1>
                        <Button>LEARN MORE</Button>
                        
                    </Box>

                    <Box className="box">

                        <img style={{zIndex: "-1", position: "absolute", minWidth: "666px", width: "100%", height: "100%"}} src={slide3}></img>
                        <h1 ref={textRef} style={{fontSize, padding: "0px 60px", gridArea: "headline", fontSize: "3em", lineHeight: "1.1em", color: "#EDEAEA", fontFamily: "'Quantico', sans-serif"}}>AT&T and Verizon Are Spending Big to Catch Up to T-Mobile.</h1>
                        <Button>READ MORE</Button>
                        
                    </Box>


                    <LeftArrowImage 
                        src={leftArrowSmall} 
                        
                    />

                    <LeftArrowImageActive leftHover={leftHover}
                        src={leftArrowSmallActive} 
                        onClick={leftClicked}
                        onMouseOver={leftOnMouseOverHandler}
                        onMouseOut={leftOnMouseOutHandler}
                        
                    />      

                    
                    
                    <RightArrowImage 
                        src={rightArrowSmall} 
                        
                    />

                    <RightArrowImageActive rightHover={rightHover}
                        src={rightArrowSmallActive} 
                        onClick={rightClicked}
                        onMouseOver={rightOnMouseOverHandler}
                        onMouseOut={rightOnMouseOutHandler}
                        
                    />      
                        
                </BoxContainer>
                
            
            </HomeWrapper>

            <Login handleSuccessfulAuth={props.handleSuccessfulAuth} setLoginClicked={props.setLoginClicked} loginClicked={props.loginClicked} />
        </>
    );  
}


export default Home;