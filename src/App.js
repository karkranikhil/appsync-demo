import React from 'react';
import './App.css';
import CreateAuctionFormContainer from './createAuctionFormContainer';
import { Auctions } from './Auctions';

function App() {
  return (
    <div className="App">
      <CreateAuctionFormContainer/>
      <Auctions/>
    </div>
  );
}

export default App;
