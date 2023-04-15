
export const AddProduct = (props) => {
  return (
    <div>
        <button onClick={()=>props.setIsOpen(true)}>Yeni Ürün Ekle</button>
    </div>
  )
}

export default AddProduct;