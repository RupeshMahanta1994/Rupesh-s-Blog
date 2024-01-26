import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { About, Projects, SignUp, SignIn } from "./pages";
import { Header } from "./components";

function App() {
  return (
    <>
      <h1 className="text-4xl">hello</h1>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<About />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/signin" element={<SignIn />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
