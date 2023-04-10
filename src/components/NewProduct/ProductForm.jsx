import "./ProductForm.css";

const ProductForm = () => {
  return (
    <form className="product-form">
      <div className="product-form-input">
        <labe>Ürün Adı : </labe>
        <input type="text" placeholder="Ürün Adı Giriniz .."></input>
        </div>

        <div className="product-form-input">
        <labe>Ürün Fiyarı : </labe>
        <input type="number" placeholder="Ürün Fiyatı Giriniz .."></input>
        </div>

        <div className="product-form-input">
        <labe>Ürün Görseli : </labe>
        <input type="text" placeholder="Ürün Görseli Giriniz .."></input>
        </div>
        <button className="product-form-button">Ürün Ekle</button>
    </form>
  );
};

export default ProductForm;
