import { Link } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

const Header = () => {
  const { isAuthenticated, logout } = useAuth();

  return (
    <nav>
      <div style={{ marginRight: 'auto', fontWeight: '900' }}>
        APP_B&W
      </div>
      <Link to="/">HOME</Link>
      <Link to="/team">EQUIPE</Link>
      {isAuthenticated && <Link to="/register">CADASTRO</Link>}
      {isAuthenticated && (
        <button 
          onClick={logout}
          style={{ padding: '2px 8px', fontSize: '0.8rem', border: '1px solid black' }}
        >
          LOGOUT
        </button>
      )}
    </nav>
  );
};

export default Header;
