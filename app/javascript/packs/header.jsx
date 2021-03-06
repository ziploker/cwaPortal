import React, {useEffect, useState} from 'react'
import {Link, useLocation} from 'react-router-dom'


import useDocumentScrollThrottled from './useDocumentScrollThrottled.jsx'
import styled from 'styled-components'
import Logo from '../../assets/images/cwaLogo5.jpg'

import Burger from './burger'
import SideMenu from './sidemenu'



const HeaderWrapper = styled.header`

    display: flex;
    justify-content: flex-end;
    align-items: center;
    height: 45px;
    width: 100%;
    margin-bottom: 25px;
    background-color: ${props => props.theme.black};
    padding: 0px 8%;
    position: fixed;
    top: 0;
    left: 0;
    z-index: 1001;
    transform: translateY(0);
    transition: all 0.3s ease;

    &.shadow {
        box-shadow: 0 9px 9px -9px rgba(0, 0, 0, 0.13);
    }

    &.hidden {
        transform: translateY(-110%);
        //height: 50px;
    }
`;



const HomeLink = styled(Link)`

    height: 100%;
    width: 70px;
    cursor: pointer;
    margin-right: auto;
    background-color: pink;
`;



const DesktopNav = styled.nav`
    
    @media only screen and (max-width: 850px){
    
       display: none     

    }   
    //transform: translate(-30px,-30px);
    //opacity: 0;
    height: 100%;

    display: flex;
    
    ul{
        
        list-style: none;

        li, a{
            
        
            font-weight: 500;
            font-size: 12px;
            line-height: 45px;
            color: ${props => props.theme.white};
            
            text-decoration: none;
            cursor: pointer;
        
        
        }
    
        li{
            display: inline-block;
            padding: 0px 20px;

        
            a{
                transition: all 0.3s ease 0s;

                &:hover{

                    color: ${props => props.theme.lightBlue};;

                }
            
            }
        
        }
    
    
    
    }
    
    

`;


const SmallProfilePicPlaceholder = styled.div`

    width: 35px;
    height: 35px;
    display: inline-block;
    margin: 0 auto;
    vertical-align: middle;

`;
const SmallProfilePic = styled.img`

    width: 45px;
    height: 45px;
    display: inline-block;
    margin: 0 auto;
    vertical-align: middle;
    border-radius: 50px;
    border: 1px gray solid;

`;


function Header(props) {

    useEffect(() => {

        console.log("Header UseEffect Start, openSideMenu state is currently " + props.openSideMenu);
        
        //mousedown listener

        if (
    
            locationFromHook.pathname === "/login" || 
            locationFromHook.pathname === "/signup" ||
            locationFromHook.pathname === "/forgot" ||
            locationFromHook.pathname === "/edit" ||
            locationFromHook.pathname === "/change") {
        
                return;
            }else{
                listener = event => {

                    //if you click in the menu,  dont close it
                    if (ref.current.contains(event.target)) {
            
                        return;
                    }
                  
                    //if you click anywhere outside the side menu, close it.    
                    mouseDownHandler();
                };


            }
       
  
        
        //resize and/or orientationchange listener
        const handleResize = () => {
          
            console.log(window.innerWidth);
            
            //closed sideMenu on orientation change, if it gets bigger than 850px
            if (window.innerWidth > 850){
                props.setOpenSideMenu(false);
            }
        }
  
        //set up event listeners
        window.addEventListener("resize", handleResize);
        window.addEventListener("orientationchange", handleResize);
        document.addEventListener('mousedown', listener);
        
        
        return () => {
          
          document.removeEventListener('mousedown', listener);
          console.log("cleanup");
          console.log("cleanup done, openSideMenu = " + props.openSideMenu);
        };
      },
      [ref, mouseDownHandler],
    );

    console.log("HEADER_________________PROPS", location.pathname)
    //console.log("HEADER_PROPS solo", location.pathname)

    const locationFromHook = useLocation();
    
    const ref = React.useRef();
    //const navbar = React.createRef();
    
    function scrollToTop() {
        window.scrollTo({
          top: 0,
          behavior: "smooth"
        });
      }
    
    function mouseDownHandler(){
        
        props.setOpenSideMenu(false);
        console.log("mouseDownEventTriggered & openSideMenu = " + props.openSideMenu);
    }

    function doSomething(){

        scrollToTop();
        props.setLoginClicked(true)
        props.setOpenSideMenu(false)
    }



    let listener;
    
    

    console.log("locationFromHook.pathname", locationFromHook.pathname);
    {/*if (
    
    locationFromHook.pathname === "/login" || 
    locationFromHook.pathname === "/signup" ||
    locationFromHook.pathname === "/forgot" ||
    locationFromHook.pathname === "/edit" ||
    locationFromHook.pathname === "/change") {

        return null
    }
    */}                
      
    return (
        
        <HeaderWrapper>
                
            <HomeLink to='/'>
                <img style={{height: '100%', color: "#ffa680"}}src={Logo}/>
            </HomeLink>
            
            
            <DesktopNav>
                <ul>
                
                    
                    <li key={1}><a onClick={scrollToTop}>Home</a></li>
                    <li key={2}>
                    
                        <a onClick={props.executeScrollForLookupSection}>Take Action</a>
                    </li>
                    <li key={3}><a href="#">Link1</a></li>
                    <li key={4}><a href="#">Link2</a></li>
                    
                    {/* 
                    <li key={5}>

                        {props.appState.loggedInStatus == "LOGGED_IN" ? <SmallProfilePic src={props.appState.user.avatar_url}/> : <SmallProfilePicPlaceholder/>}

                    </li>
                    */}

                    <li key={5}>{props.appState.loggedInStatus == "LOGGED_IN" ? [<a key={"a"} onClick= {props.handleLogOutClick}> Logout | </a>, <Link key={"b"} to="/edit">edit </Link>] :   [<a key={"c"} onClick={doSomething}> Login |</a>, <a key={"d"} onClick={props.executeScrollForSection2}> Signup</a>]  } </li>
                    
                    {/* 
                    <li key={5}>

                        {props.appState.loggedInStatus == "LOGGED_IN" ? <SmallProfilePic src={props.appState.user.avatar_url}/> : <SmallProfilePicPlaceholder/>}

                    </li>
                    

                    <li key={6}>{props.appState.loggedInStatus} </li>

                    */}
                </ul>

            </DesktopNav>
        
            
        
            <div ref={ref}>
                <Burger openSideMenu={props.openSideMenu} setOpenSideMenu={props.setOpenSideMenu}/>
                <SideMenu 
                    doSomething={doSomething} 
                    openSideMenu={props.openSideMenu} 
                    setOpenSideMenu={props.setOpenSideMenu}
                    executeScroll={props.executeScroll} 
                    appState={props.appState} 
                    executeScrollForLookupSection={props.executeScrollForLookupSection} 
                    executeScrollForSection2={props.executeScrollForSection2}/>
            </div>
        
        
        </HeaderWrapper>
    )
}





export default Header;
