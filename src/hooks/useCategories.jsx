import { useEffect, useState } from 'react';
import { supabase } from '../api/supabaseClient';

export const useCategories = () => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    const fetchCategories = async () => {
      const { data } = await supabase
        .from('categories')
        .select('id, name')
        .order('name');

      setCategories(data || []);
    };

    fetchCategories();
  }, []);

  return categories;
};
