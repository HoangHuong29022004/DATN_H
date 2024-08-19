// import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import AdminRoutes from "./routes/AdminRoutes";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
    return (
        <Router>
            <AdminRoutes />
        </Router>
    );
}

export default App;
