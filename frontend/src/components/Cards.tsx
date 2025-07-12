import { useEffect, useState } from 'react'
import { budgetData } from '../assets/cardsData'
import Card from './Card'


interface cardProp{
    title:string
}
const Cards = ({title}:cardProp) => {
  const [balanceAmount, setBalanceAmount] = useState(10000)
  const [budgetCards, setBudgetCards] = useState(budgetData)


  
  useEffect(() => {
    if (title.trim() === '') {
      setBudgetCards(budgetData) // Reset to original list if title is empty
    } else {
      const filteredCards = budgetData.filter(card => card.title.toLowerCase().includes(title.toLowerCase()))
      setBudgetCards(filteredCards)
    }
  }, [title])

  return (
    <div className='my-7'>
      <h1 className='text-white text-center font-bold'>My Main Balance: Rs. {balanceAmount}</h1>

      <div className='py-7'>
        <h1 className='text-white text-center'>Expense Cards</h1>

        <div className='grid md:grid-cols-3 sm:grid-cols-2 grid-cols-1'>
          {budgetCards.map(({ title, budget_price }) => (
            <Card
              key={title}
              title={title}
              budget_price={budget_price}
              setBalanceAmount={setBalanceAmount}

            />
          ))}
        </div>
      </div>
    </div>
  )
}

export default Cards
