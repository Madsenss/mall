import { Routes, Route } from "react-router-dom";
import Nav from "./components/Nav.js";
import Layout from "./components/Layout.js";
import Footer from "./components/Footer.js";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={
          <>  
            <Nav />
            <Layout />
            <Footer />
          </>
        }/>
      </Routes> 
    </div>
  );
}

export default App;