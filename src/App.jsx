import React from 'react';
import Item from './Reactapp/Item';
import List from './Reactapp/List'; 

function App() {
  const books = [
    { id: 1, title: "Solo Leveling", author: "Chugong" },
    { id: 2, title: "The Beginning After the End", author: "TurtleMe" },
    { id: 3, title: "Omniscient Reader's Viewpoint", author: "Sing-Shong" },
    { id: 4, title: "Overgeared", author: "Park Saenai" },
    { id: 5, title: "The Second Coming of Gluttony", author: "Ro Yu-jin" },
  ];

  return (
    <div>
      <h2 style={{ color: '#333', textAlign: 'center', marginBottom: 20 }}>Books</h2>
      {books.map((book) => (
        <Item key={book.id} title={book.title} author={book.author} />
      ))}

<h2 style={{ color: '#333', textAlign: 'center', marginBottom: 20 }}>Books</h2>
       <List items={books} />
    </div>
  );
}

export default App;