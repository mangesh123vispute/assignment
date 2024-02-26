import AppState from "./context/appstate.jsx";
import Dashboard from "./components/Dashboard.jsx";

function App() {
  return (
    <div
      className="App"
      style={{
        display: "flex",
        justifyContent: "center",
      }}
    >
      <AppState>
        <Dashboard />
      </AppState>
    </div>
  );
}

export default App;
