import "./App.css";
import Header from "./components/header";
import Sidebar from "./components/sidebar";
import Section from "./components/section";
import Listing from "./components/listing";

function App() {
  return (
    <div className="App">
      <Header />
      <Sidebar />
      <Section listings={23} />
      <Listing />
    </div>
  );
}

export default App;
