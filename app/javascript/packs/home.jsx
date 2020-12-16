import React from 'react';
import styled, { ThemeProvider } from 'styled-components'
import { Parallax, Background } from 'react-parallax';
import crowd from '../../assets/images/crowd'

const HomeWrapper = styled.div`

    margin-top: 45px;
    

`;

const Container = () => (
    <Parallax strength={200}>

        <Background className="custom-bg">
            <img src={crowd} alt="large crowd" />
        </Background>
    
        <div style={{height: "100vh", display: "flex", justifyContent: "center", alignItems: "center"}}>
        
            <p style={{fontSize: "10em", color: "#D40000"}}>CWA</p>

        </div>
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