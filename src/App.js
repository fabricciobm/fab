import React from 'react';
import './App.css';
import AppRouter from './AppRouter';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Fab</h1>
      </header>
      <main>
        <AppRouter />
      </main>
    </div>
  );
}

export default App;
