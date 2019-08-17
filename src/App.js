
import React from 'react';
import axios from "axios";
import styled from 'styled-components';
// import CharacterCard from "./CharacterCard"
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
          
    <h1 className="Header">React Wars</h1>
    <div className="cardMap">
  
      {data.map(card => {
  
       

  return <CharacterCard>
		
    
 			<div>
       <Name>{card.name} </Name>
       <Intro className="intro"> About {card.name} </Intro>
       
       <BirthYear className = "BirthYear">Near as we can tell, {card.name} was born or came into being on {card.birth_year}
       </BirthYear>
       
      
       
       <Content className="height">

          {card.name} is about {Math.round(card.height*.0328084)} feet tall.

      </Content>
    
      </div>
 		
 			</CharacterCard>
      })}
      
    </div>
    </section>
  



)}
     
export default App
// console.log('App.js -> %cApp:', 'color: DarkCyan', App)

const Name = styled.p`

   display: flex;
   justify-content: center;   
 
  color: DimGray;
  font-family: Baskerville;
  text-transform: uppercase;
  font-size: large;
`;


const BirthYear=styled.p`
font-size="medium;
display: flex;
justify-content: center;   
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
const CharacterCard = styled.div `

display:flex;
flex-direction: column;
justify-content: center;
background: Black;
margin: 2% 10% 0% 10%;

`


  
