import { BrowserRouter, Routes, Route, useNavigate } from "react-router-dom";
import React, { Suspense, lazy } from "react";
import "./App.css";
const DashBoardPage = React.lazy(() =>
  import("./components/DashBoardPage.jsx")
);
const Landing = React.lazy(() => import("./components/Landing.jsx"));

function App() {
  return (
    <div>
      <BrowserRouter>
        <AppBar />
        <Suspense fallback={<div>Loading...</div>}>
          <Routes>
            <Route path="/dashboard" element={<DashBoardPage />} />
            <Route path="/" element={<Landing />} />
          </Routes>
        </Suspense>
      </BrowserRouter>
    </div>
  );
}

function AppBar() {
  const navigate = useNavigate();

  return (
    <div>
      <div>
        <button
          onClick={() => {
            navigate("/");
          }}
        >
          Landing page
        </button>

        <button
          onClick={() => {
            navigate("/dashboard");
          }}
        >
          Dashboard
        </button>
      </div>
    </div>
  );
}

export default App;
