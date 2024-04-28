// App.js
import React, { useState } from 'react';
import './App.css';
import './index.css';

import Header from './components/Header';
import Search from './components/Search';
import TransactionForm from './components/TransactionForm';
import TransactionTable from './components/TransactionTable';

function App() {
  const [transactions, setTransactions] = useState([]);

  const addTransaction = (newTransaction) => {
    setTransactions([...transactions, newTransaction]);
  };

  return (
    <div className="App">
      <Header />
      <Search />
      <TransactionForm onAddTransaction={addTransaction} />
      <TransactionTable transactions={transactions} />
    </div>
  );
}

export default App;
