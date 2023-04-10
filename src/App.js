import ProductItem from './components/Products/ProductsItem';
import './App.css';
import Products from './components/Products/products.jsx';
import Counter from './components/Counter';
import { useState } from 'react';



const App=()=> {
  const [counter,setCounter]=useState(0);

  return (
    <div className="App">
        
     <Products/>
    <Counter
    counter={counter} 
    setCounter={setCounter}
    productPrice={counter}
    >
      {counter}
   </Counter>
    </div>
  );
}

export default App;
