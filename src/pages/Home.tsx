import { useAuth } from '../context/AuthContext';
import GoogleLoginButton from '../components/GoogleLoginButton';

const Home = () => {
  const { user, isAuthenticated } = useAuth();

  return (
    <div className="container">
      <header>
        <h1>SISTEMA_WEB</h1>
        <p>AUTENTICACAO E CADASTRO MINIMALISTA</p>
      </header>

      <section style={{ marginTop: '4rem' }}>
        {isAuthenticated ? (
          <div className="card">
            <h2>BEM-VINDO</h2>
            <p>CONECTADO COMO: <strong>{user?.name}</strong></p>
            <p>EMAIL: {user?.email}</p>
            <div style={{ marginTop: '1rem' }}>
              <img 
                src={user?.picture} 
                alt="Profile" 
                style={{ width: '100px', border: '2px solid black' }} 
              />
            </div>
          </div>
        ) : (
          <div className="card">
            <h2>ACESSO</h2>
            <p>PERSONALIZE SUA EXPERIENCIA REALIZANDO O LOGIN ABAIXO.</p>
            <GoogleLoginButton />
          </div>
        )}
      </section>
    </div>
  );
};

export default Home;
