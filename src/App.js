import React, {useState, useEffect} from 'react';
import axios from "axios"
import './App.css';

const App = () => {

  let [data, setData] = useState([]);
  useEffect(() => {
 
    console.log("first render");
    axios.get(
      "https://swapi.co/api/people/?format=json")
      .then(res => {
       console.log(res.data);

        setData(res.data.results);
        console.log('App.js -> %cres.data.results:', 'color: green', res.data.results)
        // console.log('App.js -> %cdata:', 'color: red', data)
        // console.log('App.js -> %cindex:', 'color: teal', data.index)
      })
      
     
    }, []);

     console.log('App.js -> %cdata:', 'color: red', data)
     console.log('PhotoCard.js -> %cprops.eye_color:', 'color: indigo', data.eyes)
  // Try to think through what state you'll need for this app before starting. Then build out
  // the state properties here.

  // Fetch characters from the star wars api in an effect hook. Remember, anytime you have a 
  // side effect in a component, you want to think about which state and/or props it should
  // sync up with, if any.

  return (
    <div className="App">
      <h1 className="Header">React Wars</h1>
      Hello, is this thing on???
    </div>
  );
}

export default App;
