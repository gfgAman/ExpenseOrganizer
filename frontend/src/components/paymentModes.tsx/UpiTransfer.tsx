import { useState } from 'react'

const UpiTransfer = () => {
    const [upi, setUpi] = useState('')

    const handlePay = () => {
        alert(`Paying to UPI ID: ${upi}`)
    }

    return (
        <div>
            <h2 className="text-xl font-semibold mb-2">Pay via UPI ID</h2>
            <input
                type="text"
                placeholder="e.g. name@upi"
                className="border p-2 w-full mb-2 rounded"
                value={upi}
                onChange={(e) => setUpi(e.target.value)}
            />
            <button onClick={handlePay} className="bg-green-600 text-white px-4 py-2 rounded">
                Pay Now
            </button>
        </div>
    )
}

export default UpiTransfer
