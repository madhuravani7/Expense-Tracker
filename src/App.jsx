import React from 'react'
import Header from './Components/Header'
import Balance from './Components/Balance'
import IncomeExpenses from './Components/IncomeExpenses'

const App = () => {
  return (
    <div className='main-div'>
      <Header/>
      <div className="container">
        <Balance/>
        <IncomeExpenses/>
      </div>
    </div>
  )
}

export default App