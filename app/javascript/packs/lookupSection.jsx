import React, {useEffect, useState, useRef} from 'react';
import {Link, useLocation} from 'react-router-dom'
import styled, { ThemeProvider } from 'styled-components';
import LookupForm from '../packs/lookupForm.jsx'
import ResultCardOne from './resultCardOne.jsx'
import ResultCardTwo from './resultCardTwo.jsx'
import ResetButton from './newSearchButton.jsx'
import Steps from './steps'
import '../../assets/stylesheets/steps.scss'



const BottomHalf = styled.div`

  
  background-color: #D8DED9;
  



`;


const Lookup_Section_Wrapper = styled.div`
    
  display: grid;
  //grid-gap: 25px;
  //padding: 25px;
  grid-template-columns: minmax(150px, 1fr);
  //grid-template-rows: 90px minmax(min-content, 360px) minmax(min-content, 360px);
  justify-content: center;
  justify-items: center;
  grid-template-areas:
          
          "banner"
          "subbanner"
          "steps"
          "form"
          "results";


  //margin-top: 25px;
  //background-color: #F9F9F9;

/*  //screen and (min-width: 750px)\
*/
  //@media screen and (min-width: 500px){
      
  //    display: grid;
  //    //grid-gap: 25px;
  //    grid-template-rows: 20% 10% minmax(min-content, max-content) 1fr;
  //    grid-template-columns: minmax(min-content, max-content) minmax(min-content, max-content);
  //    grid-template-areas:
          
  //        "banner banner"
  //        "subbanner subbanner"

  //        "form form"
  //        "results results";
            
    //}
    
`;

const Banner = styled.h1`


  grid-area: banner; 
  padding: 60px 10px 0px 10px;
  //margin-bottom: 20px;
  
  text-align: center;
  align-self: flex-end;
  line-height: 120%;
  

`;

const SubBanner = styled.h3`


  grid-area: subbanner; 
  margin-bottom: 20px;
  
  text-align: center;

`;

const Results = styled.div`

    //background-color: ${props => props.theme.offWhite};

    display: grid;
    //grid-template-columns: repeat( 2, minmax(210px,300px) );
    grid-template-columns: minmax(240px, 250px) minmax(240px, 250px) minmax(450px,600px);
    grid-template-rows: minmax(min-content, max-content) minmax(min-content, max-content);
    grid-gap: 30px;
    grid-area: results;
    padding: 20px 20px;
    grid-template-areas:
      "cardOne cardTwo demoLetter"
      "  .   .    demoLetter";
      


    @media screen and (max-width: 1050px){

      grid-template-columns: minmax(150px, 240px) minmax(375px,600px);
      grid-template-areas:
      "cardOne  demoLetter"
      "cardTwo  demoLetter";

      

    }

    @media screen and (max-width: 631px){

      grid-template-columns: minmax(min-content, max-content) minmax(min-content, max-content);
      grid-template-rows: minmax(min-content, max-content) minmax(min-content, max-content);
      grid-template-areas:
      "cardOne cardTwo "
      
      "demoLetter demoLetter";



    }
    //@media screen and (max-width: 600px){

    //  grid-template-columns: minmax(210px,300px);

    //}

    

    



`;

const To = styled.sub`

    grid-area: to;
    align-self: center;
    justify-self: start;

`;


const Email1 = styled.span`

  grid-area: email1;
  font-size: .8em;
`;

const Email2 = styled.span`

  grid-area: email2;
  font-size: .8em;
  margin-bottom: 20px;

`;

const Message = styled.p`

  grid-area: message;
  
  margin-bottom: 20px;
  font-size: .9em;
  

`;

const From = styled.div`

  grid-area: from;
  font-size: .8em;
  line-height: .9em;

`;

const DemoLetter = styled.div`

  grid-area: demoLetter;
  max-height: ${ props => props.showCards.toString() == "false" ? "0px" : "100%"};
  opacity: ${ props => props.showCards.toString() == "false" ? "0" : "1"};
  align-self: start;

`;


const Letter = styled.div`

  display: grid;
  grid-template-columns: minmax(min-content, max-content ) minmax(0px, 1fr);
  grid-template-rows: minmax(min-content, max-content) minmax(min-content, max-content) 1fr minmax(min-content, max-content);
  grid-template-areas:
    "to  email1"
    " .  email2"
    "message message"
    "from from";

    height: 100%;
    grid-column-gap: 15px;
    //grid-row-gap: 25px;


`;

