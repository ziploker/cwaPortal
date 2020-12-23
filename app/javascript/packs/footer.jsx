import React from 'react';
import styled, { ThemeProvider } from 'styled-components'
import { Parallax, Background } from 'react-parallax';
import crowd from '../../assets/images/crowd'

const FooterWrapper = styled.div`

    display: flex;
    justify-content: center;
    align-items:center;
    height: 60px;
    background-color: #212224;
    

`;

const Info = styled.h1`

    font-size: .6em;
    color: white;
`;



function Footer(props){

    console.log("FOOTER_PROPS", props)
    
    
    
    

    
    return (
        <>
            <FooterWrapper>
            
                <Info>
                    Copyright © 2021 CWA Portal - All Rights Reserved.

                </Info>
                
            
            </FooterWrapper>
        </>
    );  
}


export default Footer;