import Dashboard from "./components/Dashboard";
import AppState from "./context/appstate.jsx";

function App() {
  return (
    <div className="App">
      <AppState>
        <Dashboard />
      </AppState>
    </div>
  );
}

export default App;
