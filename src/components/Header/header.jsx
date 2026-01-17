import logo from '../../assets/freshuit_transparent_cropped_ori.png';

const Header = () => {
  return (
    <header style={styles.header}>
      <img
        src={logo}
        alt="Freshuit Logo"
        style={styles.logo}
      />
    </header>
  );
};

const styles = {
  header: {
    width: '100%',
    height: '64px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-start',
    // padding: '0 16px',
    backgroundColor: '#ffffff',
    borderBottom: '1px solid #e5e7eb',
    position: 'sticky',
    top: 0,
    zIndex: 100
  },
  logo: {
    height: 'clamp(36px, 5vw, 48px)',
    width: 'auto',
    objectFit: 'contain'
  }
};

export default Header;


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
