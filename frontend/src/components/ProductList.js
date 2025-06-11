import React, { useEffect, useState } from 'react';
import api from '../services/api';

function ProductList() {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        api.get('/products')
            .then(res => setProducts(res.date))
            .catch(err => console.error("Erro ao buscar produtos:", err));
    },[]);

    return (
            
        <div className="mt-6">
        <h2 className="text-xl font-semibold mb-2">Lista de Produtos</h2>
        <ul className="space-y-2">
            {products.map(prod => (
            <li key={prod.id} className="border p-2 rounded-md">
                <strong>{prod.name}</strong> — {prod.description} ({prod.quantity} unidades)
            </li>
            ))}
        </ul>
        </div>
 );
}

export default ProductList;