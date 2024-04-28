// TransactionForm.js
import React, { useState } from 'react';
import './index.css';

function TransactionForm({ onAddTransaction }) {
  const [date, setDate] = useState('');
  const [description, setDescription] = useState('');
  const [category, setCategory] = useState('');
  const [amount, setAmount] = useState('');

  const handleDateChange = (e) => setDate(e.target.value);
  const handleDescriptionChange = (e) => setDescription(e.target.value);
  const handleCategoryChange = (e) => setCategory(e.target.value);
  const handleAmountChange = (e) => setAmount(e.target.value);

  const addTransaction = () => {
    onAddTransaction({ date, description, category, amount });
    setDate('');
    setDescription('');
    setCategory('');
    setAmount('');
  };

  return (
    <div className="input">
      <input
        type="date"
        placeholder="Date"
        value={date}
        onChange={handleDateChange}
      ></input>
      <input
        type="text"
        placeholder="Description"
        value={description}
        onChange={handleDescriptionChange}
      ></input>
      <input
        type="text"
        placeholder="Category"
        value={category}
        onChange={handleCategoryChange}
      ></input>
      <input
        type="number"
        placeholder="Amount"
        value={amount}
        onChange={handleAmountChange}
      ></input>
      <button onClick={addTransaction}>Add Transaction</button>
    </div>
  );
}

export default TransactionForm;
