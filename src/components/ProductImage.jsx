// Images
import TShirt from "../images/t-shirt.png";

const ProductImage = (props) => {
  return (
    <div className="col-span-5 border border-neutral-200 rounded-lg cursor-pointer">
      <img src={props.product.image} alt="t-shirt" className="w-full" />
    </div>
  );
};

export default ProductImage;
