import logo from "./gfx/logo.png";
import logoP from "./gfx/logo_p.png";
import "./App.scss";

function App() {
  return (
    <div className="layout">
      <header>
        <div className="container">
          <img src={logo} alt="okoheim" />
        </div>
      </header>
      <main>
        <div className="container height">
          <div>
            <img src={logoP} alt="okoheim" className="img-fluid" />
            <h1 class="display-4 mt-2">Seite in Bearbeitung</h1>
          </div>
        </div>
      </main>
    </div>
  );
}

export default App;
