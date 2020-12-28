import React, { useState } from "react";
import { Link, Redirect, withRouter} from "react-router-dom";
import axios from 'axios';
import logoImg from "../../../assets/images/logoPlaceholder.jpg";
import redX from '../../../assets/images/redX.jpg'
import tinyMan from '../../../assets/images/tinyMan.png'
import lock from '../../../assets/images/lock.png'
import styled from 'styled-components'
import userIcon from '../../../assets/images/signup2'
import { Card, Logo, Form, Input, Button, ErrorMsg, RedX, LoginWrapper, 
  InputIcon, LogoWrapper, H2, FormItem, Label, ErrorWrapper} from './AuthForm';

const LoginWrapperNew = styled.div`

  

  position: absolute;
  top: ${props => props.loginClicked ? "45px" : "-500px"};
  right: 0;
  background-color: white;
  padding: 20px;
  transition: all 1s ease 0s;


`;

const CardNew = styled.div`

  
`;

const CloseWindow = styled.a`

  position: absolute;
  line-height: 1.3em;
  top: 0px;
  right: 0px;
  border: 1px solid red;
  border-radius: 45px;
  font-size: .5em;
  cursor: pointer;
  padding: 2px;


`;

const LogoWrapperNew = styled.div`

  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 20px;
  position: relative;
  


`;
///////////////////////////////////  LOG_IN_PAGE //////////////////////////////
function Login(props) {
  
  const [state, setState] = React.useState({
    
    email: "",
    emailFieldActive: true,
    password: "",
    passwordFieldActive: true,
    status: "",
    errors: {}

  })

  // to activate the input field while typing
  function activateField(e) {
    
    setState({
      ...state,
      [e.target.name+"FieldActive"]: true
    })
  }

  // to deactivate input only if it's empty
  function disableField(e) {
    if (e.target.value === "") {
      setState({
        ...state,
        [e.target.name+"FieldActive"]: false
      })
    }
  }


  function closeLoginWindow(){

    props.setLoginClicked(false);


  }
  

  
  ///////////////////////////////////  HANDLE_SUBMIT ///////////////////////////
  function handleSubmit(event){
    
    ////send info into backend to Log IN/////
    event.preventDefault();
    //const mode = process.env.NODE_ENV =="development" ? "http://127.0.0.1:3000" : "https://floridablaze.io"
    axios.post("/sessions", {
      
      user: { 
        email: state.email,
        password: state.password
      }
    },
    {withCredentials: true})
    .then(response => {
      
      console.log("Log in submit Response", response)
      
      if (response.data.status == "green"){

        setState({
          ...state,
          status: response.data.status,
          errors: response.data.error,
        });

        
        props.setLoginClicked(false)
        
        props.handleSuccessfulAuth(response.data)
        
        //props.history.push("/")
      
      }else{
        
        setState({
          ...state,
          status: response.data.status,
          errors: response.data.error,
        });
      }
    }).catch(error => {
      
      console.log("LoginErrors", error)
      
      setState({
        ...state,
        status: "pink",
        errors: {auth: [error]}
      });
    })
  }


  ///////////////////////////////////  HANDLE_CHANGE /////////////////////////////
  function handleChange(event){

    const value = event.target.value;

    console.log("name", event.target.name)
    console.log("value", value)
    setState({
      ...state,
      [event.target.name]: value
    });

    //activateField(event);
  }


  ///////////////////////////////////  SETUP ERRORMESSAGES //////////////////////
  let errorMessages = [];
    

  if (state.errors){

    if (state.errors.success) {
      errorMessages.push(<ErrorMsg> {state.errors.success[0]} </ErrorMsg>)
    }
       
    if (state.errors.auth) {
      errorMessages.push(<ErrorMsg> {state.errors.auth[0]} </ErrorMsg>)
    } 

    if (state.errors.password) {
      errorMessages.push(<ErrorMsg> {"Password " + state.errors.password[0]} </ErrorMsg>)
    } 

    if (state.errors.password_confirmation) {
      errorMessages.push(<ErrorMsg> {"Confirmation " + state.errors.password_confirmation[0]} </ErrorMsg>)
    } 

    if (state.errors.green) {
      errorMessages.push(<ErrorMsg> {state.errors.green} </ErrorMsg>)
    }
  }


  /////////////////////////////////// JSX /////////////////////////////////////////
  
  
  return (

    
    
    <LoginWrapperNew loginClicked={props.loginClicked}>
      
      <CardNew>
      
        <LogoWrapperNew >

          <CloseWindow onClick={closeLoginWindow}>&#10060;</CloseWindow>
          <a href="/">
            <Logo src={userIcon} />
          </a>   
          <H2>Log in </H2>
        </LogoWrapperNew>
        
        <Form onSubmit = {handleSubmit}>
          
          <FormItem >
            
            <Label className={state.emailFieldActive ? "field-active" : ""}>email</Label>
            <InputIcon style={{backgroundImage: `url(${tinyMan})`}}></InputIcon>
            
            <Input 
              name="email" 
              type="email" 
              
              value={state.email} 
              onChange={handleChange}
              onFocus={activateField}
              onBlur={disableField}
              required/>
          </FormItem>


          <FormItem >
            
            <Label className={state.passwordFieldActive ? "field-active" : ""}>password</Label>
            <InputIcon style={{backgroundImage: `url(${lock})`}}></InputIcon>
            
            <Input 
              name="password" 
              type="password" 
              value={state.password} 
              onChange={handleChange}
              onFocus={activateField}
              onBlur={disableField} 
              required/>
          </FormItem>
          
          <Button type="submit">Log In</Button>
        
        </Form>
        
        <ErrorWrapper>        
          <RedX status={state.status} src={redX}/>
          {errorMessages}
        </ErrorWrapper>

        
      </CardNew>
      {/* 
      <a style={{fontSize: ".5em", textDecoration: "underline"}} href="/signup">Dont have an account? </a>
      <a style={{fontSize: ".5em", textDecoration: "underline"}} href="/forgot">Forgot password?? </a>
      <a style={{fontSize: ".5em", textDecoration: "underline"}} href="/resend">Resend Email </a>
      */}
    </LoginWrapperNew>
  );
}

export default withRouter(Login);