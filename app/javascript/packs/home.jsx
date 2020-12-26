import React from 'react';
import styled, { ThemeProvider } from 'styled-components'
import { Parallax, Background } from 'react-parallax';
import crowd from '../../assets/images/crew2dark'
import leftArrow from '../../assets/images/leftArrow'
import rightArrow from '../../assets/images/rightArrow'

const HomeWrapper = styled.div`

    margin-top: 45px;
    

`;

const TopContent = styled.div`
    margin: 0 auto;
    text-align: center;
    display: grid;
    width: 80vw;
    height: 100vh;
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

const Container = () => (
    <Parallax strength={200}>

        <Background className="custom-bg">
            <img src={crowd} alt="large crowd" />
        </Background>
    
        <TopContent>
        
            <h1 style={{gridArea: "headline", fontSize: "3em", lineHeight: "1.1em", color: "#EDEAEA", fontFamily: "'Quantico', sans-serif"}}>CWA members guide to 2021 benefits.</h1>
            <button style={{gridArea: "call2action", textDecoration: "none", width: "11em", height: "4em", backgroundColor: "#5E6CC5", color: "white", border: "none"}}>READ MORE</button>
            <img style={{gridArea: "navigationLeft", justifySelf: "end", alignSelf: "center"}} src={leftArrow}></img>
            <img style={{gridArea: "navigationRight", justifySelf: "start", alignSelf: "center"}} src={rightArrow}></img>
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
        </>
    );  
}


export default Home;