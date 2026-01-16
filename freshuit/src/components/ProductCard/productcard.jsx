import "./productcard.css"

const ProductCard = ({ product }) => {
  const image =
    product.product_images?.find(img => img.is_primary)?.image_url ||
    product.product_images?.[0]?.image_url;

  return (
    <div className="product-card">
      <img src={image} alt={product.name} loading="lazy" />

      <h3>{product.name}</h3>
      {/* <h4>{product.title}</h4> */}

      {/* <p>{product.description}</p> */}

     <button
  onClick={() => window.open(product.aff_link, '_blank', 'noopener,noreferrer')}
>
  See Price
</button>
    </div>
  );
};

export default ProductCard;
