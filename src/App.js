import './App.css';
import Header from './components/Header/Header';
import Home from './components/Home/Home';
import { Route, Routes } from 'react-router-dom';
import OrderReview from './components/OrderReview/OrderReview';
import Grandapa from './components/Grandpa/Grandapa';

function App() {
  return (
    <div className="App">
      <Header></Header>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path='/orderreview' element={<OrderReview />} />
        <Route path='/grandpa' element={<Grandapa />} />
      </Routes>
    </div>
  );
}

export default App;
