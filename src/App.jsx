import { lazy } from "react";
import { Route, Routes } from "react-router";
const DetailsPage = lazy(() => import("./Components/DetailsPage/DetailsPage"));
const HomePage = lazy(() => import("./Components/HomePage/HomePage"));

function App() {
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
