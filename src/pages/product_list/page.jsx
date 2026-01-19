import { useState, useEffect } from 'react';
import { useProducts } from '../../hooks/useProducts';
import ProductCard from '../../components/ProductCard/productcard';
import SearchFilter from '../../components/SearchFilter/searchfilter';

import { useCategories } from '../../hooks/useCategories';
import Header from '../../components/Header/header';
import banner from "../../assets/banner.png"
// require("../../assets/banner.png")
const ProductListing = () => {
  const categories = useCategories();
  const [selectedCategories, setSelectedCategories] = useState([]);
  const [search, setSearch] = useState('');
const [showAdModal, setShowAdModal] = useState(true);
 const [isClosing, setIsClosing] = useState(false);

  useEffect(() => {
    // show modal only once per page load
    setShowAdModal(true);
  }, []);

  const handleClose = () => {
    setIsClosing(true);

    setTimeout(() => {
      setShowAdModal(false);
    }, 300); // must match transition duration
  };

  // if (!showAdModal) return null;

  useEffect(() => {
    setSelectedCategories(categories.map(c => c.id));
    console.log("CCCC", categories)
  }, [categories]);

  const { products, loading } = useProducts(
    search,
    selectedCategories
  );

    const [columns, setColumns] = useState(2);

  useEffect(() => {
    const updateColumns = () => {
      const width = window.innerWidth;

      if (width >= 1600) setColumns(5);
      else if (width >= 641) setColumns(3);
      else setColumns(2);
    };

    updateColumns();
    window.addEventListener('resize', updateColumns);

    return () => window.removeEventListener('resize', updateColumns);
  }, []);

    // if (loading) return <p style={{ textAlign: 'center' }}>Loading...</p>;

  return (
    <>
      <Header
        categories={categories}
        selectedCategories={selectedCategories}
        setSelectedCategories={setSelectedCategories}
      />

      {/* <SearchFilter onSearch={setSearch} /> */}

      {loading ? (
        <p style={{ textAlign: 'center' }}>Loading your products...</p>
      ) : (
        <>
         {/* Advertisement Modal */}
      {showAdModal && (
        <div 
        // style={styles.overlay}
        style={{
        ...styles.overlay,
        opacity: isClosing ? 0 : 1
      }}
        >
          <div style={styles.modal}>
            <div style={styles.content}>
              {/* <h3 style={styles.title}>🔥 Special Offers</h3> */}

{/* <img
  src={banner}
  alt="Ad"
  style={{ width: '60%', borderRadius: '12px' }}
/> */}
              {/* <p style={styles.text}>
                Grab the best deals on trending products.
                Limited time offers available now.
              </p> */}
               <img src={banner} style={{width:"100%", height:"450px"}} />
          
            </div>
  {/* AD BACKGROUND */}
      {/* <div
        style={{
          ...styles.adBackground,
          width:"100%", height:"530px",
          backgroundImage: `url(${banner})` // change image path
        }}
      /> */}
       <button
              style={styles.shopButton}
              onClick={handleClose}
              // onClick={() => setShowAdModal(false)}
            >
              SHOP NOW
            </button>
          </div>
        </div>
      )}
              <div
        style={{
          ...styles.grid,
          gridTemplateColumns: `repeat(${columns}, 1fr)`
        }}
      >
          {products.map(p => (
            <ProductCard key={p.id} product={p} />
          ))}
        </div>
        </>
      )}
    </>
  );
};

const styles = {
    overlay: {
    position: 'fixed',
    top: 0,
    left: 0,
    width: '100vw',
    height: '100vh',
    background: 'rgba(0,0,0,0.55)',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
        transition: 'opacity 0.3s ease-in-out',
    zIndex: 9999
  },
 adBackground: {
    flex: 1,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat'
  },
  modal: {
    maxWidth: '420px',
    background: '#fff',
    borderRadius: '16px',
    overflow: 'hidden',
    display: 'flex',
    flexDirection: 'column'
  },

  content: {
    // padding: '20px',
    textAlign: 'center'
  },

  title: {
    marginBottom: '12px'
  },

  text: {
    fontSize: '14px',
    color: '#4b5563'
  },

  shopButton: {
    marginTop: 'auto', // 🔥 keeps button at bottom
    padding: '14px',
    border: 'none',
    background: '#111827',
    color: '#fff',
    fontWeight: 600,
    fontSize: '15px',
    cursor: 'pointer'
  },
  grid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(4, 1fr)',
    gap: '14px',
    padding: '12px'
  }
};

