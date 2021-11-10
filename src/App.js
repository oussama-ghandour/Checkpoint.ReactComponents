
import './App.css';
import NavBar from "./component/NavBar";
import FullName from './component/FullName';
import ProfilePhoto from './component/ProfilePhoto';
import Adress from "./component/Adress"
import "./Css/style.css";

function App() {
  return (
    <div className="App">
      <NavBar />
      <ProfilePhoto />
      <FullName />
      <Adress />
    </div>
  );
}

export default App;
