import React, {useState, useEffect} from 'react';
import axios from "axios"
import CharacterCard from "./CharacterCard"
import './App.css';

const App = (props) => {

  let [data, setData] = useState([]);
  useEffect(() => {
 
    console.log("first render");
    axios.get(
      "https://swapi.co/api/people/1/")
      .then(res => {
       console.log(res.data);
        let data = Object.entries(res.data)

        setData(data);
        // console.log('App.js -> %cres.data.results:', 'color: green', res.data.results)
        // console.log('App.js -> %cdata:', 'color: red', data)
        // console.log('App.js -> %cindex:', 'color: teal', data.index)
      })
      
     
    }, []);

    //  console.log('App.js -> %cdata:', 'color: red', data)
    //  console.log('PhotoCard.js -> %cprops.eye_color:', 'color: indigo', data.eye_color)
  // Try to think through what state you'll need for this app before starting. Then build out
  // the state properties here.

  // Fetch characters from the star wars api in an effect hook. Remember, anytime you have a 
  // side effect in a component, you want to think about which state and/or props it should
  // sync up with, if any.

  return (
    
    <section className="cardContainer">
    <h1 className="Header">React Wars</h1>
    <div className="App">{
 
      data.map(cardData => 
        <div>
          <CharacterCard key={cardData.name} title={data.name}
           height={Math.round(cardData.height*.0328084)} 
           hair = {cardData.hair_color}
           eyes = {cardData.eye_color}
           birthYear = {cardData.birth_year} />
        
        </div>)
  }
    </div>
    </section>
    

)
}
     
export default App



  

