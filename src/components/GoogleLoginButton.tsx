import { GoogleLogin } from '@react-oauth/google';
import { useAuth } from '../context/AuthContext';
import { jwtDecode } from 'jwt-decode';

interface GoogleUser {
  name: string;
  email: string;
  picture: string;
  sub: string;
}

const GoogleLoginButton = () => {
  const { login } = useAuth();

  const handleSuccess = (credentialResponse: any) => {
    const decoded: GoogleUser = jwtDecode(credentialResponse.credential);
    login({
      name: decoded.name,
      email: decoded.email,
      picture: decoded.picture,
      sub: decoded.sub
    });
  };

  return (
    <div style={{ margin: '2rem 0' }}>
      <GoogleLogin
        onSuccess={handleSuccess}
        onError={() => {
          console.log('Login Failed');
        }}
        theme="outline"
        shape="square"
      />
    </div>
  );
};

export default GoogleLoginButton;
