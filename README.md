# SISTEMA_WEB_B&W

Aplicação React moderna, minimalista e funcional desenvolvida com foco em autenticação Google e cadastro de usuários.

## 📋 DESCRIÇÃO
Este projeto é uma aplicação web "seca" (minimalista), utilizando uma paleta de cores estritamente preto e branco, sem emojis ou adornos desnecessários. Oferece integração com conta Google para login, preenchimento automático de dados e geração de objetos JSON para cadastro.

## 🛠 TECNOLOGIAS UTILIZADAS
- **React 18** (Functional Components + Hooks)
- **TypeScript** (TSX)
- **Vite** (Build Tool)
- **React Router Dom** (Navegação)
- **Google OAuth (@react-oauth/google)** (Autenticação)
- **Vanilla CSS** (Estilização Minimalista)

## 👥 INTEGRANTES DA DUPLA
1. **JOAO VITOR CHAVES**: Desenvolvedor focado em arquitetura web e sistemas escaláveis.
2. **PARCEIRO DE PROJETO**: Colaborador técnico responsável pela estruturação e design.

## 🚀 INSTRUÇÕES PARA EXECUÇÃO LOCAL

1. **Clonar o Repositório**:
   ```bash
   git clone <url-do-repositorio>
   cd <nome-da-pasta>
   ```

2. **Instalar Dependências**:
   ```bash
   npm install
   ```

3. **Configurar Variáveis de Ambiente**:
   - Crie um arquivo `.env` na raiz do projeto.
   - Adicione seu Client ID do Google:
     ```env
     VITE_GOOGLE_CLIENT_ID=seu_client_id.apps.googleusercontent.com
     ```
   - Você pode obter o Client ID no [Google Cloud Console](https://console.cloud.google.com/).

4. **Executar em Modo de Desenvolvimento**:
   ```bash
   npm run dev
   ```

5. **Acessar a Aplicação**:
   Abra o navegador em `http://localhost:5173`.

## 🌐 DEPLOY (PRODUCAO)
Acesse a aplicação online em: [LINK_DA_APLICACAO_PUBLICADA]

---

*Projeto desenvolvido para fins acadêmicos - 2026*
