const SearchFilter = ({ onSearch }) => {
  return (
    <input
      type="text"
      placeholder="Search products..."
      onChange={(e) => onSearch(e.target.value)}
      style={styles.input}
    />
  );
};

const styles = {
  input: {
    width: '100%',
    maxWidth: '420px',
    margin: '16px auto',
    padding: '12px',
    display: 'block',
    borderRadius: '10px',
    border: '1px solid #d1d5db',
    fontSize: '14px'
  }
};

export default SearchFilter;

// const SearchFilter = ({ onSearch }) => {
//   return (
//     <input
//       type="text"
//       placeholder="Search products..."
//       onChange={(e) => onSearch(e.target.value)}
//     />
//   );
// };

// export default SearchFilter;
