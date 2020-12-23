import React from 'react';

import StyledSideMenu from './sidemenu.styled'
import {Link} from 'react-router-dom';
import styled from 'styled-components'


const UL = styled.ul`

  li{

    cursor: pointer;
  }


`;

const Menu = (props) => {
  return (
    <StyledSideMenu openSideMenu={props.openSideMenu}>

      <UL>
                

        <li key={1}><a href="/">Home</a></li>
        <li key={2}><a onClick={props.executeScroll}>Take Action</a></li>
        <li key={3}><a href="#">Link1</a></li>
        <li key={4}><a href="#">Link2</a></li>
        
        {/* 
        <li key={5}>

            <li key={4}>{props.appState.loggedInStatus == "LOGGED_IN" ? [<Link key={"a"} to="/"> Logout | </Link>, <Link key={"b"} to="/edit">edit </Link>] :   [<Link key={"c"} to="/login"> Login |</Link>, <Link key={"d"} to="/signup"> Signup</Link>]  } </li>

        </li>
        */}
                    
      

        
                    
                    

      </UL>
      
    </StyledSideMenu>
  )
}

export default Menu;



/*

<a href="/">
        <span role="img" aria-label="about us"></span>
        About us
      </a>
      <a href="/">
        <span role="img" aria-label="price"></span>
        Pricing
        </a>
      <a href="/">
        <span role="img" aria-label="contact"></span>
        Contact
        </a>

*/