import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home/Home';
import All from './pages/AllProducts';
import Categories from './pages/Categories/Categories';
import ProductDetails from './pages/ProductDetails/ProductDetails';
import Dashboard from './pages/Dashboard/Dashboard/Dashboard';
import Order from './pages/Order/Order';
import NoPage from './pages/NoPage';
import Test from './pages/Test/Test';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route index element={<Home />} />
          <Route path='/home' element={<Home />} />
          <Route path='/all' element={<All />} />
          <Route path='/categories' element={<Categories />} />
          <Route path='/product' element={<ProductDetails />} />
          <Route path='/place_order' element={<Order />} />
          <Route path='/dashboard' element={<Dashboard />} />
          <Route path='/test' element={<Test />} />
          <Route path='*' element={<NoPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
