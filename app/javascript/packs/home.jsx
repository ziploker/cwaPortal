import React from 'react';
import styled, { ThemeProvider } from 'styled-components'
import { Parallax, Background } from 'react-parallax';
import crowd from '../../assets/images/crew2dark'
import leftArrow from '../../assets/images/leftArrow'
import rightArrow from '../../assets/images/rightArrow'
import Login from './pages/login'


const HomeWrapper = styled.div`

    margin-top: 45px;
    position: relative;
    

`;

const TopContent = styled.div`
    margin: 0 auto;
    text-align: center;
    display: grid;
    width: 80vw;
    height: 100vh;
    min-height: 500px;
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
        ". . .";



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
            <img style={{cursor: "pointer", gridArea: "navigationLeft", justifySelf: "end", alignSelf: "center"}} src={leftArrow}></img>
            <img style={{cursor: "pointer", gridArea: "navigationRight", justifySelf: "start", alignSelf: "center"}} src={rightArrow}></img>
        </TopContent>
    </Parallax>
);


function Home(props){

    console.log("HOME_PROPS", props)
    
    
    
    

    
    return (
        <>
            <HomeWrapper>
            
                <Container style={{height: "45vh", width: "100vw"}}/>
                
            
            </HomeWrapper>

            <Login handleSuccessfulAuth={props.handleSuccessfulAuth} setLoginClicked={props.setLoginClicked} loginClicked={props.loginClicked} />
        </>
    );  
}


export default Home;