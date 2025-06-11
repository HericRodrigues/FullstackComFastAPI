import React, { useState } from 'react';
import api from '../services/api';

function ProductForm({onAdd}) {
    const [form, setForm] = useState({
        name: '',
        description: '',
        quantity: 0,
    });

    const handleChange = e => {
        setForm({ ...form, [e.target.name]: e.target.value });
    }

    const handleSubmit = async e => {
        e.preventDefault();
        try {
            const res = await api.post('/products', form);
            onAdd(res.data);
            setForm({ name: '', description: '', quantity: 0 });
        }catch (err) {
            console.error("Erro ao adicionar produto:", err);
            alert("Erro ao adicionar produto. Tente novamente.");
        }
    };

    return (
        <form onSubmit={handleSubmit} className="space-y-3 mt-4">
            <input
                name="name"
                placeholder="Nome do Produto"
                value={form.name}
                onChange={handleChange}
                className="border p-2 rounded w-full">
                required
            </input>
            <input
                name="description"
                placeholder="Descrição"
                value={form.description}
                onChange={handleChange}
                className="border p-2 rounded w-full">
                required
            </input>
    )       <input
                type="number"
                name="quantity"
                placeholder="Quantidade"
                value={form.quantity}
                onChange={handleChange}
                className="border p-2 rounded w-full"
                required
            />
            <buttun type="submit" className="bg-blue-500 text-white py-2 rounded">
               Adicionar Produto</buttun>
        </form> 
    );

}

export default ProductForm;