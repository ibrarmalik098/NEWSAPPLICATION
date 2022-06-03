import React from "react";
import {  BrowserRouter as Router,   Route,   Routes,} from "react-router-dom";
import Dashboard from "../screens/Dashboard";


export default function RouterApp() {
    return (
        <div>
                <Router>
                <Routes>
                    <Route index path="/*" element={<Dashboard/>} />
                </Routes>
           
        </Router>
            </div>
    );
}