import { ToastContainer } from "react-toastify";
import "./App.css";
import { Outlet } from "react-router-dom";

function App() {
  return (
    <main id="App">
      <ToastContainer
        style={{
          zIndex: "999999999999999999999999999999",
        }}
      />
      <Outlet/>
    </main>
  );
}

export default App;
