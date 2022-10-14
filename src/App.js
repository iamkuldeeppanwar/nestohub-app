import logo from './logo.svg';
import React,{useState} from 'react';
import './App.css';
import Home from './components/mainPages/home/Home';
import Header from './components/headers/Header';

function App() {
  const [pop,setPop] = useState(false);
  return (
    <>
      <Header setPop={setPop}/>
      <div className="home">
         <Home pop={pop} setPop={setPop}/>
      </div>
     
    </>
  );
}

export default App;
