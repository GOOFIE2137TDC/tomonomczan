import 'bootstrap/dist/css/bootstrap.css'
import { useState } from 'react'

function App() {
  const [category, setCategory] = useState('');    
  const [amount, setAmount] = useState('');
  const [date, setDate] = useState('');
  const [expenses, setExpenses] = useState([]);

  const handleAddExpense = () => {
    console.log(`kategoria: ${category}; kwota: ${amount}; data: ${date}`);
    setExpenses([...expenses, { category, amount, date }]);
    {
      <>
      <div className='container'>
        <form>
          <div className='form-group'>
            <label>Kategoria wydatku:</label>
            <input type='text' className='form-control' value={category} 
            onChange={e => setCategory(e.target.value)} />
          </div>
        </form>
      </div>
      </>
    }
  }
}
export default App;
