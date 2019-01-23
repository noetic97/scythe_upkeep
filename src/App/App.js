import React, { Component } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import '../styles/main.scss';

class App extends Component {
  constructor() {
    super()
    this.state = {
      currentTurn: 0,
      collectMoney: false,
      adjustPopularity: false,
      adjustStrength: false
    }
  }
  render() {
    return (
      <div className="App">
        <Header />
        <main className="content">
          
        </main>
        <Footer />
      </div>
    );
  }
}

export default App;
