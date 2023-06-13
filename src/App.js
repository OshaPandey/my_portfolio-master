import Navbar from "./components/Navbar/Navbar";
import Header from "./components/Header/Header";
import Work from "./components/Work/Work";
import Project from "./components/Project/Project";
import Footer from "./components/Footer/Footer";
import "./app.scss";
function App() {
  return (
    <div className="App">
      <Navbar />
      <Header />
      <Work />
      <Project />
      <Footer />
    </div>
  );
}

export default App;
