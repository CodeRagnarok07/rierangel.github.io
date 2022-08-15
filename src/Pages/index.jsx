import React from 'react'
import Home from '../components/Home';
import { Routes, Route } from "react-router-dom";
import PortfolioDetails from '../components/PortfolioDetails'

export default function index() {
    return (

        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/:type/:slug:id" element={<PortfolioDetails />} />
            <Route path="/trabajos/:slug" exact element={<PortfolioDetails />} />
        </Routes>
    )
}
