import React from 'react';

function App() {
  // testing connection to api
  fetch('http://localhost:5000/api/courses')
    .then(res => res.json())
    .then(data => console.log(data))

  return (
    <div className="App">
      
    </div>
  );
}

export default App;