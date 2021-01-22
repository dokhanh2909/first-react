import logo from "./logo.svg";
import "./App.css";
import { showInfo, signUp } from "./ultis/ulti";

function App() {
  showInfo();
  signUp({ username: "linh6", password: "12345" });
  return <div> Hello World </div>;
}

export default App;
