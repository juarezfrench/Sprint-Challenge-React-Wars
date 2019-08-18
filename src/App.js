
import React, {useState, useEffect} from 'react';
import axios from "axios";
import styled from 'styled-components';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import './App.css'


const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,

    control: {
      padding: theme.spacing(2),
    },
  }
}));


function App(card) {
  let [data, setData] =useState([]);
  const classes = useStyles();
  
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
  
       

  return <Grid container spacing={3}>
   
    
        <Grid item xs>
           <Paper className={classes.paper}>
       <Name>{card.name} </Name>
       <Intro className="intro"> About {card.name} </Intro>
   
       <BirthYear className = "BirthYear">Near as we can tell, {card.name} was born or came into being on {card.birth_year}
       </BirthYear>
      

         <Height> {card.name} is about {Math.round(card.height*.0328084)} feet tall</Height>
         </Paper>
         </Grid>
  
</Grid>
      })}

    </div>
    </section>
  



)}
     
export default App
// console.log('App.js -> %cApp:', 'color: DarkCyan', App)


// const Container = styled.div `
// margin: 0 10% 0 30%;
// align-contents: center;
// columns={columns}
//   rowGetter={i => rows[i]}
//   rowsCount={3}
// grid-gap: 1rem;


// color: #4444;

// `




const Title = styled.h1`

 text-align: center;
      font-size: 4.5em; 
  color: #767676;
  font-family: Baskerville;
  text-transform: uppercase;const Card = styled.div
  
`

const Name = styled.h1`

      
  color: #ff0000;
  font-family: Baskerville;
  text-transform: uppercase;yarn add @material-ui/core

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



// const CharacterCard = styled.div `

// display:flex;
// flex-direction: column;
// justify-content: center;
// background: Black;
// margin: 2% 10% 0% 10%;

// `


  
