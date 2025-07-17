import { useState } from 'react'

const BankTransfer = () => {
  const [form, setForm] = useState({ name: '', account: '', ifsc: '' })

  const handlePay = () => {
    alert(`Paying ${form.name} | A/C: ${form.account} | IFSC: ${form.ifsc}`)
  }

  return (
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
      <button onClick={handlePay} className="bg-blue-600 text-white px-4 py-2 rounded">
        Pay Now
      </button>
    </div>
  )
}

export default BankTransfer
