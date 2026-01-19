import Header from './components/Header/header';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import ProductListing from './pages/product_list/page';
import AddProduct from './pages/add_product/page';

function App() {
  return (
    <>
     <BrowserRouter>
      <Routes>
        <Route path="/" element={<ProductListing />} />
        <Route path="/addProduct" element={<AddProduct />} />
      </Routes>
    </BrowserRouter>
      {/* <Header /> */}
      {/* <ProductListing /> */}
    </>
  );
}

export default App;

// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import './App.css'
// import ProductListing from './pages/product_list/page'

// function App() {
//   const [count, setCount] = useState(0)

//   return (
//     <>
    
//       <ProductListing />
      
//     </>
//   )
// }

// export default App
