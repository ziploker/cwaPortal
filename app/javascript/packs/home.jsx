import React, {useEffect, useState} from 'react'
import styled, { ThemeProvider } from 'styled-components'
//import { Parallax, Background } from 'react-parallax';
import slide1 from '../../assets/images/crew2dark'
import slide2 from '../../assets/images/covid'
import slide3 from '../../assets/images/building'
import leftArrowSmall from '../../assets/images/leftArrowSmall'
import leftArrowSmallActive from '../../assets/images/leftArrowSmallActive'
import rightArrowSmall from '../../assets/images/rightArrowSmall'
import rightArrowSmallActive from '../../assets/images/rightArrowSmallActive'
import rightArrow from '../../assets/images/rightArrow'
import Login from './pages/login'
import ProgressBar from '../packs/pages/progressBar'
import useFitText from "use-fit-text";
import {gsap} from 'gsap'
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);
gsap.core.globals('ScrollTrigger', ScrollTrigger);

import ScrollbarSize from 'react-scrollbar-size'


let box0 = null;
let box1 = null;
let box2 = null;

let img0 = null;
let img1 = null;
let img2 = null;

let tl = null;

let tlLeft0 = null
let tlLeft1 = null
let tlLeft2 = null
let tlLeftSet = null

let tlRight0 = null
let tlRight1 = null
let tlRight2 = null
let tlRightSet = null

let tlLeftContinueFrom0 = null
let tlLeftContinueFrom1 = null
let tlLeftContinueFrom2 = null

//let count = 0;
//let waitCuzLeftOrRightWasClicked = false;

const HomeWrapper = styled.div`

    margin-top: 45px;
    position: relative;
    height: 100%;
    min-height: 500px;
    

`;

const BoxContainer = styled.section`

    width: 100vw;
    height: 93vh;
    min-height: 450px;
    
    position: relative;
    
    overflow: hidden;
    


`;


const Box = styled.div`

    position: absolute;
    width: 100%;
    height: 100%;
    display: grid;
    place-items: center;

    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    
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
    grid-template-rows: 1fr minmax(100px, auto) minmax(20px, auto)  minmax(20px, 1fr);

    grid-template-areas:

        ". .  ."
        "headline headline headline"
        "call2action call2action call2action"
       
        ". progressBar ."
    ;



    
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







const LeftArrowImage = styled.img`

    cursor: pointer;
    position: absolute;
    left: 20px;
    bottom: 50vh; 
    


`;
const LeftArrowImageActive = styled(LeftArrowImage)`

    opacity: ${props => props.leftHover ? "1" : "0" };
    transition: opacity .2s linear;
    transform: ${props => props.leftHover ? 'scale(1.2,1.2)' : 'scale(1,1)'};
    
    

`;

const RightArrowImage = styled.img`

    cursor: pointer;
    position: absolute;
    right: ${props => props.currentWidth > 0 ? props.currentWidth + 20 + "px" : "20px"};
    bottom: 50vh; 
    


`;

const RightArrowImageActive = styled(RightArrowImage)`

    opacity: ${props => props.rightHover ? "1" : "0" };
    transition: opacity .2s linear;
    transform: ${props => props.rightHover ? 'scale(1.2,1.2)' : 'scale(1,1)'};
    
    right: ${props => props.currentWidth > 0 ? props.currentWidth + 20 + "px" : "20px"};