function Look_Up_Section (props, ref) {

  const locationFromHook = useLocation();


  const {LookupScrollToRef, LookupInputRef} = ref;

  const [showCards, setShowCards] = React.useState( true )
  const [results, setResults] = React.useState( {"one":{"name":"Annette Taddeo","firstName":"Annette","lastName":"Taddeo","image":"http://www.flsenate.gov/PublishedContent/Senators/2018-2020/Photos/s40_5331.jpg","id":"ocd-person/ea190b03-d1ca-4d75-89c7-dca745386db7","email":"taddeo.annette.web@flsenate.gov","chamber":"Senate","party":"Democrat","parent":"Florida Legislature","district":"40","fullDistrict":"Florida State Senate district 40"},"two":{"name":"Juan Alfonso Fernandez-Barquin","firstName":"","lastName":"","image":"https://www.myfloridahouse.gov//FileStores/Web/Imaging/Member/4709.jpg","id":"ocd-person/a8c88fee-1915-4907-ae37-5755c4bff446","email":"JuanF.Barquin@myfloridahouse.gov","chamber":"House","party":"Republican","parent":"Florida Legislature","district":"119","fullDistrict":"Florida State House district 119"}} );
  //const [results, setResults] = React.useState( {"one": {}, "two": {} });

  const [showStatusSpinner, setShowStatusSpinner] = React.useState (false)
  const [showStatusCheck, setShowStatusCheck] = React.useState (false)

  const [status, setStatus] = React.useState ("")
  const [lastTermSearched, setLastTermSearched] = React.useState ('')

  const [coordinates, setCoordinates] = React.useState ({lat: '', lng: ''})

  const [searchButtonActive, setSearchButtonActive] = React.useState (false)
  
  const [formInfo, setFormInfo] = React.useState({
    
    address: ''
  
  })

  const [bulletStatus, setBulletStatus] = React.useState({
    
    bullet1: 'NOT_COMPLETED',
    bullet2: 'NOT_COMPLETED',
    
  
  })

  const [isSticky, setSticky] = useState(false);
  const stepsRef = useRef(null);
  const handleScroll = () => {
    if (stepsRef.current) {
      setSticky(stepsRef.current.getBoundingClientRect().top <= 46);
    }
  };

  
  
  


  const handleChange2 = event => {
    console.log("handle change 222")
    
    //resets search if user erases first search term
    if (event != lastTermSearched){

      setStatus("")
      setShowStatusCheck(false)
    
    } 
    
    
    setFormInfo({ 
      address: event
    });
    

    //if (!formInfo.address ){
      
    //  setSearchButtonActive( true)
    //} else{

    //  setSearchButtonActive( false)

    //}
      
  }

  if (
    
    locationFromHook.pathname === "/login" || 
    locationFromHook.pathname === "/signup" ||
    locationFromHook.pathname === "/forgot" ||
    locationFromHook.pathname === "/edit" ||
    locationFromHook.pathname === "/change") {

        return null
    } 
    
    
  

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', () => handleScroll);
    };
  }, []);

  
  return (

    

    <BottomHalf >

      {console.log("rendering lookupSection")}
        
      <Lookup_Section_Wrapper>

        <Banner ref={LookupScrollToRef}> Take Action !!</Banner>
        <SubBanner > Contact your state Representative </SubBanner>

        <div className={`sticky-wrapper${isSticky && showCards ? ' sticky' : ''}`} ref={stepsRef}>
          
          <Steps bulletStatus={bulletStatus} setBulletStatus={setBulletStatus}>

          </Steps>
        </div>
        
        <LookupForm 
          setSearchButtonActive={setSearchButtonActive} 
          searchButtonActive={searchButtonActive} 
          
          coordinates={coordinates} 
          setCoordinates={setCoordinates} 
          showStatusCheck={showStatusCheck} 
          setShowStatusCheck={setShowStatusCheck} 
          status={status} 
          setStatus={setStatus} 
          lastTermSearched={lastTermSearched} 
          setLastTermSearched={setLastTermSearched} 
          showStatusSpinner={showStatusSpinner} 
          setShowStatusSpinner={setShowStatusSpinner} 
          showCards={showCards} 
          setShowCards={setShowCards} 
          
          handleChange2={handleChange2}
          formInfo={formInfo} 
          setFormInfo={setFormInfo} 
          setResults={setResults}
          ref={LookupInputRef}
          
        />

        <Results>
          <ResultCardOne showCards={showCards} results={results} />

          <ResultCardTwo showCards={showCards} results={results} />

          <DemoLetter showCards={showCards} results={results}>
            <Letter>
              
              <To>recipients:</To>
              <Email1>{results.one.email}</Email1>
              <Email2>{results.two.email}</Email2>
              <Message>
                
                This is a test message. I am a constituant of 
                <i style={{fontSize: ".8em"}}>({results.one.fullDistrict}/{results.two.fullDistrict})</i> 
                to be sent and displasdfsgsdg. Dsdfgsdfs sdfsf sdfsd sdfs.
                
    By treating marijuana like alcohol, we can take sales out of the hands of drug cartels in the underground criminal market and put them behind the counters of state-licensed businesses that are creating jobs and paying taxes.
    Law enforcement officials’ time and resources could be better spent addressing violent and otherwise serious crimes instead of arresting and prosecuting adults for using marijuana. For example, in Houston alone, over 15,000 burglaries with viable leads went uninvestigated in 2013. During that same time period, over 74,000 arrests for possession of marijuana occurred in Texas. Clearly, our tax dollars and our law enforcement priorities need to be redirected.

                
                
                </Message>
              <From>

                Sincerely, <br/>
                Alejandro Raffo <br/>
                {lastTermSearched} <br/>
                sdfsdfsdsdc@sdfsdfsdf.com

              </From>


            </Letter>
          </DemoLetter>
        </Results>
        
      </Lookup_Section_Wrapper>
    
    </BottomHalf> 


  )

}

const Newish = React.forwardRef(Look_Up_Section);


//export default props => <Look_Up_Section {...props} />

export default Newish;