import React, {useEffect, useState, useRef} from 'react';
import {Link, useLocation} from 'react-router-dom'
import styled, { ThemeProvider } from 'styled-components';
import LookupForm from '../packs/lookupForm.jsx'
import ResultCardOne from './resultCardOne.jsx'
import ResultCardTwo from './resultCardTwo.jsx'
import ResetButton from './newSearchButton.jsx'
import Steps from './steps'
import '../../assets/stylesheets/steps.scss'
import '../../assets/stylesheets/sendButton'

import useFitText from "use-fit-text";
import megaphone from '../../assets/images/megaphone'







const BottomHalf = styled.div`

  
  background-color: #edeaea;
  



`;


const Lookup_Section_Wrapper = styled.div`
    
  display: grid;
  //grid-gap: 25px;
  padding: 25px 10px;
  grid-column-gap: 20px;
  grid-template-columns: 38% minmax(150px, 1fr);
  grid-template-rows: 50px minmax(0px, 50px) minmax(0px, 33px) 55px minmax(min-content, max-content) 10px minmax(min-content, max-content) 20px minmax(min-content, max-content) 50px;
  justify-content: center;
  justify-items: center;
  grid-template-areas:
          "   .         .    "
          "megaphone  banner"
          "megaphone  subbanner"
          "   hr          hr   "
          "  steps         steps"
          "  .              .   "
          "   form         form"
          "   .            .    "
          " results        results"
          " .                 .   ";


  //margin-top: 25px;
  //background-color: #F9F9F9;
  @media screen and (max-width: 800px){
    grid-template-columns: 30% minmax(150px, 1fr);
  }

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

const BannerWrapper = styled.div`

  


`;

const MegaPhone = styled.img`

  //justify-selfwidth: 50px;
  height: 100%;
  transform: scaleX(-1);
  grid-area: megaphone;
  justify-self: end;
  align-self: flex-end; 



`;

const Banner = styled.h1`


  grid-area: banner; 
  //padding: 60px 10px 0px 10px;
  //margin-bottom: 20px;
  
  //text-align: center;
  justify-self: start;
  align-self: flex-end;
  line-height: 90%;
  

`;

const SubBanner = styled.h3`


  grid-area: subbanner; 
  font-size: .7em;
  justify-self: start;
  align-self: start;
  padding-top: 5px;
  text-align: start;
  line-height: 90%;

`;

const AlternateEnding = styled.div`

    
  overflow: hidden;
  display: ${props => props.showCards ? "grid" : "block"};
  grid-template-columns: repeat( 2, minmax(150px, 250px) );
  //grid-template-rows: minmax(300px, auto) minmax(35px, 45px) 35px;
  grid-template-rows: minmax(210px, auto) minmax(35px, 45px) 35px;
  
  grid-column-gap: 20px;
  grid-area: results;
  //padding: 20px 20px 50px 20px;
  grid-template-areas:
    "  cardOne     cardTwo  "
    "cardOneInfo cardTwoInfo"
    "     .           .     ";
