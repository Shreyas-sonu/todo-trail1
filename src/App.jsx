import { BrowserRouter, Routes, Route } from "react-router-dom";
import Nav from "./Nav";
import Context from "./Context";
import Home from "./Home";
import Create from "./Create";
import Edit from "./Edit";
const App = () => {
  return (
    <Context>
      <BrowserRouter>
        <Nav />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/create" element={<Create />} />
          <Route path="/edit/:id" element={<Edit />} />
        </Routes>
      </BrowserRouter>
    </Context>
  );
};

export default App;
