import React, {useEffect, useState, useRef} from 'react'

import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    withRouter,
    useHistory,
    useLocation
} from "react-router-dom"

import Header from './header'

import Home from './home'
import LookupSection from './lookupSection'
import Section2 from './section2'

import styled, { ThemeProvider } from 'styled-components'
import GlobalStyles from "./global"


///////////////////////////////// MAIN APP STARTING POINT ///////////////
function App(controllerProps){
    
    
    console.log("APP_controllerProps", controllerProps)
    
    //global APP state 
    const [appState, setAppState] = useState({
        
        loggedInStatus: "LOGGED_IN",
        emailStatus: "EMAIL_NOT_VERIFIED",
        test: "a",
        user: {},
        stories: controllerProps.stories
        
    })
    const [openSideMenu, setOpenSideMenu] = useState(false);

    
   
    const theme = {
        
        white:        "#ffffff",
        offWhite:     "#f4f4f4",
        lightBlue:    "#56c5cc",  //(86,197,204)
        pink:         "#f14f7b",  //(241,79,123)
        orange:       "#f7aa1c",  //(247,170,28)
        darkBlue:     "#000321",  //(0,3,33)
        blueGray:     "#0E2021",
        black:        "#181818"   //(0,0,0)
    };
    

    
    
    
    
    
    
    
    // reference for lookupSection to scroll to, when click on nav link
    const LookupScrollToRef = useRef();
    const LookupInputRef = useRef();

    // when click on nav link, scrolls to LookupScrollToRef
    const scrollToRef = (ref) => {
        
        window.scrollTo(0, ref.current.offsetTop)
        setOpenSideMenu(false)
        LookupInputRef.current.focus();

    }
        
    
    
    const executeScroll = () => scrollToRef(LookupScrollToRef)
    
    
    useEffect(() => {

        //const mode = process.env.NODE_ENV == "development" ? "http://127.0.0.1:3000" : "https://www.floiridablaze.io"
        
        
        
    },[]);

    
    
    
    return (

        <ThemeProvider theme={theme}>
        
            <Router>
                
                <GlobalStyles/>
                
                
                    
                <Header 
                    executeScroll={executeScroll} 
                    appState={appState} 
                    
                    openSideMenu={openSideMenu}
                    setOpenSideMenu={setOpenSideMenu}
                />
                
                
                
                <Switch>

                    <Route exact path="/" render={ () => <Home stories={appState.stories} appState={appState} setAppState={setAppState} />}/>
                    
                    
                </Switch>

                <LookupSection appState={appState} ref={{LookupScrollToRef: LookupScrollToRef, LookupInputRef: LookupInputRef}}/>
                <Section2 stories={appState.stories} appState={appState} setAppState={setAppState} />
               
            </Router>
        
        </ThemeProvider>
    );
}


export default props => <App {...props} />;