import { useState, useEffect } from 'react';
import { useAuth } from '../context/AuthContext';

const Register = () => {
  const { user } = useAuth();
  const [formData, setFormData] = useState({
    nome: '',
    email: '',
    telefone: '',
    cargo: '',
    empresa: ''
  });
  const [jsonOutput, setJsonOutput] = useState<string | null>(null);

  useEffect(() => {
    if (user) {
      setFormData(prev => ({
        ...prev,
        nome: user.name,
        email: user.email
      }));
    }
  }, [user]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const output = JSON.stringify(formData, null, 2);
    setJsonOutput(output);
    console.log('DADOS_CADASTRO:', output);
  };

  return (
    <div className="container">
      <h1>CADASTRO_DE_USUARIO</h1>
      
      <form onSubmit={handleSubmit} className="card">
        <label>NOME_COMPLETO</label>
        <input 
          type="text" 
          name="nome" 
          value={formData.nome} 
          onChange={handleChange} 
          required 
        />

        <label>ENDERECO_DE_EMAIL</label>
        <input 
          type="email" 
          name="email" 
          value={formData.email} 
          onChange={handleChange} 
          required 
        />

        <label>TELEFONE (OPCIONAL)</label>
        <input 
          type="tel" 
          name="telefone" 
          value={formData.telefone} 
          onChange={handleChange} 
        />

        <label>CARGO</label>
        <input 
          type="text" 
          name="cargo" 
          value={formData.cargo} 
          onChange={handleChange} 
        />

        <label>EMPRESA</label>
        <input 
          type="text" 
          name="empresa" 
          value={formData.empresa} 
          onChange={handleChange} 
        />

        <button type="submit">FINALIZAR_CADASTRO</button>
      </form>

      {jsonOutput && (
        <div style={{ marginTop: '2rem' }}>
          <h3>JSON_GERADO</h3>
          <pre className="json-output">
            {jsonOutput}
          </pre>
        </div>
      )}
    </div>
  );
};

export default Register;
