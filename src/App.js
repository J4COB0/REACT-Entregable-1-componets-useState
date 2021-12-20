import logo from './logo.svg';
import './App.css';
import './QuoteBox';
import { useState } from 'react';
import quotes from './quotes.json';
import colors from './colors.json'
import QuoteBox from './QuoteBox';

/* Funtions */
const getRamdonNumber = (maxLimit) => Math.floor(Math.random() * maxLimit);


function App() {
  
  /* UseState */
  const [quote, setQuote] = useState( quotes[getRamdonNumber(quotes.length)] );
  const handleQuote = () => {
    setQuote( quotes[getRamdonNumber(quotes.length)] );
    handleColor();
  };
  
  const [color, setColor] = useState( colors[getRamdonNumber(colors.length)]);
  const handleColor = () => setColor( colors[getRamdonNumber(colors.length)])

  return (
    <>
      <QuoteBox 
        quote   = {quote.quote} 
        author  = {quote.author} 
        color   = {color}
        handleQuote = {handleQuote}/>
    </>
  );
}

export default App;
