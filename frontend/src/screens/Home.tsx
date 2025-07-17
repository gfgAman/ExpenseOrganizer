import { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import type { RootState } from '../redux/store'

import Header from '../components/Header'
import Cards from '../components/Cards'

//Payment Modes
import QrScanner from '../components/paymentModes.tsx/QrScanner'
import PayToContacts from '../components/paymentModes.tsx/PayToContacts'
import UpiTransfer from '../components/paymentModes.tsx/UpiTransfer'
import BankTransfer from '../components/paymentModes.tsx/BankTransfer'

interface BudgetCard {
  title: string
  budget_price: number
}

const Home = () => {
  const [title, setTitle] = useState('')
  const [selectedMode, setSelectedMode] = useState<string | null>(null)

  
  const [balanceAmount, setBalanceAmount] = useState<number>(0)
  const [budgetCards, setBudgetCards] = useState<BudgetCard[]>([])
  
  const { wallet } = useSelector((state: RootState) => state.cardSlice)
  
  const paymentModes = [
  { title: 'Scan QR', component: <QrScanner onScan={(data: any) => alert('Scanned: ' + data)} /> },
  { title: 'Pay to Contacts', component: <PayToContacts /> },
    { title: 'Pay via UPI ID', component: <UpiTransfer /> },
    { title: 'Bank Transfer', component: <BankTransfer /> },
  ]
  // Set initial wallet values
  useEffect(() => {
    if (wallet) {
      const initialCards = wallet.budget_cards ?? []
      const totalBudget = initialCards.reduce((sum, card) => sum + card.budget_price, 0)
      const balance = (wallet.bank_balance ?? 0) - totalBudget

      setBudgetCards(initialCards)
      setBalanceAmount(balance)
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
    <div className="bg-gradient-to-t from-fuchsia-500 to-black min-h-screen pt-4 px-4">
      <Header setTitle={setTitle} />

      <div>
        <h1 className="text-yellow-500 text-center font-bold text-lg">
          {wallet?.bank_name}
        </h1>
        <h2 className="text-white text-center font-bold mb-4">
          My Main Balance: ₹{balanceAmount}
        </h2>

        <div className="p-4 max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row md:gap-x-36 md:items-center">
      
            <div className="w-full md:w-1/3">
              <h1 className="text-2xl text-white font-bold text-center mb-6 border rounded-lg py-4">Choose Payment Mode</h1>

              {/* Payment Mode Buttons */}
              <div className="grid grid-cols-2 gap-4 mb-6">
                {paymentModes.map((mode, index) => (
                  <div
                    key={index}
                    onClick={() => setSelectedMode(mode.title)}
                    className="cursor-pointer p-4 rounded-lg shadow-md text-center font-semibold transition-all
                      bg-white hover:text-blue-700"
                  >
                    {mode.title}
                  </div>
                ))}
              </div>

              {/* Selected Mode Component */}
              <div className={`bg-white text-black ${selectedMode ? 'p-4' : ''} rounded-lg`}>
                {paymentModes.find((m) => m.title === selectedMode)?.component}
              </div>
            </div>
            <div className="w-full md:w-1/2">
              <Cards budgetCards={budgetCards} title = {wallet?.bank_name}/>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home
