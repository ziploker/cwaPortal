import React from 'react';
import styled, { ThemeProvider } from 'styled-components'
//import { Parallax, Background } from 'react-parallax';
import crew from '../../assets/images/crew'




import { Link } from 'react-router-dom';

import redX from '../../assets/images/redX'
import userIcon from '../../assets/images/signup'
import greenCheck from '../../assets/images/greenCheck'
import dummy_avatar from '../../assets/images/dummy_avatar'
import { Card, Logo, Form, Input, Button, ErrorMsg, RedX, LoginWrapper, 
  InputIcon, LogoWrapper, H2, FormItem, Label, ErrorWrapper} from './AuthForm';

import axios from 'axios'
import $ from 'jquery';

var Spinner = require('react-spinkit');
//var randomColor = require('randomcolor');

const HomeWrapper = styled.div`

  padding: 45px 0px;
  background-image: url(${crew});
  background-size: cover;
    

`;

////////////////////// Handlev Submit V2 //////////////////////////
const handleAdd = e => {
    
  e.preventDefault();

  setState({
    ...state,
    waitMessage: "...one moment",
    showStatusSpinner: true,
    isBtnDisabled: true
  });
    
  if (validForm()) {


    
    
    formData.append('user[first]', state.first);
    formData.append('user[last]', state.last);
    formData.append('user[email]', state.email);
    formData.append('user[password]', state.password);
    formData.append('user[password_confirmation]', state.password_confirmation);
    formData.append('user[nick]', state.nick);
    
    

    console.log("formdata from handle add");
    console.log(formData);

    
    //get token for form submission
    const csrf = document.querySelector("meta[name='csrf-token']").getAttribute("content");  
      
    $.ajax({
      
      url: '/registrations',
      headers: {
        
        'X-CSRF-Token': csrf
      },
      method: 'POST',
      data: 
        formData,
        contentType: false,
        processData: false
          
        
      ,
      success: function(response) {
        //props.handleAdd(data);


      if (response.status === "green"){

        setState({
          ...state,
          //focussed: (props.focussed) || false,
          first: "",
          firstFieldActive: false,
          last: "",
          lastFieldActive: false,
          email: "",
          emailFieldActive: false,
          password: "",
          passwordFieldActive: false,
          password_confirmation: "",
          password_confirmationFieldActive: false,
          nick: "",
          status: response.status,
          avatarFieldActive: false,
          avatar: [],
          errors: response.error
          
        });
          
          
      
          
          props.handleSuccessfulAuth(response)
          //props.history.push("/")
        
        }else{
          
          //update error state
          setState({
            ...state,
            status: response.status,
            errors: response.error
          });
        }
        
  
      },
      error: function(xhr, status, error) {
        //alert('Message did not reach server: ', error);
      }
    })
  } else {
    //alert('Please fill all fields.');
  }
}


const validForm = () => {
  if (state.first ) {
    return true;
  } else {
    return true;
  }
}


  
///////////////////////////////////  HANDLE_CHANGE /////////////////////////////
function handleChange(event){

  const value = event.target.value;

  setState({
    ...state,
    [event.target.name]: value
  });

}

function handleImageChange(e){

  formData.append('user[avatar]', e.target.files[0]);
  
    setState({
      ...state,
      avatar: URL.createObjectURL(event.target.files[0])
    })
  
  //if (e.target.files[0]) setState({ ...state, avatar: e.target.files[0] });
}

  
const ProfilePicWrapper = styled.div`

    position: relative;


`;

const ProfilePic = styled.img`
  
  border-radius: 50px;
  border: 1px gray solid;
  position: relative;
  width: 70px;
  height: 70px;
  display: block;
  margin-left: auto;
  margin-right: auto;
  


`;

const LabelForFile = styled.label`
    
  text-align: center;
  display: inline-block;
  font-size: 12px;
  position: absolute;
  right: -15px;
  bottom: -13px;
  z-index: 5;
  border-radius: 50px;
  //background-color: orange;
  padding: 5px;
  margin: 0 auto;

  //background-color: orange;
  cursor: pointer;
  
  &:hover{
    //background-color: #fce1b3;

  }
  
  
  `;

