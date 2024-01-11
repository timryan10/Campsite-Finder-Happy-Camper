import React from "react";
import "./index.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Layout from "./layouts/Layout";
import Register from "./pages/Register";
import cors from 'cors';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout>
          <p>Home Page</p>
        </Layout>} />

        <Route path="/search" element={<Layout>
          <p>Search Page</p>
        </Layout>} />

        <Route path="/register" element={<Layout><Register/></Layout>} />

        <Route path="*" element={<Layout>
          <p>Home Page</p>
        </Layout>} />
      </Routes>
    </Router>
  );
};

export default App;
