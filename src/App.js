import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';
import Board from './components/Board';
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle.min'
import ScoreBoard from './components/ScoreBoard';
import shuffleArray from './helper';
function App() {
  console.log("App rendered")
  const [cardData,setCardData]=useState([]);
  const [clickedCardIds,setClickedCardIds]=useState([])
  const [currentScore,setCurrentScore]=useState(0)
  const [bestScore,setBestScore]=useState(0)
  function fetchData(){
    fetch(`https://rickandmortyapi.com/api/character?page=${Math.floor(Math.random() * 41)}`)
    .then((response)=>response.json()).then((data)=>{
      const cards=shuffleArray(data.results);setCardData(cards)}).catch((error)=>console.log("error loading:",error));
    console.log(cardData);
  }
  useEffect(
    ()=>fetchData(),[]
  )
  function onCardClick(cardId){
        if(clickedCardIds.includes(cardId)){
          setCurrentScore(0);
          setClickedCardIds([]);
        }
        else{
          setCurrentScore(currentScore+1);
          setClickedCardIds([...clickedCardIds,cardId]);
          if(bestScore<currentScore+1)
          setBestScore(currentScore+1);
        }
        const cards=shuffleArray(cardData);
        setCardData(cards)

        
  }
  return (
    <div className="App">
      <header className="App-header">
      <div className='App-body'>
        <ScoreBoard currentScore={currentScore} bestScore={bestScore}/>
        <Board data={cardData} onCardClick={onCardClick}/>
      </div>
      </header>
    </div>
  );
}

export default App;
