import './App.css';
import { useState, useEffect } from 'react';
import Footer from './Footer.js';
import Header from './Header.js';
import Filter from './Filter.js';

function App() {
  const [loggedIn, setLoggedIn] = useState(false);
  const [userName, setUserName] = useState('');

  useEffect(() => {
    if(loggedIn) {
      setUserName('Melissa!');
    } else {
      setUserName('');
    }
  }, [loggedIn]);

  return (
    <div className="App">
      <Header />
      <h1>Welcome to Everyday is Monday</h1>
      
      {/* Message for the person when they log in - figure out how to make it dynamic based on the user, not just 'Melissa' */}
      {/* {
        loggedIn ? <h2>Hi, {userName}</h2> : null
      }
      <button onClick={() => setLoggedIn(!loggedIn)}>Log In</button> */}

      {/* Display for the shirt selections */}
      <div className="selectionSection">
        <ul className="selectionsContainer">
          <li>SHIRTS!!</li>
        </ul>
      </div>

      <Filter />
      <Footer />
    </div>
  );
}

export default App;

// App called Everyday is Monday
// "fake" e-com store where users can purchase t-shirts and other items with fun/sarcastic sayings on them - mostly "pessimistic-type" and cynical

// Functionality
// 1) Intro page welcoming users to the store - options to search by current mood, or a specific saying
// 2) Sort items that come back by most relevant, with options to sort by price/popularity
// 3) When items added to basket, it will pop across the right side of the screen with an ease-in-out effect
// 4) Use firebase or localstorage to keep track of items?
