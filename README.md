# 🧾 Sistema de Controle de Estoque

Aplicação Fullstack desenvolvida com **FastAPI** no backend e **React + TailwindCSS** no frontend. O sistema permite a gestão de produtos e controle de estoque com interface web intuitiva e API robusta.

---

## 🛠 Tecnologias Utilizadas

### 🚀 Backend (FastAPI)
- FastAPI
- SQLAlchemy
- SQLite (ou outro banco)
- Pydantic
- Alembic
- Passlib + Python-Jose (para autenticação)
- Uvicorn

### 💻 Frontend (React)
- React 18
- TailwindCSS
- Axios
- React Router
- Recharts (para gráficos, se desejar)

---

## ⚙️ Instalação

### 🔧 Backend

```bash
# Acesse a pasta do backend
cd backend

# (opcional) Crie e ative um ambiente virtual
python -m venv venv
venv\Scripts\activate  # Windows
source venv/bin/activate  # Mac/Linux

# Instale as dependências
pip install -r requirements.txt

# Inicie o servidor FastAPI
uvicorn app.main:app --reload
```
A API estará disponível em:
- http://localhost:8000
- http://localhost:8000/docs → Swagger

```bash
# Acesse a pasta do frontend
cd frontend

# Instale as dependências
npm install

# Rode o servidor React
npm start
```

O frontend estará disponível em:
- http://localhost:3000

 Funcionalidades
📦 CRUD de produtos

📊 Visualização gráfica (Recharts)

🌐 Integração com API via Axios

🎨 Interface moderna com TailwindCSS


👨‍💻 Autor
- Heric Rodrigues Silva
- LinkedIn: Heric Rodrigues


