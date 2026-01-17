const ProductCard = ({ product }) => {
  const image =
    product.product_images?.find(i => i.is_primary)?.image_url ||
    product.product_images?.[0]?.image_url;

  const redirect = () => {
    window.open(product.aff_link, '_blank', 'noopener,noreferrer');
  };

  return (
    <div style={styles.card}>
      <div style={styles.imageBox}>
        <img
          src={image}
          alt={product.name}
          style={styles.image}
          loading="lazy"
        />
      </div>

      {/* Product Name */}
      <div style={styles.name}>
        {product.name}
      </div>

      {/* Product Title – 3 lines */}
      {/* <p style={styles.title}>
        {product.title}
      </p> */}

      {/* Description – 5 lines */}
      <div style={styles.description}>
        {product.description}
      </div>

      {/* Read More */}
      <span
        style={styles.readMore}
        onClick={redirect}
      >
        Read more
      </span>

      {/* CTA */}
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
    padding: '12px',
    display: 'flex',
    flexDirection: 'column',
    boxShadow: '0 5px 14px rgba(0,0,0,0.08)',
    height: '100%'
  },

  imageBox: {
    height: '160px',
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
    fontSize: '14px',
    fontWeight: 600,
    marginTop: '8px',
    display: '-webkit-box',
    WebkitLineClamp: 3,
    WebkitBoxOrient: 'vertical',
    overflow: 'hidden'
  },

  /* 3-line ellipsis */
  title: {
    fontSize: '13px',
    color: '#444',
    marginTop: '4px',
    display: '-webkit-box',
    WebkitLineClamp: 3,
    WebkitBoxOrient: 'vertical',
    overflow: 'hidden'
  },

  /* 5-line ellipsis */
  description: {
    fontSize: '12px',
    color: '#666',
    marginTop: '10px',
    display: '-webkit-box',
    WebkitLineClamp: 2,
    WebkitBoxOrient: 'vertical',
    overflow: 'hidden'
  },

  readMore: {
    fontSize: '12px',
    color: '#2563eb',
    marginTop: '4px',
    cursor: 'pointer',
    fontWeight: 500
  },

  button: {
    marginTop: '10px',
    backgroundColor: '#2563eb',
    color: '#fff',
    padding: '9px',
    textAlign: 'center',
    borderRadius: '8px',
    textDecoration: 'none',
    fontWeight: 600
  }
};

export default ProductCard;


// const ProductCard = ({ product }) => {
//   const image =
//     product.product_images?.find(i => i.is_primary)?.image_url ||
//     product.product_images?.[0]?.image_url;

//   return (
//     <div style={styles.card}>
//       <div style={styles.imageBox}>
//         <img
//           src={image}
//           alt={product.name}
//           style={styles.image}
//           loading="lazy"
//         />
//       </div>

//       <div style={styles.content}>
//         <h3 style={styles.name}>{product.name}</h3>
//         <p style={styles.title}>{product.title}</p>
//         <p style={styles.desc}>{product.description}</p>
//       </div>

//       <a
//         href={product.aff_link}
//         target="_blank"
//         rel="noopener noreferrer"
//         style={styles.button}
//       >
//         See Price
//       </a>
//     </div>
//   );
// };

// const styles = {
//   card: {
//     backgroundColor: '#ffffff',
//     borderRadius: '12px',
//     padding: '12px',
//     display: 'flex',
//     flexDirection: 'column',
//     boxShadow: '0 5px 14px rgba(0,0,0,0.08)',
//     height: '100%'
//   },
//   imageBox: {
//     height: '160px',
//     display: 'flex',
//     justifyContent: 'center',
//     alignItems: 'center'
//   },
//   image: {
//     maxHeight: '100%',
//     maxWidth: '100%',
//     objectFit: 'contain'
//   },
//   content: {
//     flexGrow: 1
//   },
//   name: {
//     fontSize: '14px',
//     fontWeight: 600,
//     marginTop: '8px'
//   },
//   title: {
//     fontSize: '12px',
//     color: '#555',
//     marginTop: '2px'
//   },
//   desc: {
//     fontSize: '12px',
//     color: '#666',
//     marginTop: '6px'
//   },
//   button: {
//     marginTop: '10px',
//     backgroundColor: '#2563eb',
//     color: '#fff',
//     padding: '9px',
//     textAlign: 'center',
//     borderRadius: '8px',
//     textDecoration: 'none',
//     fontWeight: 600
//   }
// };

// export default ProductCard;



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
