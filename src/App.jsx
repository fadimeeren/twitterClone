import { BrowserRouter } from "react-router-dom";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />}></Route>
        <Route path="/feed" element={<Feed />}></Route>
        <Route></Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