export default ProductListing;

// const ProductListing = () => {
//   const [search, setSearch] = useState('');
//   const { products, loading } = useProducts(search);
//   const [columns, setColumns] = useState(2);

//   useEffect(() => {
//     const updateColumns = () => {
//       const width = window.innerWidth;

//       if (width >= 1600) setColumns(5);
//       else if (width >= 641) setColumns(4);
//       else setColumns(2);
//     };

//     updateColumns();
//     window.addEventListener('resize', updateColumns);

//     return () => window.removeEventListener('resize', updateColumns);
//   }, []);

//   if (loading) return <p style={{ textAlign: 'center' }}>Loading...</p>;

//   return (
//     <div style={styles.page}>
//       {/* <SearchFilter onSearch={setSearch} /> */}

//       <div
//         style={{
//           ...styles.grid,
//           gridTemplateColumns: `repeat(${columns}, 1fr)`
//         }}
//       >
//         {products.map(product => (
//           <ProductCard key={product.id} product={product} />
//         ))}
//       </div>
//     </div>
//   );
// };

// const styles = {
//   page: {
//     maxWidth: '1800px',
//     margin: '0 auto',
//     padding: '12px'
//   },
//   grid: {
//     display: 'grid',
//     gap: '14px'
//   }
// };

// export default ProductListing;


// import { useState } from 'react';
// import { useProducts } from '../../hooks/useProducts';
// import ProductCard from '../../components/ProductCard/productcard';
// import SearchFilter from '../../components/SearchFilter/searchfilter';
// import "./styles.css"

// const ProductListing = () => {
//   const [search, setSearch] = useState('');
//   const { products, loading } = useProducts(search);

//   if (loading) return <p>Loading products...</p>;

//   return (
//     <>
//       {/* <SearchFilter onSearch={setSearch} /> */}
// <div style={{marginTop:"80px"}} />
//       <div className="product-grid">
        
//         {products.map(product => (
//           <ProductCard key={product.id} product={product} />
//         ))}
//       </div>
//     </>
//   );
// };

// export default ProductListing;


// import { useState } from 'react'


// function ProductListing() {
//   const [count, setCount] = useState(0)

//   const products = [
//   {
//     id: 1,
//     title: "Wireless Noise Cancelling Headphones",
//     image: "https://via.placeholder.com/400x300",
//     price: 79.99,
//     oldPrice: 99.99,
//     rating: 4.5,
//     reviews: 1245,
//     badge: "Best Seller",
//     link: "#",
//   },
//   {
//     id: 2,
//     title: "Smart Fitness Watch with Heart Rate Monitor",
//     image: "https://via.placeholder.com/400x300",
//     price: 59.99,
//     oldPrice: 79.99,
//     rating: 4.2,
//     reviews: 980,
//     badge: "Top Rated",
//     link: "#",
//   },
// ];

//   return (
//     <>
//       <div>
//         FRESHUIT
//       </div>
//      <div className="max-w-7xl mx-auto px-3 py-6">
//       <div style={{
//             display: "flex",
//     flexDirection: "row",
//       }} className="grid grid-cols-2 lg:grid-cols-5 gap-4">
//         {products.map((product) => (
//           <div
//             key={product.id}
//             className="bg-white rounded-lg shadow hover:shadow-lg transition"
//           >
//             {/* Image */}
//             <img
//               src={product.image}
//               alt={product.title}
//               loading="lazy"
//               className="w-full h-40 object-cover rounded-t-lg"
//             />

//             {/* Content */}
//             <div className="p-3">
//               <h3 className="text-sm font-semibold text-gray-800 line-clamp-2">
//                 {product.title}
//               </h3>

//               <p className="mt-1 font-bold text-gray-900">
//                 {product.price}
//               </p>

//               <a
//                 href={product.link}
//                 target="_blank"
//                 rel="nofollow sponsored"
//                 className="block mt-2 text-center bg-blue-600 hover:bg-blue-700 text-white text-sm py-2 rounded"
//               >
//                 Check Price
//               </a>
//             </div>
//           </div>
//         ))}
//       </div>
//     </div>
//     </>
//   )
// }

// export default ProductListing
