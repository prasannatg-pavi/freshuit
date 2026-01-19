import { useState } from 'react';
import { supabase } from '../../api/supabaseClient';//'../api/supabaseClient';
import { useCategories } from '../../hooks/useCategories';

const AddProduct = () => {
  const categories = useCategories() || [];

  const [form, setForm] = useState({
    name: '',
    description: '',
    price: '',
    aff_link: '',
    category_id: '',
    image_url: '',
    is_active: true
  });

  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState('');

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;

    setForm({
      ...form,
      [name]: type === 'checkbox' ? checked : value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setMessage('');

    if (!form.name || !form.price || !form.category_id || !form.aff_link || !form.image_url || !form.description) {
      setMessage('Please fill all required fields');
      setLoading(false);
      return;
    }

    // 1️⃣ Insert product
    const { data: product, error: productError } =
      await supabase
        .from('products')
        .insert([{
          name: form.name,
          description: form.description,
          price: Number(form.price),
          aff_link: form.aff_link,
          category_id: form.category_id || null,
          is_active: form.is_active
        }])
        .select()
        .single();

    if (productError) {
      setMessage('Failed to create product');
      setLoading(false);
      return;
    }

    // 2️⃣ Insert primary image
    const { error: imageError } =
      await supabase
        .from('product_images')
        .insert([{
          product_id: product.id,
          image_url: form.image_url,
          is_primary: true
        }]);

    if (imageError) {
      setMessage('Product added, image failed');
      setLoading(false);
      return;
    }

    setMessage('Product added successfully');
    setForm({
      name: '',
      description: '',
      price: '',
      aff_link: '',
      category_id: '',
      image_url: '',
      is_active: true
    });

    setLoading(false);
  };

  return (
    <div style={styles.page}>
      <h2 style={styles.heading}>Add Product</h2>

      <form onSubmit={handleSubmit} style={styles.form}>

        <input
          style={styles.input}
          name="name"
          placeholder="Product Name *"
          value={form.name}
          onChange={handleChange}
        />

        {/* <input
          style={styles.input}
          name="title"
          placeholder="Product Title"
          value={form.title}
          onChange={handleChange}
        /> */}

        <textarea
          style={styles.textarea}
          name="description"
          placeholder="Product Description"
          value={form.description}
          onChange={handleChange}
        />

        <input
          style={styles.input}
          name="image_url"
          placeholder="Primary Image URL *"
          value={form.image_url}
          onChange={handleChange}
        />

        <input
          style={styles.input}
          name="price"
          type="number"
          placeholder="Price *"
          value={form.price}
          onChange={handleChange}
        />

        <input
          style={styles.input}
          name="aff_link"
          placeholder="Affiliate Link *"
          value={form.aff_link}
          onChange={handleChange}
        />

        <select
          style={styles.select}
          name="category_id"
          value={form.category_id}
          onChange={handleChange}
        >
          <option value="">Select Category</option>
          {categories.map(cat => (
            <option key={cat.id} value={cat.id}>
              {cat.name}
            </option>
          ))}
        </select>

        <label style={styles.checkboxRow}>
          <input
            type="checkbox"
            name="is_active"
            checked={form.is_active}
            onChange={handleChange}
          />
          Active Product
        </label>

        <button
          type="submit"
          style={{
            ...styles.button,
            opacity: loading ? 0.6 : 1
          }}
          disabled={loading}
        >
          {loading ? 'Saving...' : 'Add Product'}
        </button>

        {message && (
          <p style={styles.message}>{message}</p>
        )}
      </form>
    </div>
  );
};

const styles = {
  page: {
    maxWidth: '640px',
    margin: '32px auto',
    padding: '16px'
  },
  heading: {
    textAlign: 'center',
    marginBottom: '20px'
  },
  form: {
    display: 'flex',
    flexDirection: 'column',
    gap: '12px'
  },
  input: {
    padding: '12px',
    borderRadius: '8px',
    border: '1px solid #d1d5db',
    fontSize: '14px'
  },
  textarea: {
    padding: '12px',
    minHeight: '120px',
    borderRadius: '8px',
    border: '1px solid #d1d5db',
    fontSize: '14px'
  },
  select: {
    padding: '12px',
    borderRadius: '8px',
    border: '1px solid #d1d5db',
    fontSize: '14px'
  },
  checkboxRow: {
    display: 'flex',
    gap: '8px',
    alignItems: 'center',
    fontSize: '14px'
  },
  button: {
    padding: '12px',
    borderRadius: '10px',
    backgroundColor: '#2563eb',
    color: '#fff',
    fontWeight: 600,
    cursor: 'pointer'
  },
  message: {
    textAlign: 'center',
    marginTop: '10px',
    fontSize: '14px'
  }
};

export default AddProduct;
