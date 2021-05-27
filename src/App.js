import logo from "./logo.svg";
import "./App.css";
import ExampleOne from "./ex_one/ExampleOne";

function App() {
  return (
    <main className="container-fluid">
      <div className="d-flex flex-column justify-items-center align-items-center py-5 w-100">
        <img src={logo} className="App-logo" alt="logo" />
        <h1 className="fs-3 fw-bold font-monospace text-decoration-underline">Learning Reactive Search</h1>
        <hr />
        <ExampleOne />
      </div>
    </main>
  );
}

export default App;
