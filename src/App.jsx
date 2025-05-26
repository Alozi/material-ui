import { BrowserRouter, Routes, Route } from "react-router-dom";

import SearchAppBar from "./components/SearchAppBar";
import Home from "./pages/Home";
import About from "./pages/About";
import Test from "./pages/Test";
import Tour from './pages/Tour';

function App() {
  return (
    <>
      <BrowserRouter>
        <SearchAppBar />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/test" element={<Test />} />
          <Route path="/:id" element={<Tour />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
