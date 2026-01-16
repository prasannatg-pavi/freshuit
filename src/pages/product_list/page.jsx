import { useState } from 'react';
import { useProducts } from '../../hooks/useProducts';
import ProductCard from '../../components/ProductCard/productcard';
import SearchFilter from '../../components/SearchFilter/searchfilter';
import "./styles.css"

const ProductListing = () => {
  const [search, setSearch] = useState('');
  const { products, loading } = useProducts(search);

  if (loading) return <p>Loading products...</p>;

  return (
    <>
      {/* <SearchFilter onSearch={setSearch} /> */}

      <div className="product-grid">
        {products.map(product => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </>
  );
};

export default ProductListing;


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
