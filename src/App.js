import './App.css';
import { Routes, Route } from 'react-router-dom'
import HomePage from './PageSections/HomePage';
import { useSelector } from 'react-redux'
// import Product from './Components/Product';
// import Comingsoon from './PageSections/Comingsoon'
import Addtocart from './PageSections/Addtocart';
import Comingsoon from './PageSections/Comingsoon';
function App() {
  const {soon, product, products} = useSelector((state) => state.changestate)
  return (
    <div className="App">
      {products && <Addtocart/>}
      {soon && <Comingsoon/>}
      <Routes>
        <Route index path="/" element={<HomePage/>}/>
        {/* <Route path='/:id/product' element={<Product/>}/>
        <Route path="/comingSoon" element={<Comingsoon/>}/>
        <Route path="/added-to-cart" element={<Addtocart/>}/> */}
      </Routes>
    </div>
  );
}

export default App;
