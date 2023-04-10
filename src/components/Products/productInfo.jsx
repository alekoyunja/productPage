const ProductInfo=(props)=>{
    return(
    <div className="product-info">
        <span className="reklam">Bilgisayarcilar.Com</span>
        {props.children}
    </div>
    )
};

export default ProductInfo;   