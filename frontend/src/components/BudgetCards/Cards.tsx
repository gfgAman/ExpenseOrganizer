import Card from './Card'
import { ToastContainer } from 'react-toastify'

interface BudgetCard {
  title: string
  budget_price: number
}

interface CardsProps {
  budgetCards: BudgetCard[],
  title: string
}

const Cards = ({ budgetCards, title }: CardsProps) => {
  return (
    <div>
      <div>
        <h1 className="text-white text-center mb-3 text-xl font-semibold border rounded-lg py-4 mb-6">Expense Cards</h1>

        {
          title ?
            <div className="grid sm:grid-cols-2 grid-cols-1 gap-y-4 gap-x-4">
              {budgetCards.map(({ title, budget_price }, index) => (
                <Card
                  key={`${title}-${index}`}
                  title={title}
                  budget_price={budget_price}
                />
              ))}
            </div> : <h1 className='text-2xl text-white text-center font-bold'>Please Select Your Bank</h1>
        }
      </div>
      <ToastContainer />
    </div>
  )
}

export default Cards
