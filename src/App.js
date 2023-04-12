import React, { useState } from 'react';
import './App.css'
function BillingForm() {
  const [customerName, setCustomerName] = useState('');
  const [items, setItems] = useState([{ product: { name: '', price: 0 }, quantity: 1 }]);
  const [bill, setBill] = useState(null);

  const products = [    { name: 'Sugar', price: 50 },    { name: 'Milk', price: 40 },    { name: 'Tea leaf', price: 200 },  ];

  const handleCustomerNameChange = (e) => {
    setCustomerName(e.target.value);
  };

  const handleProductChange = (index, e) => {
    const updatedItems = [...items];
    const selectedProduct = products.find((product) => product.name === e.target.value);
    updatedItems[index].product = selectedProduct;
    setItems(updatedItems);
  };

  const handleQuantityChange = (index, e) => {
    const updatedItems = [...items];
    updatedItems[index].quantity = Number(e.target.value);
    setItems(updatedItems);
  };

  const handleAddItem = () => {
    const newItems = [...items, { product: { name: '', price: 0 }, quantity: 1}];
    setItems(newItems);
  };

  const handleCreateBill = () => {
    const billItems = items.map((item) => {
      return { ...item.product, quantity: item.quantity };
    });
    const total = billItems.reduce((sum, item) => sum + item.quantity * item.price, 0);
    const bill = { customerName, items: billItems, total };
    setBill(bill);
  };

  return (
    <div>
    <div className='main-area'>
      <label className='customer-name'>
        Customer Name:
        <input type="text" value={customerName} onChange={handleCustomerNameChange} />
      </label>
      {items.map((item, index) => (
        <div  key={index}>
          <label>
            Product:
            <select value={item.product.name} onChange={(e) => handleProductChange(index, e)}>
              <option value="">Select a product</option>
              {products.map((product) => (
                <option key={product.name} value={product.name}>
                  {product.name} ({product.price} Rs)
                </option>
              ))}
            </select>
          </label>
          <br/>
          <label>
            Quantity:
            <input type="number" value={item.quantity} onChange={(e) => handleQuantityChange(index, e)} />
          </label>
        </div>
      ))}
      <button className='btn-add-bill' onClick={handleAddItem}>Add More Item</button>
      <button className='btn-add-bill' onClick={handleCreateBill}>Create Bill</button>
      </div>
      {bill && (
        <div className='bill-item'>
          <h2>Bill for {bill.customerName}</h2>
          <table>
            <thead>
              <tr>
                <th>Product</th>
                <th>Quantity</th>
                <th>Price</th>
              </tr>
            </thead>
            <tbody>
              {bill.items.map((item, index) => (
                <tr key={index}>
                  <td>{item.name}</td>
                  <td>{item.quantity}</td>
                  <td>{item.price}Rs</td>
                </tr>
              ))}
              <tr>
                <td colSpan="2">Total</td>
                <td>{bill.total}Rs</td>
              </tr>
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
}

export default BillingForm;
