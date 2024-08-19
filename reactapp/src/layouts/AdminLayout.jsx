import React from 'react';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

function AdminLayout({ children }) {
    return (
        <div className="container-fluid">
            <header className="bg-primary text-white p-3 mb-4">
                <h1>Admin Dashboard</h1>
                <nav>
                    <ul className="nav">
                        <li className="nav-item">
                            <Link className="nav-link text-white" to="/">Trang chủ</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link text-white" to="/products">Danh sách sản phẩm</Link>
                        </li>
                    </ul>
                </nav>
            </header>
            <main>
                {children}
            </main>
        </div>
    );
}

export default AdminLayout;
