import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Dashboard from '../pages/admin/Dashboard';
import ProductList from '../pages/admin/ProductList';
import AdminLayout from '../layouts/AdminLayout';

function AdminRoutes() {
    return (
        <Routes>
            <Route path="/" element={<AdminLayout><Dashboard /></AdminLayout>} />
            <Route path="/products" element={<AdminLayout><ProductList /></AdminLayout>} />
        </Routes>
    );
}

export default AdminRoutes;
