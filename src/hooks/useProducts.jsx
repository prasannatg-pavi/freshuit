import { useEffect, useState } from 'react';
import { supabase } from '../api/supabaseClient';

export const useProducts = (search, categoryIds) => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProducts = async () => {
      setLoading(true);

      let query = supabase
        .from('products')
        .select(`
          id,
          name,
          description,
          aff_link,
          category_id,
          product_images(image_url, is_primary)
        `)
        .eq('is_active', true)
        .order('created_at', { ascending: false }); // ✅ RECENT FIRST


      if (search) {
        query = query.ilike('name', `%${search}%`);
      }

      if (categoryIds.length > 0) {
        query = query.in('category_id', categoryIds);
      }

      const { data } = await query;
      setProducts(data || []);
      setLoading(false);
    };

    fetchProducts();
  }, [search, categoryIds]);

  return { products, loading };
};


// import { useEffect, useState } from 'react';
// import { supabase } from '../api/supabaseClient';

// export const useProducts = (search = '', categoryId = null) => {
//   const [products, setProducts] = useState([]);
//   const [loading, setLoading] = useState(true);

//   useEffect(() => {
//     const fetchProducts = async () => {
//       setLoading(true);

//       let query = supabase
//         .from('products')
//         .select(`
//           id,
//           name,
//           description,
//           price,
//           aff_link,
//           product_images(image_url, is_primary)
//         `)
//         .eq('is_active', true);

//       if (search) {
//         query = query.ilike('name', `%${search}%`);
//       }

//       if (categoryId) {
//         query = query.eq('category_id', categoryId);
//       }

//       const { data, error } = await query;

//       if (!error) {
//         setProducts(data || []);
//       }

//       setLoading(false);
//     };

//     fetchProducts();
//   }, [search, categoryId]);

//   return { products, loading };
// };
