
import { Component, useEffect, useState } from 'react';
import FactCard from './components/fact-card/fact-card.component';

import './App.css';

const App = () => {
  const [facts, setFacts] = useState([]);
  const [fact, setFact] = useState('Please click on generate');
  const [catUrl, setCateUrl] = useState(`https://robohash.org/1?set=set4&size=120x120`)

  useEffect(() =>{
    fetch('https://catfact.ninja/facts')
    .then(response => response.json())
    .then(facts => setFacts(facts))
  }, []);
   
  const handleClick = () => {
    const num = Math.floor(Math.random() * facts.data.length);
    const randFact = facts.data[num].fact;
    setFact(randFact);
    const randCat = `https://robohash.org/${num}?set=set4&size=120x120`;
    setCateUrl(randCat);
  }
  return (
    <div className="App">
      <FactCard catUrl={catUrl} fact={fact} btnValue={'Generate'} handleClick={handleClick} />
    </div>
  );
}

/*class App extends Component {
  constructor(){
    super();

    this.state = {
      theFacts: [],
      fact: 'Please click on generate'
    };
  }
   
  componentDidMount(){
    fetch('https://catfact.ninja/facts')
    .then(response => response.json())
    .then(facts => this.setState(() => {
      return {theFacts:facts}
    }))
    
  }
  
  handleClick = () => {
    const num = Math.floor(Math.random() * this.state.theFacts.data.length);
    const res = this.state.theFacts.data[num].fact;
     this.setState(() => {
       return {fact: res}
    });
    
  }

  render(){
    const{fact} = this.state;
    const{handleClick} = this;
    return(
      <div className="App">
      <RandomFact fact={fact} />
   <button onClick={handleClick}>Generate</button>
  </div>
    )
  }
}
*/
export default App;
