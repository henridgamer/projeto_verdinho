function AdminLogin({ setScreen }) {

  return (
    <div className="page">

      <div className="card">

        <div className="top-section">

          <div className="logo-icon">
            🍀
          </div>

          <div>
            <h1>Verdinho </h1>

            <p>
              Painel Administrativo
            </p>
          </div>

        </div>

        <div className="form-card">

          <h2>
            Login Administrativo
          </h2>

          <form>

            <div className="input-group">

              <label>
                E-mail
              </label>

              <input
                type="email"
                placeholder="Digite seu e-mail"
              />

            </div>

            <div className="input-group">

              <label>
                Senha
              </label>

              <input
                type="password"
                placeholder="Digite sua senha"
              />

            </div>

            <button className="enter-button">
              Entrar
            </button>

          </form>

          <button
            className="back-button"
            onClick={() => setScreen("home")}
          >
            Voltar
          </button>

        </div>

      </div>

    </div>
  );
}

export default AdminLogin;