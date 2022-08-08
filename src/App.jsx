import React from 'react';
import Home from './components/Home';
import Layout from './components/Layout';
import { Routes, Route } from "react-router-dom";



function App() {
  return (
    <>
      <Layout>

        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>

      </Layout>

    </>
  )
}

export default App;
