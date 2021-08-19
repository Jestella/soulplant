import "./App.css";

import Header from "./components/header/header.component";
import Home from "./pages/home/home.component";
import Footer from "./components/footer/footer.component";

function App() {
  return (
    <div className="App">
      <Header />
      <Home />
      <Footer />
    </div>
  );
}

export default App;
