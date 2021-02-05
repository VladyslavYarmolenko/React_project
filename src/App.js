import logo from './logo.svg';
import { BrowserRouter } from 'react-router-dom';
import './App.css';
import { Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './Components/Header';

function App() {
  return (
  <BrowserRouter>
    <Header/>
  </BrowserRouter>
  );
}

export default App;
