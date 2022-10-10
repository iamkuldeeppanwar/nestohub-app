import logo from './logo.svg';
import './App.css';
import Home from './components/mainPages/home/Home';
import Header from './components/headers/Header';

function App() {
  return (
    <>
      <Header/>
      <div className="home">
         <Home/>
      </div>
     
    </>
  );
}

export default App;
