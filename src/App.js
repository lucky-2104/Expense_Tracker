import './App.css';
import { Header } from './components/Header';
import { Balance } from './components/Balance';
import { Expenses } from './components/Expenses';
import { TransactionList } from './components/TransactionList';
import { AddTransaction } from './components/AddTransaction';
import {GlobalProvider} from './context/GlobalState';
function App() {
  return (
    <GlobalProvider>
      <Header />
      <div className="container">
        <Balance />
        <Expenses />
        <TransactionList />
        <AddTransaction/>
      </div>
      

    </GlobalProvider>
  );
}

export default App;
