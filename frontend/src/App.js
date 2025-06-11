import React from 'react';
import ProductList  from './components/ProductList';  
import ProductForm from './components/ProductForm';



function App() {
  const [products, setProducts] = useState([]);

  const addProduct = (prod) => {
    setProducts((prev) => [...prev, prod]);
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Gerenciamento de Produtos</h1>
      <ProductForm onAdd={addProduct} />
      <ProductList products={products} />
    </div>
  )
}

export default App;