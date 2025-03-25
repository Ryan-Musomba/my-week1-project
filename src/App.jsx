import React from 'react';
import BookLibrary from './Reactapp/BookLibrary';

 

function App() {


  return (
    <>
        <h2 style={{ color: '#333', textAlign: 'center', marginBottom: 20,  }}>Books</h2>
     
     <div className="App">
           <BookLibrary/>
          
          
         </div>
     
    </>
  
  );
}

export default App;