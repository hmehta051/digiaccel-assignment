import { Route, Routes } from "react-router";
import DetailsPage from "./Components/DetailsPage/DetailsPage";
import HomePage from "./Components/HomePage/HomePage";
function App() {
  //Routes
  return (
    <>
      <Routes>
        <Route path="/" element={<HomePage />}></Route>
        <Route path="/details-page/" element={<DetailsPage />}></Route>
      </Routes>
    </>
  );
}

export default App;
