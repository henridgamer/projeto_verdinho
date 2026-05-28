import { useState } from "react";

import Home from "./components/Home";
import AdminLogin from "./components/AdminLogin";

function App() {

  const [screen, setScreen] = useState("home");

  return (
    <>

      {screen === "home" && (
        <Home setScreen={setScreen} />
      )}

      {screen === "admin" && (
        <AdminLogin setScreen={setScreen} />
      )}

    </>
  );
}

export default App;