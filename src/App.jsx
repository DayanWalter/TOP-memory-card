import { useState, useEffect } from 'react';
import Pokemon from './Pokemon';
import Card from './Card';

export default function App() {
  const cards = [37, 39, 77, 121, 133];

  return (
    <>
      <h1>Pokemon Memory</h1>

      <>
        {cards.map((card) => (
          <Card key={card}>
            <Pokemon key={card} id={card} />
          </Card>
        ))}
      </>
    </>
  );
}