`;





function Home(props){

    // const [screenIsAtTop, setScreenIsAtTop] = React.useState(true);
    const { fontSize, textRef } = useFitText();
    const [leftHover, setLeftHover] = React.useState(false);
    const [rightHover, setRightHover] = React.useState(false);

    const [count, setCount] = React.useState(0);

    const [waitCuzLeftOrRightWasClicked, setWaitCuzLeftOrRightWasClicked] = React.useState(false);
    const [currentHeight, setHeight] = useState(0);
    const [currentWidth, setWidth] = useState(0);
    

    console.log("<---- INTRO HOME  --------------------------------->")
    //console.log("window.pageYOffset = " + window.pageYOffset)

    
    function setCounter0(){ setCount(0)};
    function setCounter1(){ setCount(1)};
    function setCounter2(){ setCount(2)};
    
    
    
    useEffect( () => {

        console.log("<---- IN USE EFFECT HOOK ONE --------------------------------->")

       
        
        window.addEventListener('scroll', handleScroll);

        
        
        box0 = document.querySelectorAll("#box0");
        box1 = document.querySelectorAll("#box1");
        box2 = document.querySelectorAll("#box2");

        let section = document.querySelectorAll(".boxContainer") 

        /////////////////// heading shift ///////////////////////////////////

        




            
        ///////////////////  PARALAX ///////////////////////////////////////   
        gsap.set(box0, {backgroundPosition: `50% 0px`})
        gsap.to(box0, {
            backgroundPosition: `50% ${innerHeight / 2}px`,
            ease: "none",
            scrollTrigger: {
                trigger: section,
                start: "top top", 
                end: "bottom top",
                scrub: true
            }
        });
            



        gsap.set(box1, {backgroundPosition: `50% 0px`})
        gsap.to(box1, {
            backgroundPosition: `50% ${innerHeight / 2}px`,
            ease: "none",
            scrollTrigger: {
                trigger: section,
                start: "top top", 
                end: "bottom top",
                scrub: true
            }
        });
    
          
        

        gsap.set(box2, {backgroundPosition:`50% 0px`})
        gsap.to(box2, {
            backgroundPosition: `50% ${innerHeight / 2}px`,
            ease: "none",
            scrollTrigger: {
                trigger: section,
                start: "top top", 
                end: "bottom top",
                scrub: true
            }
        });
            
        
        
        tl = gsap.timeline({repeat: -1});
        
        tl.set(box1, { xPercent: -100 });
        tl.set(box2, { xPercent: -100 });
        tl.set(box0, { xPercent: 0 });
        
        tl.addLabel("autoStartFromZero")
        tl.call(setCounter0);
        tl.fromTo(box0, { xPercent: 0 }, { xPercent: 100 }, "+=6");
        tl.fromTo(box1, { xPercent: -100 }, {xPercent: 0}, "<" );
        tl.addLabel("autoStartFromOne")
        tl.call(setCounter1, null, "<-.05");
        tl.fromTo(box1, { xPercent: 0 }, {xPercent: 100}, "+=6" );
        tl.fromTo(box2, { xPercent: -100 }, {xPercent: 0}, "<");
        tl.addLabel("autoStartFromTwo")
        tl.call(setCounter2, null, "<-.05");
        tl.fromTo(box2, { xPercent: 0 }, {xPercent: 100}, "+=6");
        tl.fromTo(box0, { xPercent: -100 }, {xPercent: 0}, "<");
        tl.call(setCounter0, null, "<-.05");


        //////////////left button logic ///////////////////////////

        tlLeft0 = gsap.timeline({repeat: 0, paused: true});
        tlLeft0.fromTo(box0, { xPercent: 0 }, { xPercent: -100 });
    
        tlLeft0.fromTo(box2, { xPercent: 100 }, {xPercent: 0}, "<" );
        tlLeft0.call(setCounter2, null, "<-.05");


        // tlLeftContinueFrom2 = gsap.timeline({repeat: -1, delay: 5, paused: true});
            
        

        // tlLeftContinueFrom2.fromTo(box2, { xPercent: 0 }, {xPercent: 100}, "+=3");
        // tlLeftContinueFrom2.fromTo(box0, { xPercent: -100 }, {xPercent: 0}, "<");
        // tlLeftContinueFrom2.call(setCounter0, null, "<-.05");
        
    
        // tlLeftContinueFrom2.fromTo(box0, { xPercent: 0 }, { xPercent: 100 }, "+=3");
        // tlLeftContinueFrom2.fromTo(box1, { xPercent: -100 }, {xPercent: 0}, "<" );
        // tlLeftContinueFrom2.call(setCounter1, null, "<-.05");
        
        // tlLeftContinueFrom2.fromTo(box1, { xPercent: 0 }, {xPercent: 100}, "+=3" );
        // tlLeftContinueFrom2.fromTo(box2, { xPercent: -100 }, {xPercent: 0}, "<");
        // tlLeftContinueFrom2.call(setCounter2, null, "<-.05");

        ////

        tlLeft1 = gsap.timeline({repeat: 0, paused: true});
        tlLeft1.fromTo(box1, { xPercent: 0 }, { xPercent: -100 });
    
        tlLeft1.fromTo(box0, { xPercent: 100 }, {xPercent: 0}, "<" );
        tlLeft1.call(setCounter0, null, "<-.05");

        tlLeftContinueFrom0 = gsap.timeline({repeat: -1, delay: 5, paused: true});
            
        

        // tlLeftContinueFrom0.fromTo(box0, { xPercent: 0 }, { xPercent: 100 }, "+=3");
        // tlLeftContinueFrom0.fromTo(box1, { xPercent: -100 }, {xPercent: 0}, "<" );
        // tlLeftContinueFrom0.call(setCounter1, null, "<-.05");

        // tlLeftContinueFrom0.fromTo(box1, { xPercent: 0 }, {xPercent: 100}, "+=3" );
        // tlLeftContinueFrom0.fromTo(box2, { xPercent: -100 }, {xPercent: 0}, "<");
        // tlLeftContinueFrom0.call(setCounter2, null, "<-.05");

        // tlLeftContinueFrom0.fromTo(box2, { xPercent: 0 }, {xPercent: 100}, "+=3");
        // tlLeftContinueFrom0.fromTo(box0, { xPercent: -100 }, {xPercent: 0}, "<");
        // tlLeftContinueFrom0.call(setCounter0, null, "<-.05");

        ////

        tlLeft2 = gsap.timeline({repeat: 0, paused: true});
        tlLeft2.fromTo(box2, { xPercent: 0 }, { xPercent: -100 });
    
        tlLeft2.fromTo(box1, { xPercent: 100 }, {xPercent: 0}, "<" );
        tlLeft2.call(setCounter1, null, "<-.05");


        // tlLeftContinueFrom1 = gsap.timeline({repeat: -1, delay: 5, paused: true});
            
        
        // tlLeftContinueFrom1.fromTo(box1, { xPercent: 0 }, {xPercent: 100}, "+=3" );
        // tlLeftContinueFrom1.fromTo(box2, { xPercent: -100 }, {xPercent: 0}, "<");
        // tlLeftContinueFrom1.call(setCounter2, null, "<-.05");

        // tlLeftContinueFrom1.fromTo(box2, { xPercent: 0 }, {xPercent: 100}, "+=3");
        // tlLeftContinueFrom1.fromTo(box0, { xPercent: -100 }, {xPercent: 0}, "<");
        // tlLeftContinueFrom1.call(setCounter0, null, "<-.05");
        

        // tlLeftContinueFrom1.fromTo(box0, { xPercent: 0 }, { xPercent: 100 }, "+=3");
        // tlLeftContinueFrom1.fromTo(box1, { xPercent: -100 }, {xPercent: 0}, "<" );
        // tlLeftContinueFrom1.call(setCounter1, null, "<-.05");
        
        ////////////////// right button logic /////////////////////

        tlRight0 = gsap.timeline({repeat: 0, paused: true});
        tlRight0.fromTo(box0, { xPercent: 0 }, { xPercent: 100 });
    
        tlRight0.fromTo(box1, { xPercent: -100 }, {xPercent: 0}, "<" );
        tlRight0.call(setCounter1, null, "<-.05");

        //////

        tlRight1 = gsap.timeline({repeat: 0, paused: true});
        tlRight1.fromTo(box1, { xPercent: 0 }, { xPercent: 100 });
    
        tlRight1.fromTo(box2, { xPercent: -100 }, {xPercent: 0}, "<" );
        tlRight1.call(setCounter2, null, "<-.05");

        //////

        tlRight2 = gsap.timeline({repeat: 0, paused: true});
        tlRight2.fromTo(box2, { xPercent: 0 }, { xPercent: 100 });
    
        tlRight2.fromTo(box0, { xPercent: -100 }, {xPercent: 0}, "<" );
        tlRight2.call(setCounter0, null, "<-.05");
        

        return () => window.removeEventListener("scroll", handleScroll);


        console.log("<---- OUT USE EFFECT HOOK ONE --------------------------------->")
    },[]); 


    

    function handleScroll(){
        
        console.log("<---- IN Handle scroll --------------------------------->")
        console.log("window.pageYOffset = " + window.pageYOffset)

        
        if (window.pageYOffset >= 205){
             
            tl.pause();
            
        }else{


            if (!tl.isActive()){
                tl.resume();
            }



            
        }
        
        
    
    }

    function leftClicked(){

        console.log("LEFT was clicked ")
        tl.pause();
        // tlLeftContinueFrom2.pause();
        // tlLeftContinueFrom1.pause();
        // tlLeftContinueFrom0.pause();

        if (count == 0){

            console.log("...and count was 0 ")
            
            //flip once to the left (to count 2)
            tlLeft0.restart();

            
            //then start auto slideshow from COUNT = 2
            //tlLeftContinueFrom2.restart()
            tl.play("autoStartFromTwo")

        
        }else if (count == 2){

            console.log("...and count was 2 ")

            //flip once to the left (to count 1)
            tlLeft2.restart();


            //then start auto slideshow from COUNT = 1
            //tlLeftContinueFrom1.restart();
            tl.play("autoStartFromOne")

        }else if (count == 1){

            console.log("...and count was 0 ")

            //flip once to the left (to count 0)
            tlLeft1.restart();

            //then start auto slideshow from COUNT = 0
            //tlLeftContinueFrom0.restart();
            tl.play("autoStartFromZero")
            
        }else {

            //this should never happen
            console.log("COUNT WAS PROBABLY NULL")
        }


        
    }

    function rightClicked(){

        console.log("RIGHT was clicked ")
        tl.pause();

        // tlLeftContinueFrom2.pause();
        // tlLeftContinueFrom1.pause();
        // tlLeftContinueFrom0.pause();
        
        


        if (count == 0){

            console.log("...and count was 0 ")
            
        
            tlRight0.restart();
            tl.play("autoStartFromOne")
            //tl.resume();

            //tlRightSet = gsap.timeline({repeat: -1});
            //tlRightSet.add()




        }else if (count == 1){

            console.log("...and count was 1 ")

            tlRight1.restart();
            tl.play("autoStartFromTwo")
            
            //tl.resume();

        }else if (count == 2){

            console.log("...and count was 2 ")

            tlRight2.restart();

            tl.play("autoStartFromZero")
            
            
        
            
            //tl.resume();
        }else {

            console.log("COUNT WAS PROBABLY NULL")
        }



    }
    
    function leftOnMouseOverHandler(){

        setLeftHover(true);
        //console.log("LLEEFFTT inonmouseoverhandlerr")

    }

    function leftOnMouseOutHandler(){

        setLeftHover(false);

    }


    function rightOnMouseOverHandler(){

        setRightHover(true);
        //console.log("RRIIGGHHT inonmouseoverhandlerr")

    }

    function rightOnMouseOutHandler(){

        setRightHover(false);

    }

    const scrollbarSizeChange = ({ height, width }) => {
        if (height !== currentHeight) {
          setHeight(height);
        }
     
        if (width !== currentWidth) {
          setWidth(width);
        }
      };
    
    

    
    return (
        <>
            <HomeWrapper currentWidth={currentWidth}>
                <ScrollbarSize onChange={scrollbarSizeChange} />
                
                <BoxContainer className="boxContainer">
                    
                    <Box id="box0" className="box" style={{backgroundImage:`url(${slide1})`  }}>

                        {/* <img className="img0" style={{backgroundPosition: `50% ${-innerHeight / 2}px`, zIndex: "-1", position: "absolute", minWidth: "666px", width: "100%", height: "100%"}} src={slide1}></img> */}
                        <h1 ref={textRef} style={{fontSize, padding: "0px 60px", gridArea: "headline", fontSize: "3em", lineHeight: "1.1em", color: "#EDEAEA", fontFamily: "'Quantico', sans-serif"}}>CWA members guide to new 2021 benefits.</h1>
                        <Button>READ MORE</Button>

                        
                    </Box>

                    <Box id="box1" className="box" style={{backgroundImage:`url(${slide2})`  }}>

                        {/* <img className="img1" style={{backgroundPosition: `50% ${-innerHeight / 2}px`, zIndex: "-1", position: "absolute", minWidth: "666px", width: "100%", height: "100%"}} src={slide2}></img> */}
                        <h1 ref={textRef} style={{fontSize, padding: "0px 60px", gridArea: "headline", fontSize: "3em", lineHeight: "1.1em", color: "#EDEAEA", fontFamily: "'Quantico', sans-serif"}}>COVID-19 resources.</h1>
                        <Button>LEARN MORE</Button>
                        
                    </Box>

                    <Box id="box2" className="box" style={{backgroundImage:`url(${slide3})`  }}>

                        {/* <img className="img2" style={{backgroundPosition: `50% ${-innerHeight / 2}px`, zIndex: "-1", position: "absolute", minWidth: "666px", width: "100%", height: "100%"}} src={slide3}></img> */}
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
                        currentWidth={currentWidth}
                        
                    />

                    <RightArrowImageActive rightHover={rightHover}
                        src={rightArrowSmallActive} 
                        onClick={rightClicked}
                        onMouseOver={rightOnMouseOverHandler}
                        onMouseOut={rightOnMouseOutHandler}
                        currentWidth={currentWidth}
                        
                    /> 

                    <ProgressBar slideCount={count}/>     
                        
                </BoxContainer>
                
            
            </HomeWrapper>

            <Login handleSuccessfulAuth={props.handleSuccessfulAuth} setLoginClicked={props.setLoginClicked} loginClicked={props.loginClicked} />
        </>
    );  
}


export default Home;