import { useState } from 'react'
import Drawer from '../../Layouts/Drawer'
import { useSelector } from 'react-redux'
import type { RootState } from '../../redux/store'

const BankTransfer = () => {
  const [form, setForm] = useState({ name: '', account: '', ifsc: '' })
  const [showDrawer, setShowDrawer] = useState(false)

  const handlePay = () => {
    alert(`Paying ${form.name} | A/C: ${form.account} | IFSC: ${form.ifsc}`)
  }

  const { wallet } = useSelector((state: RootState) => state.cardSlice)

  return (
    <div className="bg-white text-black p-3 rounded-lg">
      {
        wallet?.bank_name ? (
          <div>
            <h2 className="text-xl font-semibold mb-2">Bank Transfer</h2>

            <input
              type="text"
              placeholder="Recipient Name"
              className="border p-2 w-full mb-2 rounded"
              value={form.name}
              onChange={(e) => setForm({ ...form, name: e.target.value })}
            />

            <input
              type="text"
              placeholder="Account Number"
              className="border p-2 w-full mb-2 rounded"
              value={form.account}
              onChange={(e) => setForm({ ...form, account: e.target.value })}
            />

            <input
              type="text"
              placeholder="IFSC Code"
              className="border p-2 w-full mb-2 rounded"
              value={form.ifsc}
              onChange={(e) => setForm({ ...form, ifsc: e.target.value })}
            />

            <button
              onClick={handlePay}
              className="bg-blue-600 text-white px-4 py-2 rounded"
            >
              Choose Wallet
            </button>
          </div>
        ) : (
          <p>No Bank Selected</p>
        )
      }


      <Drawer isOpen={!!showDrawer} onClose={() => setShowDrawer(false)}>
        {wallet?.budget_cards?.map((card, i) => (
          <div key={i} className="p-4 border rounded mb-3 bg-gray-100">
            <h4 className="font-semibold">{card.title}</h4>
            <p>₹ {card.budget_price.toLocaleString()}</p>
          </div>
        ))}
      </Drawer>
    </div>
  )
}

export default BankTransfer