const Span = styled.span`

  height: 100%;
  margin-right: 5px;
  font-size: .75em;
  transition: opacity 2s ease-in;
  
            

`;

const StatusSpinner = styled.div`
  
  
  transition: opacity .4s;
  transition-timing-function: ease-out;

`;

const formData = new FormData();
///////////////////////////////////  SIGN_UP_PAGE //////////////////////////////



function Section2(props, ref) {
  
    

  const {section2ScrollToRef} = ref

  const [state, setState] = React.useState({
    first: "test",
    firstFieldActive: false,
    last: "",
    lastFieldActive: false,
    email: "",
    emailFieldActive: false,
    password: "",
    passwordFieldActive: false,
    password_confirmation: "",
    password_confirmationFieldActive: false,
    nick: "",
    nickFieldActive: false,
    status: "",
    avatar: [],
    errors: {},
    color: "#45B5644",
    isBtnDisabled: false,
    showStatusSpinner: false,
    waitMessage: ""
  })


  const handleChange = (event) => {

    const value = event.target.value;

    setState({
      ...state,
      [event.target.name]: value
    });

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
  
  
  ///////////////////////////////////  HANDLE_SUBMIT ///////////////////////////
  function handleSubmit(event){
    
    ////send info into backend heyyohhhh/////
    event.preventDefault();
    //const mode = process.env.NODE_ENV =="development" ? "http://127.0.0.1:3000" : "https://www.floiridablaze.io"
    axios.post("/registrations", {
      
      user: { 
        first: state.first,
        last: state.last,
        email: state.email,
        password: state.password,
        password_confirmation: state.password_confirmation,
        avatar: state.avatar,
        nick: state.nick

      }
    },
    {withCredentials: true})
    .then(response => {
      
      console.log("Sign up submit Response", response)
      
      if (response.data.status === "green"){
        
        setState({
          ...state,
          status: response.data.status,
          errors: response.data.error
        });
        
        props.handleSuccessfulAuth(response.data)
        props.history.push("/")
      
      }else{
        
        //update error state
        setState({
          ...state,
          status: response.data.status,
          errors: response.data.error
        });
      }
    }).catch(error => {
      
      console.log("Sign_up Errors", error)
      setState({
        ...state,
        status: response.data.status,
        errors: response.data.error
      });
    
    })
  }


  return (
            
         
    <HomeWrapper ref={section2ScrollToRef}>
          
      <LoginWrapper>

        <div>

          <img style={{width: "50px"}} src={userIcon}/>
          <h1>Sign Up!</h1>


        </div>
            
        <Card>

                
          <Form onSubmit = {handleAdd}>

            <FormItem >
                <Label className={state.firstFieldActive ? "field-active" : ""}>FULL NAME</Label>
                <Input 
                name="full_name" 
                type="text" 
                
                value={state.full_name} 
                onChange={handleChange} 
                onFocus={activateField}
                onBlur={disableField}
                required/>
            </FormItem>

                    
            <FormItem >
                <Label className={state.emailFieldActive ? "field-active" : ""}>email</Label>
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
                <Input 
                name="password" 
                type="password" 
                
                value={state.password} 
                onChange={handleChange} 
                onFocus={activateField}
                onBlur={disableField}
                required/>
            </FormItem>

            
            <Button type="submit" disabled={state.isBtnDisabled}>Sign Up</Button>
          
          </Form>

          
          
          <ErrorWrapper>   
              <Span waitMessage={state.waitMessage}> {state.waitMessage}</Span>     
              <RedX status={state.status} src={state.status === "pink" ? redX : greenCheck}/>
              {errorMessages}

              <StatusSpinner showStatusSpinner={state.showStatusSpinner}>
                  <Spinner name='wave' color='#56c5cc' />
              </StatusSpinner>

          </ErrorWrapper>
        
        </Card>
            
      </LoginWrapper>

    </HomeWrapper>
      
  );  
}










const Wtf = React.forwardRef(Section2);
export default Wtf;

