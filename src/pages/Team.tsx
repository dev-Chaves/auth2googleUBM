const Team = () => {
  const developers = [
    {
      name: "JOAO VITOR CHAVES",
      bio: "DESENVOLVEDOR FOCADO EM ARQUITETURA WEB E SISTEMAS ESCALAVEIS. INTERESSE EM IA E AUTOMACAO.",
      skills: ["REACT", "TYPESCRIPT", "NODE.JS", "PYTHON"]
    },
    {
      name: "PARCEIRO DE PROJETO",
      bio: "COLABORADOR TECNICO RESPONSAVEL PELA ESTRUTURACAO E DESIGN DO SISTEMA.",
      skills: ["FRONT-END", "UX/UI MINIMALISTA", "CSS CONTEXT"]
    }
  ];

  return (
    <div className="container">
      <h1>EQUIPE_DE_DESENVOLVIMENTO</h1>
      
      {developers.map((dev, index) => (
        <div key={index} className="card">
          <h2>{dev.name}</h2>
          <p style={{ marginBottom: '1rem' }}>{dev.bio}</p>
          <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap' }}>
            {dev.skills.map(skill => (
              <span key={skill} style={{ padding: '2px 8px', border: '1px solid black', fontSize: '0.7rem' }}>
                {skill}
              </span>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default Team;
