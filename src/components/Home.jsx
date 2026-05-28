function Home({ setScreen }) {

  return (
    <div className="page">

      <div className="card">

        <div className="top-section">

          <div className="logo-icon">
            🍀
          </div>

          <div>
            <h1>Verdinho 2</h1>

            <p>
              Sistema acadêmico de eventos e certificados
            </p>
          </div>

        </div>

        <div className="form-card">

          <h2>
            Acesso do Aluno
          </h2>

          <form>

            <div className="input-group">

              <label>
                Matrícula
              </label>

              <input
                type="text"
                placeholder="Digite sua matrícula"
              />

            </div>

            <div className="input-group">

              <label>
                Data de Nascimento
              </label>

              <input
                type="date"
              />

            </div>

            <button className="enter-button">
              Entrar
            </button>

          </form>

          <button className="register-button">
            Realizar cadastro
          </button>

          <div className="divider"></div>

          <button
            className="admin-link"
            onClick={() => setScreen("admin")}
          >
            Acesso administrativo →
          </button>

        </div>

        <p className="footer-text">
          Sistema seguro e sem senha tradicional
        </p>

      </div>

    </div>
  );
}

export default Home;