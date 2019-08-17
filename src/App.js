
import React, {useState, useEffect} from 'react';
import axios from "axios";
import styled from 'styled-components';


import './App.css';


function App(card) {
  let [data, setData] =useState([]);
  

  console.log('PhotoCard.js -> %cwhere?:', 'color: green', 'Top')

  useEffect(() => {

  axios
.get("https://swapi.co/api/people/")

 .then (res => {
console.log('App.js -> %cres:', 'color: MediumBlue', res)

 setData(res.data.results)
// console.log('App.js -> %csetData:', 'color: navy', setData)

 })
.catch(err => {
console.error('App.js -> %c Problem getting data - check this: ', 'color: Fuchsia', err )

  
})


 }, [])
 if(!data) return <h1 className="loadingText">Loading...</h1>


  return (
    
    <section className="cardContainer">
          
    <Title className="Header">React Wars</Title>
    <div className="cardMap">
  
      {data.map(card => {
  
       

  return  <Container>
     
        <Card>
        <Content>

       <Name>{card.name} </Name>
       <Intro className="intro"> About {card.name} </Intro>
   
       <BirthYear className = "BirthYear">Near as we can tell, {card.name} was born or came into being on {card.birth_year}
       </BirthYear>
      

         <Height> {card.name} is about {Math.round(card.height*.0328084)} feet tall</Height>
         
      </Content>
      </Card>
     
      </Container>
      })}

    </div>
    </section>
  



)}
     
export default App
// console.log('App.js -> %cApp:', 'color: DarkCyan', App)


const Container = styled.div `
margin: 0 10% 0 30%;
align-contents: center;
grid-template-columns: 1fr 1fr 1fr;
grid-gap: 10px;

color: #444;

`
const Card = styled.div`

width: 60%;
color: MidnightBlue;
background: #50B4D8;
opacity: .8;
border: 2px solid Gray;
border-radius: 5px;
padding: 0 0 0 5% ;
  // padding: 20px;

  
  
`;

const Title = styled.h1`

 text-align: center;
      font-size: 4.5em; 
  color: #767676;
  font-family: Baskerville;
  text-transform: uppercase;
  
`;



const Name = styled.h1`

      
  color: #ff0000;
  font-family: Baskerville;
  text-transform: uppercase;

`;



const BirthYear=styled.p`
font-size="medium;
 
color: DimGray;
text-transform: uppercase;
font-family: Baskerville;
`
const Height=styled.p`
// text-align: center;
color: DimGray;
text-transform: uppercase;
font-weight: bold;
font-family: 'League Spartan Bold';
    font-weight:normal;
    font-style:normal;
`


const Intro=styled.p`
// text-align: center;
color: DimGray;
text-transform: uppercase;
font-weight: bold;
font-family: 'League Spartan Bold';
    font-weight:normal;
    font-style:normal;
`


const Content=styled.p `

color: Gray;
text-align: left;
margin: 0 5% 0 5%;
padding-bottom: 5%;

`
// const CharacterCard = styled.div `

// display:flex;
// flex-direction: column;
// justify-content: center;
// background: Black;
// margin: 2% 10% 0% 10%;

// `


  
