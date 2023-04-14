import Counter from "../Counter";
import ProductInfo from "./ProductInfo";
import "./ProductItem.css";
import { useState } from "react";

const ProductItem=({ product })=> {
  const { imageUrl, productName, productPrize } = product;
  
  const [counter,setCounter]=useState(productPrize);
  const [title,setTitle]=useState(productName);



  const clickHandler=()=> {
    setTitle("Güncellendi..!")
    
  };
 

  return (
    <div className="product-item"> 
      <div className="product-image">
        <img src={imageUrl} alt="" />
      </div>
      
      <ProductInfo>
        <h2>{title}</h2>
        
        <Counter productPrize={productPrize}
        counter={counter}
        setCounter={setCounter}>
        <span>{counter} $</span>
        </Counter>
        <br/>
        <button onClick={clickHandler}>Güncelle</button>
        
      </ProductInfo>
    </div>
  );
}

export default ProductItem;
