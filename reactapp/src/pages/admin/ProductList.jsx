import React from 'react';

function ProductList() {
    return (
        <div className="container">
            <h1 className="my-4">Danh sách sản phẩm</h1>
            <ul className="list-group">
                <li className="list-group-item">Sản phẩm 1</li>
                <li className="list-group-item">Sản phẩm 2</li>
                <li className="list-group-item">Sản phẩm 3</li>
                {/* Thêm các sản phẩm khác tại đây */}
            </ul>
        </div>
    );
}

export default ProductList;
