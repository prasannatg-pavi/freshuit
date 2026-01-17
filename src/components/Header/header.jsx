import { useState } from 'react';
import logo from '../../assets/freshuit_transparent_cropped_ori.png';

const Header = ({
  categories = [],
  selectedCategories = [],
  setSelectedCategories
}) => {
  const [open, setOpen] = useState(false);

  const allCategoryIds = categories.map(c => c.id);
  const isAllSelected =
    selectedCategories.length === allCategoryIds.length;

  const toggleShowAll = () => {
    setSelectedCategories(isAllSelected ? [] : allCategoryIds);
  };

  const toggleCategory = (id) => {
    if (selectedCategories.includes(id)) {
      setSelectedCategories(
        selectedCategories.filter(cid => cid !== id)
      );
    } else {
      setSelectedCategories([...selectedCategories, id]);
    }
  };

  return (
    <header style={styles.header}>
      <img src={logo} alt="Freshuit" style={styles.logo} />

      <div style={styles.filterWrapper}>
        <button
          style={styles.filterButton}
          onClick={() => setOpen(!open)}
        >
          Categories
        </button>

        {open && (
          <div style={styles.dropdown}>
            {/* SHOW ALL */}
            <label style={styles.option}>
              <input
                type="checkbox"
                checked={isAllSelected}
                onChange={toggleShowAll}
              />
              Show All
            </label>

            <hr style={styles.divider} />

            {categories.map(cat => (
              <label key={cat.id} style={styles.option}>
                <input
                  type="checkbox"
                  checked={selectedCategories.includes(cat.id)}
                  onChange={() => toggleCategory(cat.id)}
                />
                {cat.name}
              </label>
            ))}
          </div>
        )}
      </div>
    </header>
  );
};

const styles = {
  header: {
    height: '64px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: '0 16px',
    backgroundColor: '#fff',
    borderBottom: '1px solid #e5e7eb',
    position: 'sticky',
    top: 0,
    zIndex: 100
  },
  logo: {
    height: '42px',
    objectFit: 'contain'
  },
  filterWrapper: {
    position: 'relative'
  },
  filterButton: {
    padding: '8px 12px',
    borderRadius: '8px',
    border: '1px solid #d1d5db',
    background: '#f9fafb',
    cursor: 'pointer',
    fontWeight: 600
  },
  dropdown: {
    position: 'absolute',
    right: 0,
    top: '44px',
    background: '#fff',
    border: '1px solid #e5e7eb',
    borderRadius: '10px',
    padding: '10px',
    width: '220px',
    boxShadow: '0 8px 24px rgba(0,0,0,0.12)',
    maxHeight: '320px',
    overflowY: 'auto'
  },
  option: {
    display: 'flex',
    gap: '8px',
    alignItems: 'center',
    padding: '6px 0',
    fontSize: '14px',
    cursor: 'pointer'
  },
  divider: {
    margin: '8px 0',
    border: 'none',
    borderTop: '1px solid #eee'
  }
};

export default Header;


// import logo from '../../assets/freshuit_transparent_cropped_ori.png';

// const Header = () => {
//   return (
//     <header style={styles.header}>
//       <img
//         src={logo}
//         alt="Freshuit Logo"
//         style={styles.logo}
//       />
//     </header>
//   );
// };

// const styles = {
//   header: {
//     width: '100%',
//     height: '64px',
//     display: 'flex',
//     alignItems: 'center',
//     justifyContent: 'flex-start',
//     // padding: '0 16px',
//     backgroundColor: '#ffffff',
//     borderBottom: '1px solid #e5e7eb',
//     position: 'sticky',
//     top: 0,
//     zIndex: 100
//   },
//   logo: {
//     height: 'clamp(36px, 5vw, 48px)',
//     width: 'auto',
//     objectFit: 'contain'
//   }
// };

// export default Header;


// import "./header.css"

// const Header = () => {
//   return (
//     <header className="header">
//         <div style={{
//             textAlign:"center"
//         }}>Site Under Construction (2026)...... </div>
//       <img src="/logo.png" alt="Store Logo" />
//     </header>
//   );
// };

// export default Header;
