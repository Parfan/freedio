import { BrowserRouter as Router } from "react-router-dom";
import Routes from "./routes";
import Navbar from "./components/Navbar";
import "./App.css";
import Footer from "./components/Footer";
import UserProvider from "./contexts/userContext";

function App() {
  return (
    <UserProvider>
      <Router>
        <Navbar />
        <Routes />
        <Footer />
      </Router>
    </UserProvider>
  );
}

export default App;
