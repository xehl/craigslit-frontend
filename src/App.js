import "./App.css";
import Header from "./components/header";
import Sidebar from "./components/sidebar";
import Section from "./components/section";

function App() {
  return (
    <div className="App">
      <Sidebar />
      <div>
        <Header />
        <div className="sections-container">
          <Section listings={23} title={"Free and for sale"} />
          <Section listings={23} title={"Personals"} />
          <Section listings={23} title={"Links / Discussion"} />
        </div>
      </div>
    </div>
  );
}

export default App;
