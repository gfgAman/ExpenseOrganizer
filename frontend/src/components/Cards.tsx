import { useEffect, useState } from 'react'
import Card from './Card'
import { ToastContainer } from 'react-toastify'
import { useSelector } from 'react-redux'
import type { RootState } from '../redux/store'

interface cardProp {
  title: string
}

interface BudgetCard {
  title: string
  budget_price: number
}

const Cards = ({ title }: cardProp) => {
  const { wallet } = useSelector((state: RootState) => state.cardSlice)

  const [balanceAmount, setBalanceAmount] = useState<number>(0)
  const [budgetCards, setBudgetCards] = useState<BudgetCard[]>([])

  // Set initial wallet values
  useEffect(() => {
    if (wallet) {
      setBalanceAmount(wallet.bank_balance ?? 0)
      setBudgetCards(wallet.budget_cards ?? [])
    }
  }, [wallet])

  // Filter based on search
  useEffect(() => {
    if (!wallet?.budget_cards) return

    if (title.trim() === '') {
      setBudgetCards(wallet.budget_cards)
    } else {
      const filtered = wallet.budget_cards.filter(card =>
        card.title.toLowerCase().includes(title.toLowerCase())
      )
      setBudgetCards(filtered)
    }
  }, [title, wallet?.budget_cards])

  return (
    <div className='my-7'>
      <h1 className='text-yellow-500 text-center font-bold'>
        {wallet?.bank_name}
      </h1>
      <h1 className='text-white text-center font-bold'>
        My Main Balance: Rs. {balanceAmount}
      </h1>

      <div className='py-7'>
        <h1 className='text-white text-center mb-3'>Expense Cards</h1>

        <div className='grid md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-y-4'>
          {budgetCards.map(({ title, budget_price }, index) => (
            <Card
              key={`${title}-${index}`}
              title={title}
              budget_price={budget_price}
              setBalanceAmount={setBalanceAmount}
            />
          ))}
        </div>
      </div>
      <ToastContainer />
    </div>
  )
}

export default Cards