`;

const Results = styled.div`

  
  overflow: hidden;
  display: ${props => props.showCards ? "grid" : "block"};
  
  grid-template-columns: minmax(240px, 250px) minmax(240px, 250px) minmax(450px,600px);
  grid-template-rows: minmax(300px, auto) minmax(35px, 45px) minmax(min-content, max-content);
  
  grid-column-gap: 30px;
  grid-area: results;
  //padding: 20px 20px 50px 20px;
  grid-template-areas:
    
    
    "  cardOne     cardTwo   demoLetter"
    "cardOneInfo cardTwoInfo     demoLetter     "
    "     .           .      demoLetter";
    


  @media screen and (max-width: 1050px){

    grid-template-columns: 230px minmax(375px,650px);
    grid-template-rows: 290px minmax(40px, 50px) 23px 290px minmax(40px, 50px) 1fr;
    
    grid-template-areas:
    
    "  cardOne   demoLetter "
    "cardOneInfo demoLetter"
    "     .      demoLetter   "
    "  cardTwo   demoLetter"
    "cardTwoInfo demoLetter "
    "     .      demoLetter";

    

  }

  @media screen and (max-width: 631px){

    grid-template-columns: minmax(min-content, max-content) minmax(min-content, max-content);
    grid-template-rows: minmax(210px, max-content) minmax(35px, 45px) 35px 1fr;
    grid-template-areas:
    "cardOne cardTwo "
    "cardOneInfo cardTwoInfo "
    "    .         .        "
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
  line-height: 1.1em;
  align-self: flex-end;

`;

const DemoLetter = styled.div`

  grid-area: demoLetter;
  max-height: ${ props => props.showCards.toString() == "false" ? "0px" : "100%"};
  opacity: ${ props => props.showCards.toString() == "false" ? "0" : "1"};
  align-self: start;

`;


const Letter = styled.div`

  display: grid;
  grid-template-columns: minmax(min-content, max-content ) minmax(0px, 1fr) minmax(min-content, max-content );
  grid-template-rows: minmax(min-content, max-content) minmax(min-content, max-content) 1fr minmax(min-content, max-content);
  grid-template-areas:
    "to  email1 email1"
    " .  email2 email2"
    "message message message"
    "from from button";

    height: 100%;
    grid-column-gap: 15px;
    //grid-row-gap: 25px;


`;

const SendButton = styled.a`

    justify-self: center;
    align-self: flex-end;
    grid-area: button;


`;

const CardOneInfo = styled.div`

    grid-area: cardOneInfo;
    justify-self: center;
    align-self: start;
    

`;

const CardTwoInfo = styled.div`
  
  grid-area: cardTwoInfo;
  justify-self: center;
  align-self: start;

`;

const Hr = styled.hr`
  
  grid-area: hr;
  display: block;
  height: 1px;
  border: 0;
  border-top: 1px solid #ccc;
  margin: 1em 0;
  padding: 0;
  width: 83vw;
  align-self: start;




`;

function Look_Up_Section (props, ref) {

  const locationFromHook = useLocation();


  const {LookupScrollToRef, LookupInputRef} = ref;

  const [showCards, setShowCards] = React.useState( false )
  const [showSteps, setShowSteps] = React.useState( false )
  const [sendButtonClass, setSendButtonClass] = React.useState("button success")
  const [resultFromFlorida, setResultFromFlorida] = React.useState(true)
  
  //const [results, setResults] = React.useState( {"one":{"resultFromFlorida":"true","name":"Juan Alfonso Fernandez-Barquin","firstName":"","lastName":"","image":"https://www.myfloridahouse.gov//FileStores/Web/Imaging/Member/4709.jpg","id":"ocd-person/a8c88fee-1915-4907-ae37-5755c4bff446","email":"JuanF.Barquin@myfloridahouse.gov","chamber":"House","party":"Republican","parent":"Florida Legislature","district":"119","fullDistrict":"Florida State House district 119","fullDistrictTrunk":"Florida State House"},"two":{"name":"Annette Taddeo","firstName":"Annette","lastName":"Taddeo","image":"http://www.flsenate.gov/PublishedContent/Senators/2018-2020/Photos/s40_5331.jpg","id":"ocd-person/ea190b03-d1ca-4d75-89c7-dca745386db7","email":"taddeo.annette.web@flsenate.gov","chamber":"Senate","party":"Democrat","parent":"Florida Legislature","district":"40","fullDistrict":"Florida State Senate  ","fullDistrictTrunk":"Florida State Senate"}});
  const [results, setResults] = React.useState( {"one": {}, "two": {} });

  const [showStatusSpinner, setShowStatusSpinner] = React.useState (false)
  const [showStatusCheck, setShowStatusCheck] = React.useState (false)
  const [showStatusCheck2, setShowStatusCheck2] = React.useState (false)

  const [status, setStatus] = React.useState ("")
  const [lastTermSearched, setLastTermSearched] = React.useState ('')

  const [coordinates, setCoordinates] = React.useState ({lat: '', lng: ''})

  const [searchButtonActive, setSearchButtonActive] = React.useState (false)
  
  const [formInfo, setFormInfo] = React.useState({
    
    address: ''
  
  })

  const [bullet1, setBullet1] = React.useState('NOT_COMPLETED')
  const [bullet2, setBullet2] = React.useState('NOT_COMPLETED')
  const [bullet1msg, setBullet1msg] = React.useState('Enter Address')
  const [bullet2msg, setBullet2msg] = React.useState('Send Message')

  const [isSticky, setSticky] = useState(false);
  const stepsRef = useRef(null);
  const handleScroll = () => {
    if (stepsRef.current) {
      setSticky(stepsRef.current.getBoundingClientRect().top <= 46);
    }
  };

  const { fontSize, textRef } = useFitText({maxFontSize: 90, minFontSize: 50});
  const sendButtonRef = useRef(null);
  
  
  const animateButton = function(e) {

    e.preventDefault;
    //reset animation
    //e.target.classList.remove('animate');
    
    //e.target.classList.add('animate');
    setSendButtonClass("button success animate")
    //e.target.classList.add('animate');
    setBullet2("COMPLETED")
    setBullet2msg("Message Sent")
    setShowStatusCheck2(true)
    //setTimeout(function(){
      //e.target.classList.remove('animate');
    //},6000);
    setTimeout(function(){
      setShowSteps(false)
      //e.target.classList.remove('animate')
    },3000);
  
  
    ////var classname = document.getElementsByClassName("button");
    
    ////for (var i = 0; i < classname.length; i++) {
    ////  classname[i].addEventListener('click', animateButton, false);
    //}
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

  //if (
    
  //  locationFromHook.pathname === "/login" || 
  //  locationFromHook.pathname === "/signup" ||
  //  locationFromHook.pathname === "/forgot" ||
  //  locationFromHook.pathname === "/edit" ||
  //  locationFromHook.pathname === "/change") {

     //   return null
    //} 
    
    
  

  useEffect(() => {

    
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', () => handleScroll);
    };
  }, []);

  
  return (

    

    <BottomHalf>

      {console.log("rendering lookupSection")}
        
      <Lookup_Section_Wrapper ref={LookupScrollToRef}>
        
        <MegaPhone src={megaphone}></MegaPhone>
        <Banner > Take Action!!</Banner>
      
        <SubBanner> Contact your Florida State Representative </SubBanner>

        <Hr></Hr>

        <div style={{gridArea: "steps", justifySelf: "center"}} className={`sticky-wrapper${isSticky && showSteps ? ' sticky' : ''}`} ref={stepsRef}>
          
          <Steps
            resultFromFlorida={resultFromFlorida} 
            
            setShowStatusCheck={setShowStatusCheck} 
            setShowStatusCheck2={setShowStatusCheck2}
            
            showStatusCheck={showStatusCheck} 
            showStatusCheck2={showStatusCheck2}
            
            bullet1msg={bullet1msg} 
            bullet2msg={bullet2msg} 
            
            bullet1={bullet1} 
            bullet2={bullet2} 
            
            setBullet1={setBullet1} 
            setBullet2={setBullet2}>

          </Steps>
        </div>
        
        <LookupForm 
          setSearchButtonActive={setSearchButtonActive} 
          searchButtonActive={searchButtonActive} 
          
          coordinates={coordinates} 
          setCoordinates={setCoordinates} 
          showStatusCheck={showStatusCheck} 
          setShowStatusCheck={setShowStatusCheck} 
          showStatusCheck2={showStatusCheck2} 
          setShowStatusCheck2={setShowStatusCheck2}
          status={status} 
          setStatus={setStatus} 
          lastTermSearched={lastTermSearched} 
          setLastTermSearched={setLastTermSearched} 
          showStatusSpinner={showStatusSpinner} 
          setShowStatusSpinner={setShowStatusSpinner} 
          showCards={showCards} 
          setShowCards={setShowCards} 
          
          bullet1={bullet1} 
          bullet2={bullet2} 
          setBullet1={setBullet1} 
          setBullet2={setBullet2}
          handleChange2={handleChange2}
          formInfo={formInfo} 
          setFormInfo={setFormInfo} 
          setResults={setResults}
          ref={LookupInputRef}
          setShowSteps={setShowSteps}
          setSendButtonClass={setSendButtonClass}
          sendButtonRef={sendButtonRef}
          setBullet1msg={setBullet1msg}
          setBullet2msg={setBullet2msg}

          setResultFromFlorida={setResultFromFlorida}
          resultFromFlorida={resultFromFlorida}
        />

        
        {resultFromFlorida == "true" ? (
         <Results showCards={showCards}>
            
            
            <ResultCardOne showCards={showCards} results={results} />
            <CardOneInfo><sub style={{fontSize: ".7em"}}>{results.one.fullDistrictTrunk}</sub></CardOneInfo>
            
            <ResultCardTwo showCards={showCards} results={results} />
            <CardTwoInfo><sub style={{fontSize: ".7em"}}>{results.two.fullDistrictTrunk}</sub></CardTwoInfo>

            <DemoLetter showCards={showCards} results={results}>
              <Letter>
                
                <To>recipients:</To>
                <Email1>{results.one.email}</Email1>
                <Email2>{results.two.email}</Email2>
                
                <Message>

                  Dear <i style={{fontSize: ".8em"}}>Representative/Senator,</i><br/><br/>
                  
                  
                  <p style={{textIndent: "4em"}}>
                    I am a constituant of <i style={{fontSize: ".8em"}}>({results.one.fullDistrict}/{results.two.fullDistrictTrunk} district {results.two.district}).</i> 
                    
                    I am writing on behalf of legalizing marijuana to all above the age of eighteen. 
                    Marijuana is as much a recreational drug as alcohol, tobacco, and even coffee. 
                    Marijuana has never had a report of fatal use and the common use for medical 
                    purposes has been proved and even infused into society today. Many states today 
                    have legalized it's medical purposes because it has proven to help certain illnesses 
                    including glaucoma,  sclerosis, and cancers such as breast and brain cancer. 
                    Prohibition has only cost billions of dollars and studies prove that it has not 
                    affected the use of marijuana, in fact it has made it cheaper and more accessible. 
                    All the money used for prosecution of small offenders can be used for tax revenues 
                    and ultimately save billions.  
                  </p><br/>

                  <p style={{textIndent: "4em"}}>
                  
                    With your help general change could be possible. We recommend commercial production 
                    be limited to licensed producers although non retail and home production is allowed. 
                    Quality control and retail will also be limited by the state and state licensed 
                    distributors. The state will make up all laws that go towards this new legalization 
                    but mainly the important thing is that it is legal. Marijuana is a herbal and proven 
                    remedy that with its ban is causing more problems than its fixing.
                  </p><br/>
                  
                  <p style={{textIndent: "4em"}}>
                    By treating marijuana like alcohol, we can take sales out of the hands of drug cartels 
                    in the underground criminal market and put them behind the counters of state-licensed 
                    businesses that are creating jobs and paying taxes.
                    Law enforcement officials’ time and resources could be better spent addressing violent 
                    and otherwise serious crimes instead of arresting and prosecuting adults for using 
                    marijuana. 
                  </p>

                  
                  
                </Message>
                
                <From>

                  Sincerely, <br/>
                  <sub>Your Name Here</sub> <br/>
                  <span ref={textRef} style={{fontSize}}>{lastTermSearched} </span><br/>
                  <sub>Your Email Here</sub> <br/>

                </From>
                
                <SendButton>
                  
                  
                  <div className="wrapper">
                    <div ref={sendButtonRef} className="block" onClick={animateButton}><button className={props.appState.loggedInStatus == "LOGGED_IN" ? sendButtonClass : sendButtonClass}>Send</button></div>
                    
                  </div>
                </SendButton>
              </Letter>
            </DemoLetter>
          </Results>
        ):(


          <AlternateEnding showCards={showCards}>
            <ResultCardOne showCards={showCards} results={results} />
            <CardOneInfo><sub>{results.one.fullDistrictTrunk ? "*" + results.one.fullDistrictTrunk : null }</sub></CardOneInfo>
            <ResultCardTwo showCards={showCards} results={results} />
            <CardTwoInfo><sub>{results.two.fullDistrictTrunk ? "*" + results.two.fullDistrictTrunk : null }</sub></CardTwoInfo>
          </AlternateEnding>

        )}



        
      </Lookup_Section_Wrapper>
    
    </BottomHalf> 


  )

}

const Newish = React.forwardRef(Look_Up_Section);


//export default props => <Look_Up_Section {...props} />

export default Newish;