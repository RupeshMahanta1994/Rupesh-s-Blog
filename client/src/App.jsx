import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { About, Projects, SignUp, SignIn } from "./pages";
import { Header, Footer } from "./components";

function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<About />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/signin" element={<SignIn />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
