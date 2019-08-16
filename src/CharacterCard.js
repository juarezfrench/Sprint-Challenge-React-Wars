import React from "react";
import styled from 'styled-components';
import  "./App"










function CharacterCard(props)  {
// console.log('PhotoCard.js -> %cprops:', 'color: DarkOrange', props)


 console.log('PhotoCard.js -> %cprops, baby!:', 'color: DeepPink', props)
  



return (


<Card>
		
    
 			<div>
       <Name>{props.name} </Name>
       <Intro className="intro"> About " {props.name} "</Intro>
       
       <BirthYear className = "BirthYear">Near as we can tell, {props.name} was born or came into being on {props.birthYear}`</BirthYear>
       
      
       
       <Content className="explanation">

          `{props.name} is about {props.height} feet tall.` 

      </Content>
    
        
        
        
        
        
 				
		</div>
 		
 		
 	</Card>
)
 }


export default CharacterCard



const Name = styled.p`

  text-align: center;
  color: DimGray;
  font-family: Baskerville;
  text-transform: uppercase;
`;


const BirthYear=styled.p`
fonst-size="medium;
text-align: center;
color: DimGray;
text-transform: uppercase;
font-family: Baskerville;
`

const Intro=styled.p`
text-align: center;
color: DimGray;
text-transform: uppercase;
font-weight: bold;
font-family: 'League Spartan Bold';
    font-weight:normal;
    font-style:normal;
`


const Content=styled.p `
text-align: center;
color: Gray;
text-align: left;
margin: 0 5% 0 5%;
padding-bottom: 5%;

`

const Card = styled.div `

display:flex;
flex-direction: column;
justify-content: center;
background: Black;
margin: 2% 10% 0% 10%;

`
