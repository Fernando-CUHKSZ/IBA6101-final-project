import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import HomePage from './components/HomePage';
import MBTIAnalysis from './components/MBTIAnalysis';
import './styles/global.css';

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <main>
          <Switch>
            <Route exact path="/" component={HomePage} />
            <Route path="/mbti-analysis" component={MBTIAnalysis} />
          </Switch>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;