import { useState, useEffect } from 'react';
import Pokemon from './Pokemon';
import Card from './Card';

export default function App() {
  const [score, setScore] = useState(null);
  const [highscore, setHighscore] = useState(null);
  const [chosenCards, setChosenCards] = useState([]);
  const cards = [37, 39, 77, 121, 133, 12];

  function randomCards() {
    let copyCards = [...cards];
    let newCards = [];

    while (copyCards.length > 0) {
      const randomIndex = Math.floor(Math.random() * copyCards.length);
      const current = copyCards.splice(randomIndex, 1);
      console.log(current);
      console.log(newCards);
      newCards.push(current);
    }
    return newCards;
  }
  const random = randomCards();

  function addCard(e) {
    if (chosenCards.includes(e.target.id)) {
      console.log(e.target.id);
      console.log(`You lose`);
      setScore(0);
      setChosenCards([]);
    } else {
      setChosenCards([...chosenCards, e.target.id]);
      setScore(score + 1);
      if (score === highscore) {
        setHighscore(highscore + 1);
      }
      console.log(e.target.id);
      console.log(chosenCards);
    }
  }

  return (
    <>
      <h1>Pokemon Memory</h1>
      <h2>Score:{score} </h2>
      <h2>Highscore:{highscore}</h2>
      <div className="cardContainer">
        {random.map((card) => (
          <Card key={card} id={card} addCard={addCard}>
            <Pokemon key={card} id={card} />
          </Card>
        ))}
      </div>
    </>
  );
}
