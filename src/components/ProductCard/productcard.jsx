const ProductCard = ({ product }) => {
  const image =
    product.product_images?.find(i => i.is_primary)?.image_url ||
    product.product_images?.[0]?.image_url;

  return (
    <div style={styles.card}>
      <div style={styles.imageWrapper}>
        <img
          src={image}
          alt={product.name}
          style={styles.image}
          loading="lazy"
        />
      </div>

      <h3 style={styles.name}>{product.name}</h3>
      <h4 style={styles.title}>{product.title}</h4>

      <p style={styles.description}>{product.description}</p>

      <a
        href={product.aff_link}
        target="_blank"
        rel="noopener noreferrer"
        style={styles.button}
      >
        See Price
      </a>
    </div>
  );
};

const styles = {
  card: {
    backgroundColor: '#ffffff',
    borderRadius: '12px',
    padding: '14px',
    display: 'flex',
    flexDirection: 'column',
    boxShadow: '0 6px 16px rgba(0,0,0,0.08)',
    minHeight: '100%',
    transition: 'transform 0.2s ease'
  },
  imageWrapper: {
    width: '100%',
    height: '180px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center'
  },
  image: {
    maxHeight: '100%',
    maxWidth: '100%',
    objectFit: 'contain'
  },
  name: {
    fontSize: 'clamp(14px, 2.5vw, 16px)',
    fontWeight: '600',
    marginTop: '10px'
  },
  title: {
    fontSize: 'clamp(12px, 2vw, 14px)',
    color: '#555',
    marginTop: '4px'
  },
  description: {
    fontSize: 'clamp(12px, 2vw, 13px)',
    color: '#666',
    marginTop: '6px',
    flexGrow: 1
  },
  button: {
    marginTop: '12px',
    backgroundColor: '#2563eb',
    color: '#fff',
    textAlign: 'center',
    padding: '10px',
    borderRadius: '8px',
    fontWeight: '600',
    textDecoration: 'none'
  }
};

export default ProductCard;


// import "./productcard.css"

// const ProductCard = ({ product }) => {
//   const image =
//     product.product_images?.find(img => img.is_primary)?.image_url ||
//     product.product_images?.[0]?.image_url;

//   return (
//     <div className="product-card">
//       <img src={image} alt={product.name} loading="lazy" />

//       <h3>{product.name}</h3>
//       {/* <h4>{product.title}</h4> */}

//       {/* <p>{product.description}</p> */}

//      <button
//   onClick={() => window.open(product.aff_link, '_blank', 'noopener,noreferrer')}
// >
//   See Price
// </button>
//     </div>
//   );
// };

// export default ProductCard;
